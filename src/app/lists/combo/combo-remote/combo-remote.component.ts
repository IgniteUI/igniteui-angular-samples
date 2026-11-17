import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { IComboSearchInputEventArgs, IComboSelectionChangingEventArgs, IgxComboComponent, IgxComboFooterDirective } from 'igniteui-angular/combo';
import { IForOfState, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxHintDirective, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { RemoteNWindService } from '../../../services/remoteNwind.service';

type RequestStatus = 'pending' | 'done' | 'event' | 'cancelled' | 'error';

interface LogEntry {
    id: number;
    title: string;
    status: RequestStatus;
    /** The short result on the right: "200 · 6 items", "pending…" or "event". */
    result: string;
    /** The request URL, or what the event changed. */
    detail: string;
}

interface ComboState {
    startIndex: number;
    chunkSize: number;
    totalItemCount: number;
    searchText: string;
    selection: string;
}

const ITEM_HEIGHT = 32;
const VISIBLE_ITEMS = 6;
const SEARCH_DEBOUNCE_MS = 300;
const LOG_SIZE = 4;
const UPDATE_BURST_MS = 1000;
/** Up to this many IDs fit on the selection row of the state panel. */
const INLINE_SELECTION = 5;
/** About three lines of IDs in the selection box of the state panel. */
const SELECTION_CHARS = 130;

@Component({
    providers: [RemoteNWindService],
    selector: 'app-combo-remote',
    styleUrls: ['./combo-remote.component.scss'],
    templateUrl: './combo-remote.component.html',
    imports: [
        IgxComboComponent,
        IgxComboFooterDirective,
        IgxLabelDirective,
        IgxHintDirective,
        IgxBadgeComponent,
        IgxLinearProgressBarComponent,
        IgxTooltipDirective,
        IgxTooltipTargetDirective,
        AsyncPipe
    ]
})
export class ComboRemoteComponent implements OnInit, OnDestroy {
    private remoteService = inject(RemoteNWindService);
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('remoteCombo', { static: true })
    public remoteCombo: IgxComboComponent;

    public readonly itemHeight = ITEM_HEIGHT;
    public readonly itemsMaxHeight = ITEM_HEIGHT * VISIBLE_ITEMS;
    public readonly inlineSelection = INLINE_SELECTION;
    public rData = this.remoteService.remoteData;

    /** What the state panel shows, and which of it changed with the last update. */
    public state: ComboState = { startIndex: 0, chunkSize: VISIBLE_ITEMS, totalItemCount: 0, searchText: '—', selection: '[]' };
    public changed = new Set<keyof ComboState>();
    public selection: number[] = [];
    public selectionList = '';
    public selectionFull = '';
    public hiddenSelection = 0;

    public log: LogEntry[] = [];
    /** The items the bound data holds, and the chunk being loaded, for the dropdown footer. */
    public loadedRange = { from: 0, to: 0 };
    public loadingRange: { from: number; to: number } | null = null;
    public searchText = '';

    private request: Subscription;
    private requestEntry: LogEntry;
    private searchTimer: ReturnType<typeof setTimeout>;
    private nextLogId = 0;
    private lastUpdate = 0;
    /** All products, unfiltered: the ProductIDs run from 1 to this count. */
    private productCount = 0;
    /** The item to scroll to on opening: the last selection, or the first item. */
    private itemID = 1;
    private additionalScroll = 0;

    public ngOnInit() {
        this.load('init · getData()', { startIndex: 0, chunkSize: VISIBLE_ITEMS }, '', { withCount: true });
    }

    public ngOnDestroy() {
        clearTimeout(this.searchTimer);
        this.request?.unsubscribe();
    }

    public get footerText(): string {
        const { totalItemCount } = this.state;
        const shown = `${this.loadedRange.from}–${this.loadedRange.to}`;

        if (!totalItemCount) {
            return this.searchText ? `No products match "${this.searchText}"` : 'No products';
        }
        if (this.searchText) {
            return `Showing ${shown} of ${totalItemCount} matches`;
        }
        return this.loadingRange
            ? `Showing ${shown} of ${totalItemCount} · loading ${this.loadingRange.from}–${this.loadingRange.to}`
            : `Showing ${shown} of ${totalItemCount} · loaded on demand`;
    }

    public onDataPreLoad() {
        const state = this.remoteCombo.virtualizationState;
        this.loadingRange = {
            from: state.startIndex + 1,
            to: Math.min(state.startIndex + state.chunkSize, this.state.totalItemCount)
        };
        this.load('dataPreLoad · getData()', { ...state }, this.searchText);
    }

    public onSearchInputUpdate(event: IComboSearchInputEventArgs) {
        const text = event?.searchText || '';

        // One request when typing pauses, rather than one per key.
        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(() => {
            this.searchText = text;
            this.load(`searchInputUpdate · getData(${text ? `"${text}"` : ''})`,
                { startIndex: 0, chunkSize: VISIBLE_ITEMS }, text, { withCount: true, search: true });
        }, SEARCH_DEBOUNCE_MS);
    }

    public onSelectionChanging(event: IComboSelectionChangingEventArgs) {
        const ids = event.newValue as number[];

        if (!ids.length) {
            this.itemID = 1;
            this.additionalScroll = 0;
        } else {
            // On the next opening, the list scrolls back to the last selected product, as close
            // to the top as the end of the list allows.
            const last = ids[ids.length - 1];
            this.additionalScroll = last === this.productCount ? 1 : 0;
            this.itemID = this.productCount - last >= VISIBLE_ITEMS - 1
                ? last
                : this.productCount - (VISIBLE_ITEMS - 1);
        }

        this.selection = [...ids].sort((a, b) => a - b);
        this.describeSelection();
        const newSelection = ids.length > INLINE_SELECTION ? `${ids.length} items` : `[${ids.join(', ')}]`;
        this.addLog('selectionChanging', 'event', 'event', `newSelection = ${newSelection} → itemID = ${this.itemID}`);
        this.updateState({ selection: this.selectionRow() });
    }

    public onOpened() {
        const index = this.itemID - 1 + this.additionalScroll;
        void this.remoteCombo.virtualScrollContainer.scrollToIndex(index, { block: 'start' });
        this.addLog('opened', 'event', 'event', this.selection.length
            ? `scrollToIndex(${index}): back at the last selection`
            : 'scrollToIndex(0): the top of the list');
    }

    public onClosing() {
        clearTimeout(this.searchTimer);
        const hadSearch = !!this.searchText;
        this.searchText = '';
        this.addLog('closing', 'event', 'event', 'searchText = ""');
        this.updateState({ searchText: hadSearch ? '— (cleared on closing)' : '—' });
    }

    public onClosed() {
        // Load the chunk around the last selection, so that the next opening starts there.
        this.load('closed · getData()', { startIndex: this.itemID - 1, chunkSize: VISIBLE_ITEMS }, '', { withCount: true });
    }

    private load(title: string, state: IForOfState, searchText: string, options: { withCount?: boolean; search?: boolean } = {}) {
        // A newer request makes the one in flight stale.
        if (this.request && this.requestEntry?.status === 'pending') {
            this.request.unsubscribe();
            this.requestEntry.status = 'cancelled';
            this.requestEntry.result = 'cancelled';
        }

        const url = this.remoteService.buildUrl(state, searchText);
        const entry = this.addLog(title, 'pending', 'pending…', `GET ${url.replace(/^.*\/Northwind\.svc/, '')}`);
        this.requestEntry = entry;
        this.cdr.markForCheck();

        this.request = this.remoteService.getData(state, searchText, (data) => {
            const count: number = data['@odata.count'];
            const items: number = data.value.length;

            this.remoteCombo.totalItemCount = count;
            if (!searchText) {
                this.productCount = count;
            }

            entry.status = 'done';
            entry.result = `200 · ${items} items${options.withCount ? ` · count ${count}` : ''}`;
            this.loadedRange = { from: items ? state.startIndex + 1 : 0, to: state.startIndex + items };
            this.loadingRange = null;
            this.updateState({
                startIndex: state.startIndex,
                chunkSize: state.chunkSize,
                totalItemCount: count,
                ...(options.search && { searchText: searchText ? `"${searchText}"` : '—' })
            });
            this.cdr.markForCheck();
        }, (error) => {
            entry.status = 'error';
            entry.result = error?.status ? `${error.status} · failed` : 'failed';
            this.loadingRange = null;
            this.cdr.markForCheck();
        });
    }

    private addLog(title: string, status: RequestStatus, result: string, detail: string): LogEntry {
        const entry: LogEntry = { id: this.nextLogId++, title, status, result, detail };
        this.log = [...this.log, entry].slice(-LOG_SIZE);
        return entry;
    }

    /**
     * Applies the next state and marks what changed, so that the panel can highlight it. Updates
     * that arrive together, like a search and the chunk the combo loads after it, share one mark.
     */
    private updateState(next: Partial<ComboState>) {
        const changed = (Object.keys(next) as (keyof ComboState)[]).filter(key => next[key] !== this.state[key]);
        const now = Date.now();
        this.changed = now - this.lastUpdate < UPDATE_BURST_MS ? new Set([...this.changed, ...changed]) : new Set(changed);
        this.lastUpdate = now;
        this.state = { ...this.state, ...next };
    }

    private selectionRow(): string {
        return this.selection.length > INLINE_SELECTION
            ? `${this.selection.length} items`
            : `[${this.selection.join(', ')}]`;
    }

    /** A selection too long for its row is listed below it, up to about three lines. */
    private describeSelection() {
        let list = '[';
        let shown = 0;
        for (const id of this.selection) {
            const next = `${shown ? ', ' : ''}${id}`;
            if (list.length + next.length > SELECTION_CHARS) {
                break;
            }
            list += next;
            shown++;
        }

        this.hiddenSelection = this.selection.length - shown;
        this.selectionList = this.hiddenSelection ? `${list}, …` : `${list}]`;
        this.selectionFull = `[${this.selection.join(', ')}]`;
    }
}

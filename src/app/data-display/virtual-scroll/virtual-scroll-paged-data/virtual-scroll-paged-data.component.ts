import { Component, signal } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxChipComponent } from 'igniteui-angular/chips';
import {
    IgxListActionDirective,
    IgxListComponent,
    IgxListItemComponent,
    IgxListLineSubTitleDirective,
    IgxListLineTitleDirective,
    IgxListThumbnailDirective
} from 'igniteui-angular/list';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent, VirtualDataWindow, VirtualScrollState } from 'igniteui-angular/virtual-scroll';
import { Employee, generateEmployees } from '../employees';

/** The size of the whole remote collection. */
const TOTAL_COUNT = 100_000;
/** Extra records requested on each side of the range the viewport wants. */
const BUFFER = 30;

@Component({
    selector: 'app-virtual-scroll-paged-data',
    styleUrls: ['./virtual-scroll-paged-data.component.scss'],
    templateUrl: './virtual-scroll-paged-data.component.html',
    imports: [
        IgxVirtualScrollComponent,
        IgxVirtualItemDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListLineSubTitleDirective,
        IgxListActionDirective,
        IgxAvatarComponent,
        IgxChipComponent,
        IgxLinearProgressBarComponent
    ]
})
export class VirtualScrollPagedDataComponent {
    /** Only this page is in memory, while the scrollbar spans `totalCount` records. */
    public readonly page = signal<VirtualDataWindow<Employee>>({
        items: generateEmployees(2 * BUFFER),
        startIndex: 0,
        totalCount: TOTAL_COUNT
    });
    public readonly loading = signal(false);

    private wantedRange: VirtualScrollState | null = null;

    /** `stateChange` reports the range the viewport wants, which the next page is loaded from. */
    public onStateChange(state: VirtualScrollState): void {
        this.wantedRange = state;
        this.loadPageIfNeeded();
    }

    private loadPageIfNeeded(): void {
        const wanted = this.wantedRange;
        if (!wanted || wanted.endIndex < wanted.startIndex || this.loading()) {
            return;
        }

        const page = this.page();
        const pageEnd = page.startIndex + page.items.length - 1;
        if (wanted.startIndex >= page.startIndex && wanted.endIndex <= pageEnd) {
            return;
        }

        const startIndex = Math.max(0, wanted.startIndex - BUFFER);
        const endIndex = Math.min(TOTAL_COUNT - 1, wanted.endIndex + BUFFER);

        this.loading.set(true);
        this.fetchPage(startIndex, endIndex - startIndex + 1).then(({ items, totalCount }) => {
            this.page.set({ items, startIndex, totalCount });
            this.loading.set(false);
            // The user may have scrolled further while the request was in flight.
            this.loadPageIfNeeded();
        });
    }

    /** Simulates a request to a remote service that supports skip/take paging. */
    private fetchPage(skip: number, take: number): Promise<{ items: Employee[]; totalCount: number }> {
        return new Promise(resolve => {
            setTimeout(() => resolve({ items: generateEmployees(take, skip), totalCount: TOTAL_COUNT }), 300);
        });
    }
}

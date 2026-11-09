import { Component, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent, VirtualDataWindow, VirtualScrollState } from 'igniteui-angular/virtual-scroll';
import { Subscription } from 'rxjs';
import { RemoteNWindService } from '../../../services/remoteNwind.service';

/** Extra records requested on each side of the range the viewport wants. */
const BUFFER = 10;

@Component({
    providers: [RemoteNWindService],
    selector: 'app-drop-down-remote',
    templateUrl: './drop-down-remote.component.html',
    styleUrls: ['./drop-down-remote.component.scss'],
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxVirtualScrollComponent, IgxVirtualItemDirective, IgxDropDownItemComponent, IgxToastComponent]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    private remoteService = inject(RemoteNWindService);

    @ViewChild('loadingToast', { read: IgxToastComponent, static: true })
    public loadingToast: IgxToastComponent;
    @ViewChild('remoteDropDown', { read: IgxDropDownComponent, static: true })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 40;

    /** The loaded page; the list is as long as `totalCount`, so the scrollbar spans every product. */
    public readonly page = signal<VirtualDataWindow<any>>({ items: [], startIndex: 0, totalCount: 0 });

    private pending: Subscription;

    public ngOnInit() {
        this.loadPage(0, 2 * BUFFER);
    }

    /** `stateChange` reports the range the viewport wants; load a page when the loaded one does not cover it. */
    public onStateChange(state: VirtualScrollState) {
        const page = this.page();
        if (state.startIndex >= page.startIndex && state.endIndex < page.startIndex + page.items.length) {
            return;
        }

        const startIndex = Math.max(0, state.startIndex - BUFFER);
        this.loadPage(startIndex, state.endIndex - startIndex + 1 + BUFFER);
    }

    public ngOnDestroy() {
        this.pending?.unsubscribe();
    }

    private loadPage(startIndex: number, count: number) {
        // Cancel the previous request, so a slow response cannot replace a newer page.
        this.pending?.unsubscribe();
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');

        this.pending = this.remoteService.getData({ startIndex, chunkSize: count }, null, (data) => {
            this.page.set({ items: data.value, startIndex, totalCount: data['@odata.count'] });
            this.loadingToast.close();
        });
    }
}

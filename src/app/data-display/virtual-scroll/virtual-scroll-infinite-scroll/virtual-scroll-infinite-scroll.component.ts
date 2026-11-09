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
import { IgxVirtualItemDirective, IgxVirtualScrollComponent, VirtualScrollDataRequest } from 'igniteui-angular/virtual-scroll';
import { Employee, generateEmployees } from '../employees';

/** The size of the whole remote collection. */
const TOTAL_COUNT = 1_000;
const PAGE_SIZE = 50;

@Component({
    selector: 'app-virtual-scroll-infinite-scroll',
    styleUrls: ['./virtual-scroll-infinite-scroll.component.scss'],
    templateUrl: './virtual-scroll-infinite-scroll.component.html',
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
export class VirtualScrollInfiniteScrollComponent {
    public readonly totalCount = TOTAL_COUNT;
    public readonly employees = signal<Employee[]>(generateEmployees(PAGE_SIZE));
    public readonly loading = signal(false);

    /**
     * `dataRequest` is emitted when the rendered window nears the end of `data`.
     * Only one request is emitted at a time: the next one follows the next `data` change.
     */
    public loadMore(request: VirtualScrollDataRequest): void {
        if (this.loading() || request.startIndex >= TOTAL_COUNT) {
            return;
        }

        this.loading.set(true);
        const count = Math.min(Math.max(request.count, PAGE_SIZE), TOTAL_COUNT - request.startIndex);

        // Simulates a request to a remote service.
        setTimeout(() => {
            // Assign a new array: `data` is compared by reference.
            this.employees.update(current => [...current, ...generateEmployees(count, request.startIndex)]);
            this.loading.set(false);
        }, 800);
    }
}

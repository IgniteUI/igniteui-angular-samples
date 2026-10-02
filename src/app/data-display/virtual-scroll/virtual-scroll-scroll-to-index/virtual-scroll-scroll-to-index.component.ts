import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import {
    IgxListActionDirective,
    IgxListComponent,
    IgxListItemComponent,
    IgxListLineSubTitleDirective,
    IgxListLineTitleDirective,
    IgxListThumbnailDirective
} from 'igniteui-angular/list';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';
import { Employee, generateEmployees } from '../employees';

@Component({
    selector: 'app-virtual-scroll-scroll-to-index',
    styleUrls: ['./virtual-scroll-scroll-to-index.component.scss'],
    templateUrl: './virtual-scroll-scroll-to-index.component.html',
    imports: [
        FormsModule,
        IgxVirtualScrollComponent,
        IgxVirtualItemDirective,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxRadioGroupDirective,
        IgxRadioComponent,
        IgxButtonDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListLineSubTitleDirective,
        IgxListActionDirective,
        IgxAvatarComponent,
        IgxChipComponent
    ]
})
export class VirtualScrollScrollToIndexComponent {
    public readonly employees: Employee[] = generateEmployees(100_000);
    public readonly alignments: ScrollLogicalPosition[] = ['start', 'center', 'end', 'nearest'];

    public readonly targetIndex = signal(50_000);
    public readonly alignment = signal<ScrollLogicalPosition>('start');
    public readonly highlightedIndex = signal<number | null>(null);

    private readonly virtualScroll = viewChild.required<IgxVirtualScrollComponent<Employee>>('virtualScroll');

    public async goTo(index: number): Promise<void> {
        const target = Math.min(Math.max(Math.trunc(index) || 0, 0), this.employees.length - 1);
        this.targetIndex.set(target);
        this.highlightedIndex.set(null);

        // Items that have not been rendered only have an estimated size, so the
        // first jump lands near the target. The promise resolves once the
        // component has measured the landing area and corrected the offset.
        await this.virtualScroll().scrollToIndex(target, { block: this.alignment() });
        this.highlightedIndex.set(target);
    }

    public goToRandom(): void {
        this.goTo(Math.floor(Math.random() * this.employees.length));
    }
}

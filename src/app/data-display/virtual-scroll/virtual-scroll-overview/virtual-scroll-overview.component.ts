import { Component } from '@angular/core';
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
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';
import { Employee, generateEmployees } from '../employees';

@Component({
    selector: 'app-virtual-scroll-overview',
    styleUrls: ['./virtual-scroll-overview.component.scss'],
    templateUrl: './virtual-scroll-overview.component.html',
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
        IgxChipComponent
    ]
})
export class VirtualScrollOverviewComponent {
    public readonly employees: Employee[] = generateEmployees(100_000);
}

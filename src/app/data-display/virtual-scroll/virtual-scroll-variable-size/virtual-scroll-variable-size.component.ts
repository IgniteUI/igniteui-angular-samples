import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxChipComponent } from 'igniteui-angular/chips';
import {
    IgxListActionDirective,
    IgxListComponent,
    IgxListItemComponent,
    IgxListLineDirective,
    IgxListLineSubTitleDirective,
    IgxListLineTitleDirective,
    IgxListThumbnailDirective
} from 'igniteui-angular/list';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';
import { Employee, generateEmployees } from '../employees';

@Component({
    selector: 'app-virtual-scroll-variable-size',
    styleUrls: ['./virtual-scroll-variable-size.component.scss'],
    templateUrl: './virtual-scroll-variable-size.component.html',
    imports: [
        IgxVirtualScrollComponent,
        IgxVirtualItemDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListLineSubTitleDirective,
        IgxListLineDirective,
        IgxListActionDirective,
        IgxAvatarComponent,
        IgxChipComponent
    ]
})
export class VirtualScrollVariableSizeComponent {
    public readonly employees: Employee[] = generateEmployees(10_000);
}

import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardThumbnailDirective } from 'igniteui-angular/card';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxVirtualItemDirective, IgxVirtualScrollComponent } from 'igniteui-angular/virtual-scroll';
import { Employee, generateEmployees } from '../employees';

@Component({
    selector: 'app-virtual-scroll-horizontal',
    styleUrls: ['./virtual-scroll-horizontal.component.scss'],
    templateUrl: './virtual-scroll-horizontal.component.html',
    imports: [
        IgxVirtualScrollComponent,
        IgxVirtualItemDirective,
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardThumbnailDirective,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardContentDirective,
        IgxAvatarComponent,
        IgxChipComponent
    ]
})
export class VirtualScrollHorizontalComponent {
    public readonly employees: Employee[] = generateEmployees(10_000);
}

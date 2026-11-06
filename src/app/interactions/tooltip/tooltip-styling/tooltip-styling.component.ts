import { Component, inject, ViewEncapsulation } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { HorizontalAlignment, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';

const blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/></svg>';

@Component({
    selector: 'app-tooltip-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tooltip-styling.component.scss'],
    templateUrl: './tooltip-styling.component.html',
    imports: [
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective,
        IgxAvatarComponent,
        IgxBadgeComponent,
        IgxIconComponent,
        IgxDatePickerComponent
    ]
})
export class TooltipStylingComponent {
    public positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    constructor() {
        inject(IgxIconService).addSvgIconFromText('block', blockIcon, 'material');
    }
}

import { Component, inject } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { HorizontalAlignment, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IncomeTaxes } from './IncomeTaxes';

const blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/></svg>';

@Component({
    selector: 'app-tooltip-custom',
    styleUrls: ['./tooltip-custom.component.scss'],
    templateUrl: './tooltip-custom.component.html',
    imports: [
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective,
        IgxListActionDirective,
        IgxAvatarComponent,
        IgxBadgeComponent,
        IgxIconComponent,
        IgxCategoryChartModule
    ]
})
export class TooltipCustomComponent {
    public incomeTaxes = new IncomeTaxes();
    public avatarUrl = 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png';

    public positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    constructor() {
        inject(IgxIconService).addSvgIconFromText('block', blockIcon, 'material');
    }
}

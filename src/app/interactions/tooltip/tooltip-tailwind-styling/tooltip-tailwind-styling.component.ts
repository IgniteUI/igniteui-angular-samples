import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HorizontalAlignment, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective } from 'igniteui-angular/list';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';

const bitcoinIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.339 11.5126C12.339 12.9126 9.93898 12.7486 9.17798 12.7476L9.18298 10.2676C9.94498 10.2686 12.34 10.0526 12.339 11.5126ZM11.82 8.01263C11.82 6.68463 9.82001 6.88363 9.18701 6.88363V9.13263C9.81901 9.13263 11.817 9.28463 11.82 8.01163V8.01263ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM12.952 9.406C13.6673 9.0676 14.0651 8.29005 13.921 7.512C13.8 6.177 12.644 5.728 11.189 5.6V3.749H10.062V5.549C9.762 5.549 9.462 5.549 9.162 5.559V3.745H8.036V5.595C7.792 5.6 7.553 5.604 7.319 5.604V5.6H5.765V6.8C5.765 6.8 6.597 6.785 6.584 6.8C6.89841 6.76025 7.18651 6.98023 7.231 7.294L7.223 12.365C7.20855 12.5849 7.01895 12.7517 6.799 12.738C6.813 12.751 5.98 12.738 5.98 12.738L5.754 14.083C6.308 14.083 7.488 14.083 8.025 14.093V15.966H9.15V14.113C9.459 14.12 9.758 14.123 10.05 14.123V15.967H11.177V14.098C13.072 13.992 14.398 13.517 14.565 11.739C14.6866 11.213 14.581 10.6602 14.274 10.2161C13.967 9.77207 13.487 9.47797 12.952 9.406Z"/></svg>';

@Component({
    selector: 'app-tooltip-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tooltip-tailwind-styling.component.scss'],
    templateUrl: './tooltip-tailwind-styling.component.html',
    imports: [
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineTitleDirective,
        IgxListActionDirective,
        IgxIconComponent,
        IgxCategoryChartModule,
        IgxPieChartModule
    ]
})
export class TooltipTailwindStylingComponent {
    public portfolio = [
        { asset: 'Bitcoin', share: 56 },
        { asset: 'Ethereum', share: 24 },
        { asset: 'Other', share: 20 }
    ];

    public balanceHistory = [
        { period: '2021', exchange: 7, assets: 5 },
        { period: 'Jul 2021', exchange: 10, assets: 8 },
        { period: '2022', exchange: 12, assets: 10 },
        { period: 'Jul 2022', exchange: 20, assets: 15 },
        { period: '2023', exchange: 20, assets: 13 },
        { period: 'Jul 2023', exchange: 28, assets: 8 },
        { period: '2024', exchange: 55, assets: 24 },
        { period: 'Jul 2024', exchange: 58, assets: 16 },
        { period: '2025', exchange: 43, assets: 18 }
    ];

    public positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public portfolioPositionSettings: PositionSettings = {
        ...this.positionSettings,
        offset: 0
    };

    constructor() {
        inject(IgxIconService).addSvgIconFromText('bitcoin', bitcoinIcon, 'material');
    }
}

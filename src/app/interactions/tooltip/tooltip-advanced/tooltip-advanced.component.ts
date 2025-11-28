import { Component, inject } from "@angular/core";
import { IgxButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';
import { IgxCategoryChartModule } from "igniteui-angular-charts";
import { IncomeTaxes } from "./IncomeTaxes";

@Component({
    selector: "app-tooltip-advanced",
    styleUrls: ["./tooltip-advanced.component.scss"],
    templateUrl: "./tooltip-advanced.component.html",
    imports: [
        IgxOverlayOutletDirective,
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListActionDirective,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective,
        IgxAvatarComponent,
        IgxIconComponent,
        IgxBadgeComponent,
        IgxButtonDirective,
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardHeaderTitleDirective,
        IgxCategoryChartModule
    ]
})
export class TooltipAdvancedComponent {
    private iconService = inject(IgxIconService);

    private dollarIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    private filterIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/></svg>';
    private linkIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>';
    private infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>';
    private blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"/></svg>';
    private btcIcon = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.339 11.5126C12.339 12.9126 9.93898 12.7486 9.17798 12.7476L9.18298 10.2676C9.94498 10.2686 12.34 10.0526 12.339 11.5126ZM11.82 8.01263C11.82 6.68463 9.82001 6.88363 9.18701 6.88363V9.13263C9.81901 9.13263 11.817 9.28463 11.82 8.01163V8.01263ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM12.952 9.406C13.6673 9.0676 14.0651 8.29005 13.921 7.512C13.8 6.177 12.644 5.728 11.189 5.6V3.749H10.062V5.549C9.762 5.549 9.462 5.549 9.162 5.559V3.745H8.036V5.595C7.792 5.6 7.553 5.604 7.319 5.604V5.6H5.765V6.8C5.765 6.8 6.597 6.785 6.584 6.8C6.89841 6.76025 7.18651 6.98023 7.231 7.294L7.223 12.365C7.20855 12.5849 7.01895 12.7517 6.799 12.738C6.813 12.751 5.98 12.738 5.98 12.738L5.754 14.083C6.308 14.083 7.488 14.083 8.025 14.093V15.966H9.15V14.113C9.459 14.12 9.758 14.123 10.05 14.123V15.967H11.177V14.098C13.072 13.992 14.398 13.517 14.565 11.739C14.6866 11.213 14.581 10.6602 14.274 10.2161C13.967 9.77207 13.487 9.47797 12.952 9.406Z" fill="#DF1B74"/></svg>';

    private incomeTaxes: IncomeTaxes = null;

    constructor() {
        this.iconService.addSvgIconFromText('dollar', this.dollarIcon);
        this.iconService.addSvgIconFromText('filter', this.filterIcon);
        this.iconService.addSvgIconFromText('link', this.linkIcon);
        this.iconService.addSvgIconFromText('info', this.infoIcon);
        this.iconService.addSvgIconFromText('block', this.blockIcon);
        this.iconService.addSvgIconFromText('btc', this.btcIcon);
    }

    public get incomeTaxesData(): IncomeTaxes {
        if (this.incomeTaxes === null)
        {
            this.incomeTaxes = new IncomeTaxes();
        }
        return this.incomeTaxes;
    }
}

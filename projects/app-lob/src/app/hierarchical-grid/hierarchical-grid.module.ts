/* tslint:disable:max-line-length */
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxChipsModule, IgxColumnHidingModule,
    IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule, IgxExcelExporterService, IgxFocusModule, IgxGridModule, IgxHierarchicalGridModule,
    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule, IgxSwitchModule,
    IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule } from "igniteui-angular";
import { IgxPieChartModule} from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import { IgxSparklineCoreModule } from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule } from "igniteui-angular-charts/ES5/igx-sparkline-module";

import { HGridColumnResizingSampleComponent } from "./hierarchical-grid-column-resizing/hierarchical-grid-resizing.component";
import { HierarchicalGridDVRoutingModule } from "./hierarchical-grid-routing.module";

@NgModule({
    declarations: [
        HGridColumnResizingSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HierarchicalGridDVRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxColumnHidingModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxFocusModule,
        IgxGridModule,
        IgxHierarchicalGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxSelectModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        IgxBannerModule,
        IgxSnackbarModule,
        IgxTooltipModule,
        IgxTabsModule,
        IgxPieChartModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class HierarchicalGridDVModule { }

// tslint:disable:max-line-length
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxCheckboxModule,
    IgxChipsModule, IgxColumnHidingModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule,
    IgxDialogModule, IgxDividerModule, IgxExcelExporterService, IgxExpansionPanelModule, IgxFocusModule, IgxGridModule,
    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule,
    IgxSwitchModule, IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule
} from "igniteui-angular";
import { IgxBarSeriesModule} from "igniteui-angular-charts/ES5/igx-bar-series-module";
import { IgxBollingerBandsOverlayModule } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxIndicatorsModule } from "igniteui-angular-charts/ES5/igx-indicators-module";
import { IgxItemLegendComponent } from "igniteui-angular-charts/ES5/igx-item-legend-component";
import {IgxItemLegendModule} from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxPieChartComponent} from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxPieChartModule} from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import { IgxRingSeriesModule } from "igniteui-angular-charts/ES5/igx-ring-series-module";
import { IgxSparklineCoreModule } from "igniteui-angular-charts/ES5/igx-sparkline-core-module";
import { IgxSparklineModule } from "igniteui-angular-charts/ES5/igx-sparkline-module";
import { GridComponent } from "./grid-boston-marathon/grid.component";
import { GridMasterDetailSampleComponent } from "./grid-master-detail/grid-master-detail.component";
import { GridsDVRoutingModule } from "./grids-routing.module";

@NgModule({
    declarations: [
        GridComponent,
        GridMasterDetailSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        GridsDVRoutingModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxBannerModule,
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
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxTooltipModule,
        IgxExpansionPanelModule,
        IgxSelectModule,
        IgxSparklineModule,
        IgxSparklineCoreModule,
        IgxSnackbarModule,
        IgxDataChartCategoryModule,
        IgxDataChartCoreModule,
        IgxLegendModule,
        IgxIndicatorsModule,
        IgxFinancialPriceSeriesModule,
        IgxDataChartInteractivityModule,
        IgxBollingerBandsOverlayModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxCategoryXAxisModule,
        IgxDoughnutChartModule,
        IgxRingSeriesModule,
        IgxItemLegendModule,
        IgxPieChartModule,
        IgxTabsModule,
        IgxDataChartStackedModule,
        IgxCardModule,
        IgxDividerModule,
        IgxDataChartScatterModule,
        IgxBarSeriesModule,
        IgxCategoryChartModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ],
    entryComponents: [
        IgxDoughnutChartComponent,
        IgxDataChartComponent,
        IgxCategoryXAxisComponent,
        IgxNumericYAxisComponent,
        IgxItemLegendComponent,
        IgxLegendComponent,
        IgxNumericXAxisComponent,
        IgxPieChartComponent
    ]
})
export class GridsDVModule { }

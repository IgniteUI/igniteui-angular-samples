import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule  } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxDialogModule, IgxRippleModule } from "igniteui-angular";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import {
    IgxPercentChangeYAxisDynamicModule
} from "igniteui-angular-charts/ES5/igx-percent-change-y-axis-dynamic-module";
import { SamplesUtilitiesModule } from "../utilities/utilities.module";
import {
    FinancialChartAnnotationsComponent
} from "./annotations/financial-chart-annotations.component";
import { FinancialChartAxisTypesComponent } from "./axis-types/financial-chart-axis-types.component";
import {
    FinancialChartCustomIndicatorsComponent
} from "./custom-indicators/financial-chart-custom-indicators.component";
import { FinancialChartHighFrequencyComponent } from "./high-frequency/financial-chart-high-frequency.component";
import { FinancialChartHighVolumeComponent } from "./high-volume/financial-chart-high-volume.component";
import { FinancialChartIndicatorTypesComponent } from "./indicator-types/financial-chart-indicator-types.component";
import { FinancialChartMultipleDataComponent } from "./multiple-data/financial-chart-multiple-data.component";
import { FinancialChartMultipleFeedsComponent } from "./multiple-feeds/financial-chart-multiple-feeds.component";
import { FinancialChartOverviewComponent } from "./overview/financial-chart-overview-sample.component";
import { FinancialChartPanesComponent } from "./panes/financial-chart-panes.component";
import { FinancialChartPerformanceComponent } from "./performance/financial-chart-performance.component";
import { FinancialDataService } from "./services/financial-data.service";
import { StockDataService } from "./services/stock-data.service";
import { FinancialChartTimeBasedDataComponent } from "./time-based-data/financial-chart-time-based-data.component";
import { FinancialChartTitlesComponent } from "./titles/financial-chart-titles.component";
import {
    FinancialChartTooltipTemplateComponent
} from "./tooltip-template/financial-chart-tooltip-template.component";
import { FinancialChartTooltipTypesComponent } from "./tooltip-types/financial-chart-tooltip-types.component";
import { FinancialChartTrendlinesComponent } from "./trendlines/financial-chart-trendlines.component";
import { FinancialChartVolumeTypeComponent } from "./volume-type/financial-chart-volume-type.component";

@NgModule({
    declarations: [
        FinancialChartAnnotationsComponent,
        FinancialChartOverviewComponent,
        FinancialChartMultipleDataComponent,
        FinancialChartMultipleFeedsComponent,
        FinancialChartTooltipTemplateComponent,
        FinancialChartPerformanceComponent,
        FinancialChartTitlesComponent,
        FinancialChartPanesComponent,
        FinancialChartIndicatorTypesComponent,
        FinancialChartVolumeTypeComponent,
        FinancialChartCustomIndicatorsComponent,
        FinancialChartHighVolumeComponent,
        FinancialChartHighFrequencyComponent,
        FinancialChartAxisTypesComponent,
        FinancialChartTrendlinesComponent,
        FinancialChartTimeBasedDataComponent,
        FinancialChartTooltipTypesComponent
    ],
    exports: [
    ],
    imports: [ CommonModule, FormsModule,
        SamplesUtilitiesModule,
        IgxButtonModule,
        IgxDialogModule,
        IgxRippleModule,
        IgxFinancialChartModule,
        IgxPercentChangeYAxisDynamicModule,
        IgxLegendModule
    ]
})
export class FinancialChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FinancialChartSamplesModule,
            providers: [ StockDataService, FinancialDataService ]
        };
    }
}

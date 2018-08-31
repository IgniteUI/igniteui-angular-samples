import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule  } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import {
    IgxPercentChangeYAxisDynamicModule
} from "igniteui-angular-charts/ES5/igx-percent-change-y-axis-dynamic-module";
import { FinancialChartAxisTypesComponent } from "./axis-types/financial-chart-axis-types.component";
import {
    FinancialChartCustomIndicatorsComponent
} from "./custom-indicators/financial-chart-custom-indicators.component";
import { FinancialChartCustomTooltipsComponent } from "./custom-tooltips/financial-chart-custom-tooltips.component";
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
import { FinancialChartTrendlinesComponent } from "./trendlines/financial-chart-trendlines.component";
import { FinancialChartVolumeTypeComponent } from "./volume-type/financial-chart-volume-type.component";

@NgModule({
    declarations: [
        FinancialChartOverviewComponent,
        FinancialChartMultipleDataComponent,
        FinancialChartMultipleFeedsComponent,
        FinancialChartCustomTooltipsComponent,
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
        FinancialChartTimeBasedDataComponent
    ],
    exports: [
    ],
    imports: [ CommonModule, FormsModule,
        IgxFinancialChartModule,
        IgxPercentChangeYAxisDynamicModule
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

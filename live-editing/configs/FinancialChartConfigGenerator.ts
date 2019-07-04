/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";

import { FinancialChartAnnotationsComponent } from "../../src/app/charts/financial-chart/annotations/financial-chart-annotations.component";
import { FinancialChartAxisTypesComponent } from "../../src/app/charts/financial-chart/axis-types/financial-chart-axis-types.component";
import { FinancialChartCustomIndicatorsComponent } from "../../src/app/charts/financial-chart/custom-indicators/financial-chart-custom-indicators.component";
import { FinancialChartHighFrequencyComponent} from "../../src/app/charts/financial-chart/high-frequency/financial-chart-high-frequency.component";
import { FinancialChartHighVolumeComponent} from "../../src/app/charts/financial-chart/high-volume/financial-chart-high-volume.component";
import { FinancialChartIndicatorTypesComponent} from "../../src/app/charts/financial-chart/indicator-types/financial-chart-indicator-types.component";
import { FinancialChartMultipleDataComponent} from "../../src/app/charts/financial-chart/multiple-data/financial-chart-multiple-data.component";
import { FinancialChartOverviewComponent} from "../../src/app/charts/financial-chart/overview/financial-chart-overview-sample.component";
import { FinancialChartPanesComponent } from "../../src/app/charts/financial-chart/panes/financial-chart-panes.component";
import { FinancialChartPerformanceComponent } from "../../src/app/charts/financial-chart/performance/financial-chart-performance.component";
import { FinancialDataService } from "../../src/app/charts/financial-chart/services/financial-data.service";
import { GenerateHourlyPricesService } from "../../src/app/charts/financial-chart/services/generate-hourly-prices.service";
import { GenerateOhlcPricesService } from "../../src/app/charts/financial-chart/services/generate-ohlc-prices.service";
import { StockDataService } from "../../src/app/charts/financial-chart/services/stock-data.service";
import { FinancialChartTitlesComponent } from "../../src/app/charts/financial-chart/titles/financial-chart-titles.component";
import { FinancialChartTooltipTemplateComponent} from "../../src/app/charts/financial-chart/tooltip-template/financial-chart-tooltip-template.component";
import { FinancialChartTooltipTypesComponent} from "../../src/app/charts/financial-chart/tooltip-types/financial-chart-tooltip-types.component";
import { FinancialChartTrendlinesComponent} from "../../src/app/charts/financial-chart/trendlines/financial-chart-trendlines.component";
import { FinancialChartVolumeTypeComponent} from "../../src/app/charts/financial-chart/volume-type/financial-chart-volume-type.component";
import { FinancialChartMultipleFeedsComponent } from "../../src/app/charts/financial-chart/multiple-feeds/financial-chart-multiple-feeds.component";
import { FinancialChartTimeBasedDataComponent } from "../../src/app/charts/financial-chart/time-based-data/financial-chart-time-based-data.component";

import { DependenciesType } from "../services/DependenciesType";
import { Config } from "./core/Config";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class FinancialChartConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Charts, "/charts/financial-chart/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(this.getConfig(
            FinancialChartTooltipTemplateComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartTooltipTypesComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartAnnotationsComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartMultipleDataComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartOverviewComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartPanesComponent,
            [IgxFinancialChartModule],
            [StockDataService], ["/src/app/charts/financial-chart/services/stock-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartPerformanceComponent,
            [IgxFinancialChartModule],
            [GenerateOhlcPricesService], ["/src/app/charts/financial-chart/services/generate-ohlc-prices.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartTitlesComponent,
            [IgxFinancialChartModule],
            [StockDataService], ["/src/app/charts/financial-chart/services/stock-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartAxisTypesComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartCustomIndicatorsComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartHighFrequencyComponent,
            [IgxFinancialChartModule]));

        configs.push(this.getConfig(
            FinancialChartHighVolumeComponent,
            [IgxFinancialChartModule],
            [GenerateHourlyPricesService], ["/src/app/charts/financial-chart/services/generate-hourly-prices.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartIndicatorTypesComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartTrendlinesComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartVolumeTypeComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        configs.push(this.getConfig(
            FinancialChartMultipleFeedsComponent,
            [IgxFinancialChartModule]));

        configs.push(this.getConfig(
            FinancialChartTimeBasedDataComponent,
            [IgxFinancialChartModule],
            [FinancialDataService], ["/src/app/charts/financial-chart/services/financial-data.service.ts"]));

        return configs;
    }
}

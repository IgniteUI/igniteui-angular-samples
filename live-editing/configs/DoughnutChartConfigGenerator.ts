/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxRingSeriesModule } from "igniteui-angular-charts/ES5/igx-ring-series-module";
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";

import { DoughnutChartExplosionSampleComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import { DoughnutChartOverviewSampleComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import { DoughnutChartSelectionSampleComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";
import { DoughnutChartLegendComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-legend/doughnut-chart-legend.component";
import { DoughnutChartRingsComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-rings/doughnut-chart-rings.component";

import { DependenciesType } from "../services/DependenciesType";
import { Config } from "./core/Config";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class DoughnutChartConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Charts, "/charts/doughnut-chart/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // using simpler config instead of default/complex config
        configs.push(this.getConfig(
            DoughnutChartExplosionSampleComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));

        configs.push(this.getConfig(
            DoughnutChartOverviewSampleComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));

        configs.push(this.getConfig(
            DoughnutChartSelectionSampleComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));

        configs.push(this.getConfig(
            DoughnutChartLegendComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule, IgxLegendModule, IgxItemLegendModule]));

        configs.push(this.getConfig(
            DoughnutChartRingsComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));

        return configs;
    }
}

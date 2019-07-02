/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const

import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";

import { SharedData } from "../../src/app/charts/sparkline/SharedData";
import { SparklineDisplayTypesComponent } from "../../src/app/charts/sparkline/sparkline-display-types/sparkline-display-types.component";
import { SparklineMarkersComponent } from "../../src/app/charts/sparkline/sparkline-markers/sparkline-markers.component";
import { SparklineNormalRangeComponent } from "../../src/app/charts/sparkline/sparkline-normal-range/sparkline-normal-range.component";
import { SparklineTrendlinesComponent } from "../../src/app/charts/sparkline/sparkline-trendlines/sparkline-trendlines.component";
import { SparklineUnknownValuesComponent } from "../../src/app/charts/sparkline/sparkline-unknown-values/sparkline-unknown-values.component";

import { Config } from "./core/Config";
import { DependenciesType } from "../services/DependenciesType";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class SparklineConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Charts, "/charts/sparkline/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(this.getConfig(
            SparklineDisplayTypesComponent,
            [IgxFinancialChartModule],
            [SharedData], ["/src/app/charts/sparkline/SharedData.ts"]));

        configs.push(this.getConfig(
            SparklineMarkersComponent,
            [IgxFinancialChartModule],
            [SharedData], ["/src/app/charts/sparkline/SharedData.ts"]));

        configs.push(this.getConfig(
            SparklineNormalRangeComponent,
            [IgxFinancialChartModule],
            [SharedData], ["/src/app/charts/sparkline/SharedData.ts"]));

        configs.push(this.getConfig(
            SparklineTrendlinesComponent,
            [IgxFinancialChartModule],
            [SharedData], ["/src/app/charts/sparkline/SharedData.ts"]));

        configs.push(this.getConfig(
            SparklineUnknownValuesComponent,
            [IgxFinancialChartModule],
            [SharedData], ["/src/app/charts/sparkline/SharedData.ts"]));

        return configs;
    }
}

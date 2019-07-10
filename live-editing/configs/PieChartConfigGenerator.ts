/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const

import { IgxPieChartModule } from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";

import { PieChartDataSampleComponent } from "../../src/app/charts/pie-chart/pie-chart-overview/pie-chart-overview.component";
import { PieChartExplosionComponent } from "../../src/app/charts/pie-chart/pie-chart-explosion/pie-chart-explosion.component";
import { PieChartLegendComponent } from "../../src/app/charts/pie-chart/pie-chart-legend/pie-chart-legend.component";
import { PieChartOthersComponent } from "../../src/app/charts/pie-chart/pie-chart-others/pie-chart-others.component";
import { PieChartSelectionComponent } from "../../src/app/charts/pie-chart/pie-chart-selection/pie-chart-selection.component";

import { DependenciesType } from "../services/DependenciesType";
import { Config } from "./core/Config";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class PieChartConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Charts, "/charts/pie-chart/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // using simpler config instead of default/complex config
        configs.push(this.getConfig(
            PieChartDataSampleComponent,
            [IgxPieChartModule]));
        configs.push(this.getConfig(
            PieChartExplosionComponent,
            [IgxPieChartModule]));
        configs.push(this.getConfig(
            PieChartLegendComponent,
            [IgxPieChartModule, IgxLegendModule, IgxItemLegendModule]));
        configs.push(this.getConfig(
            PieChartOthersComponent,
            [IgxPieChartModule]));
        configs.push(this.getConfig(
            PieChartSelectionComponent,
            [IgxPieChartModule]));

        return configs;
    }
}

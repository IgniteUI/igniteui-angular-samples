/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxDoughnutChartComponent } from "igniteui-angular-charts/ES5/igx-doughnut-chart-component";
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";
import { IgxRingSeriesComponent } from "igniteui-angular-charts/ES5/igx-ring-series-component";
import { IgxRingSeriesModule } from "igniteui-angular-charts/ES5/igx-ring-series-module";
import { DoughnutChartExplosionSampleComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import { DoughnutChartOverviewSampleComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import { DoughnutChartSelectionSampleComponent } from "../../src/app/charts/doughnut-chart/doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
// tslint:enable:max-line-length

export class DoughnutChartConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DoughnutChartExplosionSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDoughnutChartModule, IgxDoughnutChartComponent, IgxRingSeriesModule,
                    IgxRingSeriesComponent, DoughnutChartExplosionSampleComponent],
                ngDeclarations: [ DoughnutChartExplosionSampleComponent ],
                ngImports: [IgxDoughnutChartModule, IgxRingSeriesModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: DoughnutChartOverviewSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDoughnutChartModule, DoughnutChartOverviewSampleComponent, IgxRingSeriesModule],
                ngDeclarations: [DoughnutChartOverviewSampleComponent],
                ngImports: [IgxDoughnutChartModule, IgxRingSeriesModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: DoughnutChartSelectionSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDoughnutChartModule, IgxDoughnutChartComponent, IgxRingSeriesModule,
                    IgxRingSeriesComponent, DoughnutChartSelectionSampleComponent],
                ngDeclarations: [DoughnutChartSelectionSampleComponent],
                ngImports: [IgxDoughnutChartModule, IgxRingSeriesModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        return configs;
    }
}

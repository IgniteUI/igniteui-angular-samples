/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
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
import { Type } from "@angular/core/src/type";

export class DoughnutChartConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // using simpler config instead of default/complex config
        configs.push(this.getConfig(
            DoughnutChartExplosionSampleComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));
        // configs.push(new Config({
        //     component: DoughnutChartExplosionSampleComponent,
        //     appModuleConfig: new AppModuleConfig({
        //         imports: [IgxDoughnutChartModule, IgxDoughnutChartComponent, IgxRingSeriesModule,
        //             IgxRingSeriesComponent, DoughnutChartExplosionSampleComponent],
        //         ngDeclarations: [ DoughnutChartExplosionSampleComponent ],
        //         ngImports: [IgxDoughnutChartModule, IgxRingSeriesModule]
        //     }),
        //     dependenciesType: DependenciesType.Charts,
        //     shortenComponentPathBy: "/charts/doughnut-chart/"
        // }));

        configs.push(this.getConfig(
            DoughnutChartOverviewSampleComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));
        // configs.push(new Config({
        //     component: DoughnutChartOverviewSampleComponent,
        //     appModuleConfig: new AppModuleConfig({
        //         imports: [IgxDoughnutChartModule, DoughnutChartOverviewSampleComponent, IgxRingSeriesModule],
        //         ngDeclarations: [DoughnutChartOverviewSampleComponent],
        //         ngImports: [IgxDoughnutChartModule, IgxRingSeriesModule]
        //     }),
        //     dependenciesType: DependenciesType.Charts,
        //     shortenComponentPathBy: "/charts/doughnut-chart/"
        // }));

        configs.push(this.getConfig(
            DoughnutChartSelectionSampleComponent,
            [IgxDoughnutChartModule, IgxRingSeriesModule]));
        // configs.push(new Config({
        //     component: DoughnutChartSelectionSampleComponent,
        //     appModuleConfig: new AppModuleConfig({
        //         imports: [IgxDoughnutChartModule, IgxDoughnutChartComponent, IgxRingSeriesModule,
        //             IgxRingSeriesComponent, DoughnutChartSelectionSampleComponent],
        //         ngDeclarations: [DoughnutChartSelectionSampleComponent],
        //         ngImports: [IgxDoughnutChartModule, IgxRingSeriesModule]
        //     }),
        //     dependenciesType: DependenciesType.Charts,
        //     shortenComponentPathBy: "/charts/doughnut-chart/"
        // }));

        return configs;
    }

    // TODO copy this function to other *ChartConfigGenerator classes
    public getConfig(component: Type<any>, modules: any[], dataSources?: any[], dataPaths?: string[]) {
        const imports: any[] = [];
        imports.push(component);  // add sample component for importing
        for (const m of modules) {
            imports.push(m); // add modules for importing
        }
        // add optional data sources
        if (dataSources !== undefined && dataSources.length > 0) {
            for (const ds of dataSources) {
                imports.push(ds);
            }
        }
        const fields = {
            additionalFiles: dataPaths,
            component: component,
            appModuleConfig: new AppModuleConfig({
                imports: imports,
                ngDeclarations: [component],
                ngImports: modules
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/doughnut-chart/"
        };
        return new Config(fields);
    }
}

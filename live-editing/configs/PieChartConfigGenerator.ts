/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxItemLegendModule } from "igniteui-angular-charts/ES5/igx-item-legend-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";
import { IgxPieChartModule } from "igniteui-angular-charts/ES5/igx-pie-chart-module";
import { PieChartDataSampleComponent } from "../../src/app/charts/pie-chart/pie-chart-data-sample/pie-chart-data-sample.component";
import { PieChartExplosionComponent } from "../../src/app/charts/pie-chart/pie-chart-explosion/pie-chart-explosion.component";
import { PieChartLegendComponent } from "../../src/app/charts/pie-chart/pie-chart-legend/pie-chart-legend.component";
import { PieChartOthersComponent } from "../../src/app/charts/pie-chart/pie-chart-others/pie-chart-others.component";
import { PieChartSelectionComponent } from "../../src/app/charts/pie-chart/pie-chart-selection/pie-chart-selection.component";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
// tslint:enable:max-line-length

export class PieChartConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: PieChartDataSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxPieChartModule, PieChartDataSampleComponent],
                ngDeclarations: [ PieChartDataSampleComponent ],
                ngImports: [IgxPieChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: PieChartExplosionComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxPieChartModule, IgxPieChartComponent, PieChartExplosionComponent],
                ngDeclarations: [PieChartExplosionComponent],
                ngImports: [IgxPieChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: PieChartLegendComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxPieChartModule, IgxLegendModule, IgxItemLegendModule, PieChartLegendComponent],
                ngDeclarations: [PieChartLegendComponent],
                ngImports: [IgxPieChartModule, IgxLegendModule, IgxItemLegendModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: PieChartOthersComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxPieChartModule, PieChartOthersComponent],
                ngDeclarations: [PieChartOthersComponent],
                ngImports: [IgxPieChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: PieChartSelectionComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxPieChartModule, PieChartSelectionComponent],
                ngDeclarations: [PieChartSelectionComponent],
                ngImports: [IgxPieChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        return configs;
    }
}

/* tslint:disable:object-literal-sort-keys */
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import {
    CategoryChartAxisOptionsComponent
} from "../../src/app/category-chart/axis-options/category-chart-axis-options-sample.component";
import {
    CategoryChartConfigOptionsComponent
} from "../../src/app/category-chart/config-options/category-chart-config-options-sample.component";
import {
     CategoryChartCustomTooltipsComponent
} from "../../src/app/category-chart/custom-tooltips/category-chart-custom-tooltips-sample.component";
import {
    CategoryChartHighFrequencyComponent
} from "../../src/app/category-chart/high-frequency/category-chart-high-frequency-sample.component";
import {
    CategoryChartHighVolumeComponent
} from "../../src/app/category-chart/high-volume/category-chart-high-volume-sample.component";
import {
    CategoryChartOverviewComponent
} from "../../src/app/category-chart/overview/category-chart-overview-sample.component";
import { DependenciesType } from "../DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { IgxSliderModule } from "igniteui-angular/main";

export class CategoryChartConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: CategoryChartOverviewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartOverviewComponent],
                ngDeclarations: [CategoryChartOverviewComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts
        }));

        configs.push(new Config({
            component: CategoryChartHighVolumeComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighVolumeComponent, IgxSliderModule],
                ngDeclarations: [CategoryChartHighVolumeComponent],
                ngImports: [IgxCategoryChartModule, IgxSliderModule]
            }),
            dependenciesType: DependenciesType.Charts,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: CategoryChartHighFrequencyComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighFrequencyComponent, IgxSliderModule],
                ngDeclarations: [CategoryChartHighFrequencyComponent],
                ngImports: [IgxCategoryChartModule, IgxSliderModule]
            }),
            dependenciesType: DependenciesType.Charts,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: CategoryChartCustomTooltipsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartCustomTooltipsComponent],
                ngDeclarations: [CategoryChartCustomTooltipsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts
        }));

        configs.push(new Config({
            component: CategoryChartConfigOptionsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartConfigOptionsComponent],
                ngDeclarations: [CategoryChartConfigOptionsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts
        }));

        configs.push(new Config({
            component: CategoryChartAxisOptionsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartAxisOptionsComponent],
                ngDeclarations: [CategoryChartAxisOptionsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts
        }));

        return configs;
    }
}

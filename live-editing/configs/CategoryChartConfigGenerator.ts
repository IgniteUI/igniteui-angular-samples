/* tslint:disable:object-literal-sort-keys */
import { IgxSliderModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import {
    CategoryChartAnnotationsComponent
} from "../../src/app/charts/category-chart/annotations/category-chart-annotations.component";
import {
    CategoryChartAxisOptionsComponent
} from "../../src/app/charts/category-chart/axis-options/category-chart-axis-options-sample.component";
import {
    CategoryChartConfigOptionsComponent
} from "../../src/app/charts/category-chart/config-options/category-chart-config-options-sample.component";
import {
    CategoryChartHighFrequencyComponent
} from "../../src/app/charts/category-chart/high-frequency/category-chart-high-frequency-sample.component";
import {
    CategoryChartHighVolumeComponent
} from "../../src/app/charts/category-chart/high-volume/category-chart-high-volume-sample.component";
import {
    CategoryChartHighlightingComponent
} from "../../src/app/charts/category-chart/highlighting/category-chart-highlighting.component";
import {
    CategoryChartOverlapColumnsComponent
} from "../../src/app/charts/category-chart/overlap-columns/category-chart-overlap-columns.component";
import {
    CategoryChartOverviewComponent
} from "../../src/app/charts/category-chart/overview/category-chart-overview-sample.component";
import {
    CategoryChartTooltipTemplateComponent
} from "../../src/app/charts/category-chart/tooltip-template/category-chart-tooltip-template.component";
import {
    CategoryChartTooltipTypesComponent
} from "../../src/app/charts/category-chart/tooltip-types/category-chart-tooltip-types.component";
import {
    CategoryChartTrendlinesComponent
} from "../../src/app/charts/category-chart/trendline/category-chart-trendlines.component";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

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
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartHighVolumeComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighVolumeComponent, IgxSliderModule],
                ngDeclarations: [CategoryChartHighVolumeComponent],
                ngImports: [IgxCategoryChartModule, IgxSliderModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartHighFrequencyComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighFrequencyComponent, IgxSliderModule],
                ngDeclarations: [CategoryChartHighFrequencyComponent],
                ngImports: [IgxCategoryChartModule, IgxSliderModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartTooltipTemplateComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartTooltipTemplateComponent],
                ngDeclarations: [CategoryChartTooltipTemplateComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartConfigOptionsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartConfigOptionsComponent],
                ngDeclarations: [CategoryChartConfigOptionsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartAxisOptionsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartAxisOptionsComponent],
                ngDeclarations: [CategoryChartAxisOptionsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartAnnotationsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartAnnotationsComponent],
                ngDeclarations: [CategoryChartAnnotationsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartHighlightingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighlightingComponent],
                ngDeclarations: [CategoryChartHighlightingComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartTooltipTypesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartTooltipTypesComponent],
                ngDeclarations: [CategoryChartTooltipTypesComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));

        configs.push(new Config({
            component: CategoryChartOverlapColumnsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartOverlapColumnsComponent],
                ngDeclarations: [CategoryChartOverlapColumnsComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Charts,
            shortenComponentPathBy: "/charts/"
        }));
        return configs;
    }
}

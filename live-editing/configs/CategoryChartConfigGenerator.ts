import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { CategoryChartOverviewComponent } from "../../src/app/category-chart/overview/category-chart-overview-sample.component";
import { CategoryChartHighVolumeComponent } from "../../src/app/category-chart/high-volume/category-chart-high-volume-sample.component";
import { CategoryChartHighFrequencyComponent } from "../../src/app/category-chart/high-frequency/category-chart-high-frequency-sample.component";

export class CategoryChartConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();
        let deps = new Array<string>();

        deps.push("@angular/forms");
        deps.push("@angular/animations");
        deps.push("igniteui-angular");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");
        deps.push("jszip");

        configs.push(new Config({
            component: CategoryChartOverviewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartOverviewComponent],
                ngDeclarations: [CategoryChartOverviewComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: CategoryChartHighVolumeComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighVolumeComponent],
                ngDeclarations: [CategoryChartHighVolumeComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: CategoryChartHighFrequencyComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartHighFrequencyComponent],
                ngDeclarations: [CategoryChartHighFrequencyComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            packageDependencies: deps
        }));

        return configs;
    }
}

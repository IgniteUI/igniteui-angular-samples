import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { CategoryChartOverviewComponent } from "../../src/app/category-chart/overview/category-chart-overview-sample.component";

export class CategoryChartConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();
        let deps = new Array<string>();

        debugger;
        //deps.push("@angular/forms");
        deps.push("@angular/animations");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: CategoryChartOverviewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCategoryChartModule, CategoryChartOverviewComponent],
                ngDeclarations: [CategoryChartOverviewComponent],
                ngImports: [IgxCategoryChartModule]
            }),
            packageDependencies: deps
        }));

        return configs;
    }
}

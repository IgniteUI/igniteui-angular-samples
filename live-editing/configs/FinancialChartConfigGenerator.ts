import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { FinancialChartCustomTooltipsComponent } from "../../src/app/financial-chart/custom-tooltips/financial-chart-custom-tooltips.component";
import { FinancialChartMultipleDataComponent } from "../../src/app/financial-chart/multiple-data/financial-chart-multiple-data.component";
import { FinancialChartOverviewComponent } from "../../src/app/financial-chart/overview/financial-chart-overview-sample.component";
import { FinancialChartPanesComponent } from "../../src/app/financial-chart/panes/financial-chart-panes.component";
import { FinancialChartPerformanceComponent } from "../../src/app/financial-chart/performance/financial-chart-performance.component";
import { FinancialChartTitlesComponent } from "../../src/app/financial-chart/titles/financial-chart-titles.component";

import { FinancialDataService } from "../../src/app/financial-chart/services/financial-data.service";
import { StockDataService } from "../../src/app/financial-chart/services/stock-data.service";


export class FinancialChartConfigGenerator implements IConfigGenerator {
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
            component: FinancialChartCustomTooltipsComponent,
            additionalFiles: ["/src/app/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartCustomTooltipsComponent, FinancialDataService],
                ngDeclarations: [FinancialChartCustomTooltipsComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("@angular/animations");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: FinancialChartMultipleDataComponent,
            additionalFiles: ["/src/app/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartMultipleDataComponent, FinancialDataService],
                ngDeclarations: [FinancialChartMultipleDataComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("@angular/animations");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: FinancialChartOverviewComponent,
            additionalFiles: ["/src/app/financial-chart/services/financial-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartOverviewComponent, FinancialDataService],
                ngDeclarations: [FinancialChartOverviewComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("@angular/animations");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: FinancialChartPanesComponent,
            additionalFiles: ["/src/app/financial-chart/services/stock-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartPanesComponent, StockDataService],
                ngDeclarations: [FinancialChartPanesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("@angular/animations");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: FinancialChartPerformanceComponent,
            additionalFiles: ["/src/app/financial-chart/services/stock-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartPerformanceComponent, StockDataService],
                ngDeclarations: [FinancialChartPerformanceComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            packageDependencies: deps
        }));

        deps = new Array<string>();
        deps.push("@angular/animations");
        deps.push("igniteui-angular-charts");
        deps.push("tslib");

        configs.push(new Config({
            component: FinancialChartTitlesComponent,
            additionalFiles: ["/src/app/financial-chart/services/stock-data.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxFinancialChartModule, FinancialChartTitlesComponent, StockDataService],
                ngDeclarations: [FinancialChartTitlesComponent],
                ngImports: [IgxFinancialChartModule]
            }),
            packageDependencies: deps
        }));

        return configs;
    }
}

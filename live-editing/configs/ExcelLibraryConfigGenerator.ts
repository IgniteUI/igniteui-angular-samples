/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule,
    IgxGridModule
} from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import {
    ExcelLibUsingCellsComponent
} from "../../src/app/excel-library/using-cells/using-cells.component";
import {
    ExcelLibUsingWorkbooksComponent
} from "../../src/app/excel-library/using-workbooks/using-workbooks.component";
import {
    ExcelLibUsingWorksheetsComponent
} from "../../src/app/excel-library/using-worksheets/using-worksheets.component";
import {
    ExcelLibUsingTablesComponent
} from "../../src/app/excel-library/using-tables/using-tables.component";
import {
    ExcelLibWorkingWithChartsComponent
} from "../../src/app/excel-library/working-with-charts/working-with-charts.component";
import {
    ExcelLibWorkingWithGridsComponent
} from "../../src/app/excel-library/working-with-grids/working-with-grids.component";

import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ExcelLibraryConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ExcelLibUsingCellsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelLibUsingCellsComponent],
                ngDeclarations: [ExcelLibUsingCellsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: ExcelLibUsingWorkbooksComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelLibUsingWorkbooksComponent],
                ngDeclarations: [ExcelLibUsingWorkbooksComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: ExcelLibUsingWorksheetsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelLibUsingWorksheetsComponent],
                ngDeclarations: [ExcelLibUsingWorksheetsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: ExcelLibUsingTablesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelLibUsingTablesComponent],
                ngDeclarations: [ExcelLibUsingTablesComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: ExcelLibWorkingWithChartsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelLibWorkingWithChartsComponent],
                ngDeclarations: [ExcelLibWorkingWithChartsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel,
            additionalDependencies: ["igniteui-angular"]
        }));

        configs.push(new Config({
            component: ExcelLibWorkingWithGridsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelLibWorkingWithGridsComponent],
                ngDeclarations: [ExcelLibWorkingWithGridsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel,
            additionalDependencies: ["igniteui-angular"]
        }));

        return configs;
    }
}

/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule,
    IgxGridModule
} from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import {
    ExcelLibraryOperationsOnWorkbooksComponent
} from "../../src/app/excel-library/operations-on/workbooks.component";
import {
    ExcelLibraryOperationsOnWorksheetsComponent
} from "../../src/app/excel-library/operations-on/worksheets.component";
import {
    ExcelLibraryWorkingWithCellsComponent
} from "../../src/app/excel-library/working-with/cells.component";
import {
    ExcelLibraryWorkingWithChartsComponent
} from "../../src/app/excel-library/working-with/charts.component";
import {
    ExcelLibraryWorkingWithGridsComponent
} from "../../src/app/excel-library/working-with/grids.component";
import {
    ExcelLibraryWorkingWithObjectsComponent
} from "../../src/app/excel-library/working-with/objects.component";
import {
    ExcelLibraryWorkingWithSparklinesComponent
} from "../../src/app/excel-library/working-with/sparklines.component";
import {
    ExcelLibraryWorkingWithTablesComponent
} from "../../src/app/excel-library/working-with/tables.component";
import { ExcelUtility } from "../../src/app/utilities/excel-utility";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ExcelLibraryConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ExcelLibraryWorkingWithCellsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryWorkingWithCellsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithCellsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryOperationsOnWorkbooksComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryOperationsOnWorkbooksComponent],
                ngDeclarations: [ExcelLibraryOperationsOnWorkbooksComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryOperationsOnWorksheetsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryOperationsOnWorksheetsComponent],
                ngDeclarations: [ExcelLibraryOperationsOnWorksheetsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithTablesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryWorkingWithTablesComponent],
                ngDeclarations: [ExcelLibraryWorkingWithTablesComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithChartsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryWorkingWithChartsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithChartsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithGridsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryWorkingWithGridsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithGridsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithObjectsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryWorkingWithObjectsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithObjectsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithSparklinesComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, ExcelUtility, ExcelLibraryWorkingWithSparklinesComponent],
                ngDeclarations: [ExcelLibraryWorkingWithSparklinesComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        return configs;
    }
}

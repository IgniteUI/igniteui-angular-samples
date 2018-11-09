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
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";

export class ExcelLibraryConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ExcelLibraryWorkingWithCellsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryWorkingWithCellsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithCellsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryOperationsOnWorkbooksComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryOperationsOnWorkbooksComponent],
                ngDeclarations: [ExcelLibraryOperationsOnWorkbooksComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryOperationsOnWorksheetsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryOperationsOnWorksheetsComponent],
                ngDeclarations: [ExcelLibraryOperationsOnWorksheetsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithTablesComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryWorkingWithTablesComponent],
                ngDeclarations: [ExcelLibraryWorkingWithTablesComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithChartsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule,
                    ExcelUtility, ExcelLibraryWorkingWithChartsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithChartsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithGridsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryWorkingWithGridsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithGridsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithObjectsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryWorkingWithObjectsComponent],
                ngDeclarations: [ExcelLibraryWorkingWithObjectsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: ExcelLibraryWorkingWithSparklinesComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, ExcelLibraryWorkingWithSparklinesComponent],
                ngDeclarations: [ExcelLibraryWorkingWithSparklinesComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        return configs;
    }
}

/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule,
    IgxGridModule
} from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-module";
import {
    SpreadsheetActivationComponent
} from "../../src/app/spreadsheet/spreadsheet-activation/spreadsheet-activation.component";
import {
    SpreadsheetClipboardComponent
} from "../../src/app/spreadsheet/spreadsheet-clipboard/spreadsheet-clipboard.component";
import {
    SpreadsheetCommandsComponent
} from "../../src/app/spreadsheet/spreadsheet-commands/spreadsheet-commands.component";
import {
    SpreadsheetCondFormatComponent
} from "../../src/app/spreadsheet/spreadsheet-cond-formatting/spreadsheet-cond-formatting.component";
import {
    SpreadsheetConfiguringComponent
} from "../../src/app/spreadsheet/spreadsheet-configuring/spreadsheet-configuring.component";
import {
    SpreadsheetDataValidComponent
} from "../../src/app/spreadsheet/spreadsheet-data-validation/spreadsheet-data-validation.component";
// import { SpreadsheetFilterDialogComponent
//  } from "../../src/app/spreadsheet/spreadsheet-filter-dialog/spreadsheet-filter-dialog.component";
// import { SpreadsheetFormatDialogComponent
//  } from "../../src/app/spreadsheet/spreadsheet-format-dialog/spreadsheet-format-dialog.component";
import {
    SpreadsheetHyperlinksComponent
} from "../../src/app/spreadsheet/spreadsheet-hyperlinks/spreadsheet-hyperlinks.component";
import {
    SpreadsheetOverviewComponent
} from "../../src/app/spreadsheet/spreadsheet-overview/spreadsheet-overview.component";
// import { SpreadsheetSortDialogComponent
//  } from "../../src/app/spreadsheet/spreadsheet-sort-dialog/spreadsheet-sort-dialog.component";
import {
    SpreadsheetWorksheetsComponent
} from "../../src/app/spreadsheet/spreadsheet-worksheets/spreadsheet-worksheets.component";

import { ExcelUtility } from "../../src/app/utilities/excel-utility";
import { DependenciesType } from "../services/DependenciesType";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ExcelLibraryConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: SpreadsheetActivationComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelModule, ExcelUtility, SpreadsheetActivationComponent],
                ngDeclarations: [SpreadsheetActivationComponent],
                ngImports: [IgxExcelModule, IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: SpreadsheetClipboardComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetClipboardComponent],
                ngDeclarations: [SpreadsheetClipboardComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: SpreadsheetCommandsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetCommandsComponent],
                ngDeclarations: [SpreadsheetCommandsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: SpreadsheetCondFormatComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelModule, ExcelUtility, SpreadsheetCondFormatComponent],
                ngDeclarations: [SpreadsheetCondFormatComponent],
                ngImports: [IgxExcelModule, IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: SpreadsheetConfiguringComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelModule, ExcelUtility, SpreadsheetConfiguringComponent],
                ngDeclarations: [SpreadsheetConfiguringComponent],
                ngImports: [IgxExcelModule, IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: SpreadsheetDataValidComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetDataValidComponent],
                ngDeclarations: [SpreadsheetDataValidComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        /*configs.push(new Config({
            component: SpreadsheetFilterDialogComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetFilterDialogComponent],
                ngDeclarations: [SpreadsheetFilterDialogComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));*/

        /*configs.push(new Config({
            component: SpreadsheetFormatDialogComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetFormatDialogComponent],
                ngDeclarations: [SpreadsheetFormatDialogComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));*/

        configs.push(new Config({
            component: SpreadsheetHyperlinksComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxExcelModule, ExcelUtility, SpreadsheetHyperlinksComponent],
                ngDeclarations: [SpreadsheetHyperlinksComponent],
                ngImports: [IgxExcelModule, IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        configs.push(new Config({
            component: SpreadsheetOverviewComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetOverviewComponent],
                ngDeclarations: [SpreadsheetOverviewComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        /*configs.push(new Config({
            component: SpreadsheetSortDialogComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetSortDialogComponent],
                ngDeclarations: [SpreadsheetSortDialogComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));*/

        configs.push(new Config({
            component: SpreadsheetWorksheetsComponent,
            additionalFiles: ["/src/app/utilities/excel-utility.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    ExcelUtility, SpreadsheetWorksheetsComponent],
                ngDeclarations: [SpreadsheetWorksheetsComponent],
                ngImports: [IgxButtonModule, IgxCategoryChartModule, IgxGridModule, IgxExcelModule,
                    IgxSpreadsheetModule]
            }),
            dependenciesType: DependenciesType.Excel
        }));

        return configs;
    }
}

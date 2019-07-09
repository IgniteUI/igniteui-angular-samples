/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const

import { IgxButtonModule, IgxGridModule} from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
// import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
// import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
// import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
import { IgxSpreadsheetChartAdapterModule} from "igniteui-angular-spreadsheet-chart-adapter/ES5/igx-spreadsheet-chart-adapter-module";
import { IgxSpreadsheetModule } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-module";
import { SpreadsheetActivationComponent } from "../../src/app/spreadsheet/spreadsheet-activation/spreadsheet-activation.component";
import { SpreadsheetAdapterComponent } from "../../src/app/spreadsheet/spreadsheet-adapter/spreadsheet-adapter.component";
import { SpreadsheetClipboardComponent } from "../../src/app/spreadsheet/spreadsheet-clipboard/spreadsheet-clipboard.component";
import { SpreadsheetCommandsComponent } from "../../src/app/spreadsheet/spreadsheet-commands/spreadsheet-commands.component";
import { SpreadsheetCondFormatComponent } from "../../src/app/spreadsheet/spreadsheet-conditional-formatting/spreadsheet-cond-formatting.component";
import { SpreadsheetConfiguringComponent } from "../../src/app/spreadsheet/spreadsheet-configuring/spreadsheet-configuring.component";
import { SpreadsheetDataValidComponent } from "../../src/app/spreadsheet/spreadsheet-data-validation/spreadsheet-data-validation.component";
// import { SpreadsheetFilterDialogComponent
//  } from "../../src/app/spreadsheet/spreadsheet-filter-dialog/spreadsheet-filter-dialog.component";
// import { SpreadsheetFormatDialogComponent
//  } from "../../src/app/spreadsheet/spreadsheet-format-dialog/spreadsheet-format-dialog.component";
import { SpreadsheetHyperlinksComponent } from "../../src/app/spreadsheet/spreadsheet-hyperlinks/spreadsheet-hyperlinks.component";
import { SpreadsheetOverviewComponent } from "../../src/app/spreadsheet/spreadsheet-overview/spreadsheet-overview.component";
// import { SpreadsheetSortDialogComponent
//  } from "../../src/app/spreadsheet/spreadsheet-sort-dialog/spreadsheet-sort-dialog.component";

import { ExcelUtility } from "../../src/app/utilities/excel-utility";

import { Config } from "./core/Config";
import { DependenciesType } from "../services/DependenciesType";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class SpreadsheetConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Spreadsheet, "/spreadsheet/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TODO fix error:
        // ReferenceError: window is not defined
        // at C:\REPOS\IgniteUI\igniteui-angular-samples\node_modules\igniteui-angular-spreadsheet\ES5\VisualElementDomBuilder.js:354:34
        // at Object.<anonymous> (C:\REPOS\IgniteUI\igniteui-angular-samples\node_modules\igniteui-angular-spreadsheet\ES5\VisualElementDomBuilder.js:359:2)
        // at Module._compile (internal/modules/cjs/loader.js:701:30)
        // at Module.m._compile (C:\REPOS\IgniteUI\igniteui-angular-samples\node_modules\ts-node\src\index.ts:439:23)
        // at Module._extensions..js (internal/modules/cjs/loader.js:712:10)
        // at Object.require.extensions.(anonymous function) [as .js] (C:\REPOS\IgniteUI\igniteui-angular-samples\node_modules\ts-node\src\index.ts:442:12)
        // at Module.load (internal/modules/cjs/loader.js:600:32)
        // at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
        // at Function.Module._load (internal/modules/cjs/loader.js:531:3)
        // at Module.require (internal/modules/cjs/loader.js:637:17)

        // configs.push(this.getConfig(
        //     SpreadsheetActivationComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

        // configs.push(this.getConfig(
        //     SpreadsheetAdapterComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule, IgxSpreadsheetChartAdapterModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));


        // configs.push(this.getConfig(
        //     SpreadsheetClipboardComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule, IgxButtonModule, IgxCategoryChartModule, IgxGridModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));


        // configs.push(this.getConfig(
        //     SpreadsheetCommandsComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule, IgxButtonModule, IgxCategoryChartModule, IgxGridModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

        // configs.push(this.getConfig(
        //     SpreadsheetCondFormatComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

        // configs.push(this.getConfig(
        //     SpreadsheetConfiguringComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

        // configs.push(this.getConfig(
        //     SpreadsheetDataValidComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule, IgxButtonModule, IgxCategoryChartModule, IgxGridModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

        // configs.push(this.getConfig(
        //     SpreadsheetHyperlinksComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

        // configs.push(this.getConfig(
        //     SpreadsheetOverviewComponent,
        //     [IgxSpreadsheetModule, IgxExcelModule, IgxButtonModule, IgxCategoryChartModule, IgxGridModule],
        //     [ExcelUtility], ["/src/app/utilities/excel-utility.ts"]));

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

        return configs;
    }
}

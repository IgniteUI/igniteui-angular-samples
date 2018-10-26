import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxRippleModule } from "igniteui-angular";

import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";

// TODO add samples based on WPF docs https://staging.infragistics.local/help/wpf/excelengine

// workbooks samples:
import {
    ExcelLibraryWorkbookEditingComponent
} from "./workbook-editing/excel-workbook-editing.component";
import {
    ExcelLibraryWorkbookLoadingComponent
} from "./workbook-loading/excel-workbook-loading.component";
import {
    ExcelLibraryWorkbookSavingComponent
} from "./workbook-saving/excel-workbook-saving.component";
// working-with samples:
import {
    ExcelLibraryWorkingWithCategoryChartComponent
} from "./working-with-categorychart/excel-working-with-categorychart.component";
import {
    ExcelLibraryWorkingWithCellsComponent
} from "./working-with-cells/excel-working-with-cells.component";
import {
    ExcelLibraryWorkingWithDataChartComponent
} from "./working-with-datachart/excel-working-with-datachart.component";
import {
    ExcelLibraryWorkingWithGridComponent
} from "./working-with-grid/excel-working-with-grid.component";
import {
    ExcelLibraryWorkingWithSparklineComponent
} from "./working-with-sparkline/excel-working-with-sparkline.component";
import {
    ExcelLibraryWorkingWithTablesComponent
} from "./working-with-tables/excel-working-with-tables.component";
// worksheet samples:
import {
    ExcelLibraryWorksheetOperationsComponent
} from "./worksheet-operations/excel-worksheet-operations.component";

@NgModule({
    declarations: [
        ExcelLibraryWorkbookEditingComponent,
        ExcelLibraryWorkbookLoadingComponent,
        ExcelLibraryWorkbookSavingComponent,
        ExcelLibraryWorkingWithCategoryChartComponent,
        ExcelLibraryWorkingWithGridComponent,
        ExcelLibraryWorkingWithDataChartComponent,
        ExcelLibraryWorkingWithSparklineComponent,
        ExcelLibraryWorkingWithTablesComponent,
        ExcelLibraryWorksheetOperationsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxCategoryChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartInteractivityModule,
        IgxExcelModule,
        IgxGridModule.forRoot(),
        IgxRippleModule,
        IgxIconModule,
        IgxInputGroupModule
     ]
})
export class ExcelLibrarySamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ExcelLibrarySamplesModule
        };
    }
}

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

// Excel samples:
import {
    ExcelLibraryUsingCellsComponent
} from "./using-cells/excel-using-cells.component";
import {
    ExcelLibraryUsingTablesComponent
} from "./using-tables/excel-using-tables.component";
import {
    ExcelLibraryUsingWorkbooksComponent
} from "./using-workbooks/excel-using-workbooks.component";
import {
    ExcelLibraryUsingWorksheetsComponent
} from "./using-worksheets/excel-using-worksheets.component";
// Integration samples:
import {
    ExcelLibraryWorkingWithCategoryChartComponent
} from "./working-with-categorychart/excel-working-with-categorychart.component";
import {
    ExcelLibraryWorkingWithDataChartComponent
} from "./working-with-datachart/excel-working-with-datachart.component";
import {
    ExcelLibraryWorkingWithGridComponent
} from "./working-with-grid/excel-working-with-grid.component";
import {
    ExcelLibraryWorkingWithSparklineComponent
} from "./working-with-sparkline/excel-working-with-sparkline.component";

@NgModule({
    declarations: [
        ExcelLibraryUsingWorkbooksComponent,
        ExcelLibraryWorkingWithCategoryChartComponent,
        ExcelLibraryWorkingWithGridComponent,
        ExcelLibraryWorkingWithDataChartComponent,
        ExcelLibraryWorkingWithSparklineComponent,
        ExcelLibraryUsingTablesComponent,
        ExcelLibraryUsingCellsComponent,
        ExcelLibraryUsingWorksheetsComponent
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

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxGridComponent, IgxGridModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";
import { ExcelLibraryRoutingModule } from "./excel-library-routing.module";
import { ExcelLibraryOperationsOnWorkbooksComponent } from "./operations-on/workbooks.component";
import { ExcelLibraryOperationsOnWorksheetsComponent } from "./operations-on/worksheets.component";
import { ExcelLibraryWorkingWithCellsComponent } from "./working-with/cells.component";
import { ExcelLibraryWorkingWithChartsComponent } from "./working-with/charts.component";
import { ExcelLibraryWorkingWithGridsComponent } from "./working-with/grids.component";
import { ExcelLibraryWorkingWithObjectsComponent } from "./working-with/objects.component";
import { ExcelLibraryWorkingWithSparklinesComponent } from "./working-with/sparklines.component";
import { ExcelLibraryWorkingWithTablesComponent } from "./working-with/tables.component";

@NgModule({
    declarations: [
        ExcelLibraryOperationsOnWorkbooksComponent,
        ExcelLibraryOperationsOnWorksheetsComponent,
        ExcelLibraryWorkingWithCellsComponent,
        ExcelLibraryWorkingWithChartsComponent,
        ExcelLibraryWorkingWithGridsComponent,
        ExcelLibraryWorkingWithObjectsComponent,
        ExcelLibraryWorkingWithSparklinesComponent,
        ExcelLibraryWorkingWithTablesComponent
    ],
    entryComponents: [ IgxGridComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ExcelLibraryRoutingModule,
        IgxButtonModule,
        IgxCategoryChartModule,
        IgxGridModule,
        IgxExcelModule,
        IgxDataChartCategoryModule,
        IgxDataChartCoreModule,
        IgxDataChartInteractivityModule
    ]
})
export class ExcelLibraryModule {}

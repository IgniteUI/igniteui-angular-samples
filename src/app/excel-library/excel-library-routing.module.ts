import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { excelLibraryRoutesData } from "./excel-library-routes-data";
import { ExcelLibraryOperationsOnWorkbooksComponent } from "./operations-on/workbooks.component";
import { ExcelLibraryOperationsOnWorksheetsComponent } from "./operations-on/worksheets.component";
import { ExcelLibraryWorkingWithCellsComponent } from "./working-with/cells.component";
import { ExcelLibraryWorkingWithChartsComponent } from "./working-with/charts.component";
import { ExcelLibraryWorkingWithGridsComponent } from "./working-with/grids.component";
import { ExcelLibraryWorkingWithObjectsComponent } from "./working-with/objects.component";
import { ExcelLibraryWorkingWithSparklinesComponent } from "./working-with/sparklines.component";
import { ExcelLibraryWorkingWithTablesComponent } from "./working-with/tables.component";

export const excelLibraryRoutes: Routes = [
    {
        component: ExcelLibraryOperationsOnWorkbooksComponent,
        data: excelLibraryRoutesData["operations-on-workbooks"],
        path: "operations-on-workbooks"
    },
    {
        component: ExcelLibraryOperationsOnWorksheetsComponent,
        data: excelLibraryRoutesData["operations-on-worksheets"],
        path: "operations-on-worksheets"
    },
    {
        component: ExcelLibraryWorkingWithCellsComponent,
        data: excelLibraryRoutesData["working-with-cells"],
        path: "working-with-cells"
    },
    {
        component: ExcelLibraryWorkingWithChartsComponent,
        data: excelLibraryRoutesData["working-with-charts"],
        path: "working-with-charts"
    },
    {
        component: ExcelLibraryWorkingWithGridsComponent,
        data: excelLibraryRoutesData["working-with-grids"],
        path: "working-with-grids"
    },
    {
        component: ExcelLibraryWorkingWithObjectsComponent,
        data: excelLibraryRoutesData["working-with-objects"],
        path: "working-with-objects"
    },
    {
        component: ExcelLibraryWorkingWithSparklinesComponent,
        data: excelLibraryRoutesData["working-with-sparklines"],
        path: "working-with-sparklines"
    },
    {
        component: ExcelLibraryWorkingWithTablesComponent,
        data: excelLibraryRoutesData["excel-library-working-with-tables"],
        path: "excel-library-working-with-tables"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(excelLibraryRoutes)
    ]
})
export class ExcelLibraryRoutingModule { }

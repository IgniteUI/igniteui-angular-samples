import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        data: { displayName: "Workbooks Operations", parentName: "Excel Library" },
        path: "operations-on-workbooks"
    },
    {
        component: ExcelLibraryOperationsOnWorksheetsComponent,
        data: { displayName: "Worksheets Operations", parentName: "Excel Library" },
        path: "operations-on-worksheets"
    },
    {
        component: ExcelLibraryWorkingWithCellsComponent,
        data: { displayName: "Working With Cells", parentName: "Excel Library" },
        path: "working-with-cells"
    },
    {
        component: ExcelLibraryWorkingWithChartsComponent,
        data: { displayName: "Working With Charts", parentName: "Excel Library" },
        path: "working-with-charts"
    },
    {
        component: ExcelLibraryWorkingWithGridsComponent,
        data: { displayName: "Working With Grids", parentName: "Excel Library" },
        path: "working-with-grids"
    },
    {
        component: ExcelLibraryWorkingWithObjectsComponent,
        data: { displayName: "Working With Objects", parentName: "Excel Library" },
        path: "working-with-objects"
    },
    {
        component: ExcelLibraryWorkingWithSparklinesComponent,
        data: { displayName: "Working With Sparklines", parentName: "Excel Library" },
        path: "working-with-sparklines"
    },
    {
        component: ExcelLibraryWorkingWithTablesComponent,
        data: { displayName: "Working With Tables", parentName: "Excel Library" },
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

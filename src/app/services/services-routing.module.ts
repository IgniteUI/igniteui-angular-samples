// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CsvExportSample1Component } from "./export-csv/csv-export-sample-1/csv-export-sample-1.component";
import { CsvExportComponent } from "./export-csv/csv-export.component";
import { ExcelExportSample1Component } from "./export-excel/excel-export-sample-1/excel-export-sample-1.component";
import { ExcelExportComponent } from "./export-excel/excel-export.component";
import { LocalizationSample1Component } from "./localization-samples/localization-sample-1/localization-sample-1.component";
import { LocalizationSample2Component } from "./localization-samples/localization-sample-2/localization-sample-2.component";
import { LocalizationSample3Component } from "./localization-samples/localization-sample-3/localization-sample-3.component";
// tslint:enable:max-line-length

export const servicesRoutes: Routes = [
    {
        component: CsvExportComponent,
        data: { displayName: "CSV Export Raw Data", parentName: "CSV Export" },
        path: "export-csv"
    },
    {
        component: CsvExportSample1Component,
        data: { displayName: "CSV Export Grid", parentName: "CSV Export" },
        path: "export-csv-sample-1"
    },
    {
        component: ExcelExportComponent,
        data: { displayName: "Excel Export Raw Data", parentName: "Excel Export" },
        path: "export-excel"
    },
    {
        component: ExcelExportSample1Component,
        data: { displayName: "Excel Export Grid", parentName: "Excel Export" },
        path: "export-excel-sample-1"
    },
    {
        component: LocalizationSample1Component,
        data: { displayName: "Localize one component", parentName: "Localization" },
        path: "localization-sample-1"
    },
    {
        component: LocalizationSample2Component,
        data: { displayName: "Localize All", parentName: "Localization" },
        path: "localization-sample-2"
    },
    {
        component: LocalizationSample3Component,
        data: { displayName: "Localize partially", parentName: "Localization" },
        path: "localization-sample-3"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(servicesRoutes)
    ]
})
export class ServicesRoutingModule { }

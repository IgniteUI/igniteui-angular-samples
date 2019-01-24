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
import { servicesRoutesData } from "./services-routes-data";
// tslint:enable:max-line-length

export const servicesRoutes: Routes = [
    {
        component: CsvExportComponent,
        data: servicesRoutesData["export-csv"],
        path: "export-csv"
    },
    {
        component: CsvExportSample1Component,
        data: servicesRoutesData["export-csv-sample-1"],
        path: "export-csv-sample-1"
    },
    {
        component: ExcelExportComponent,
        data: servicesRoutesData["export-excel"],
        path: "export-excel"
    },
    {
        component: ExcelExportSample1Component,
        data: servicesRoutesData["export-excel-sample-1"],
        path: "export-excel-sample-1"
    },
    {
        component: LocalizationSample1Component,
        data: servicesRoutesData["localization-sample-1"],
        path: "localization-sample-1"
    },
    {
        component: LocalizationSample2Component,
        data: servicesRoutesData["localization-sample-2"],
        path: "localization-sample-2"
    },
    {
        component: LocalizationSample3Component,
        data: servicesRoutesData["localization-sample-3"],
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

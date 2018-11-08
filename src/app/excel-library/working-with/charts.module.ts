import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxExcelXlsxModule } from "igniteui-angular-excel/ES5/igx-excel-xlsx-module";
import { ExcelLibraryWorkingWithChartsComponent } from "./charts.component";

const routes: Routes = [
    { path: "", component: ExcelLibraryWorkingWithChartsComponent }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [ ExcelLibraryWorkingWithChartsComponent ],
    imports: [
        routing,
        CommonModule,
        FormsModule,
        IgxExcelXlsxModule,
        IgxCategoryChartModule
    ]
})

export class ExcelLibraryWorkingWithChartsModule { }

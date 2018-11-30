import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
// import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";

import { ExcelLibraryWorkingWithTablesComponent } from "./tables.component";

const routes: Routes = [
    { path: "", component: ExcelLibraryWorkingWithTablesComponent }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [ ExcelLibraryWorkingWithTablesComponent ],
    imports: [
        routing,
        CommonModule,
        FormsModule,
        IgxCategoryChartModule
        // IgxExcelModule
    ]
})

export class ExcelLibraryWorkingWithTablesModule { }

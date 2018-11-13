import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// TODO import either CategoryChart, DataChart, or Grid module:
// import { IgxButtonModule, IgxGridModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxExcelXlsxModule } from "igniteui-angular-excel/ES5/igx-excel-xlsx-module";
// import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
// import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
// import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";

// importing IG sample:
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
        // IgxButtonModule,
        IgxCategoryChartModule,
        IgxExcelXlsxModule
        // IgxDataChartCoreModule,
        // IgxDataChartCategoryModule,
        // IgxExcelModule,
        // IgxGridModule,
    ]
})

export class ExcelLibraryWorkingWithTablesModule { }

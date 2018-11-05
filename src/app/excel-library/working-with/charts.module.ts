import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// TODO import either CategoryChart or DataChart module:
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
// import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
// import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";

// importing IG sample:
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
        IgxCategoryChartModule
        // IgxDataChartCoreModule,
        // IgxDataChartCategoryModule,
        // IgxExcelModule,
    ]
})

export class ExcelLibraryWorkingWithChartsModule { }

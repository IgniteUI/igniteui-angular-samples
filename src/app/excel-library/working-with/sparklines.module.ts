import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// TODO import either sparkline module:
// import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";

// importing IG sample:
import { ExcelLibraryWorkingWithSparklinesComponent } from "./sparklines.component";

const routes: Routes = [
    { path: "", component: ExcelLibraryWorkingWithSparklinesComponent }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [ ExcelLibraryWorkingWithSparklinesComponent ],
    imports: [
        routing,
        CommonModule,
        FormsModule
        // IgxExcelModule,
    ]
})

export class ExcelLibraryWorkingWithSparklinesModule { }

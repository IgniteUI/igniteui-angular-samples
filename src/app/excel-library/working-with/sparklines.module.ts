import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// importing IG sample:
import { IgxExcelModule } from 'igniteui-angular-excel/ES5/igx-excel-module';
import { IgxGridModule,	IgxIconModule, IgxRippleModule,	IgxInputGroupModule, IgxGridComponent } from "igniteui-angular";
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core-module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category-module';
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts/ES5/igx-data-chart-interactivity-module';
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
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
        FormsModule,
        IgxExcelModule,        
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartInteractivityModule,
        IgxCategoryChartModule,
		IgxGridModule.forRoot(),
		IgxRippleModule,
		IgxIconModule,
		IgxInputGroupModule
    ]
})

export class ExcelLibraryWorkingWithSparklinesModule { }

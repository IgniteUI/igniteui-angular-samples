import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { CategoryChartOverviewComponent } from "./overview/category-chart-overview-sample.component";
import { DataService } from "./services/data.service";

@NgModule({
    declarations: [
        CategoryChartOverviewComponent
    ],
    exports: [ CategoryChartOverviewComponent ],
    imports: [ CommonModule, FormsModule, IgxCategoryChartModule ],
    providers: [ DataService ]
})
export class CategoryChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CategoryChartSamplesModule,
            providers: [ DataService ]
        };
    }
}

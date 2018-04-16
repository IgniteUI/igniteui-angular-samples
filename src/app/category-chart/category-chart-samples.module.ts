import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { CategoryChartHighFrequencyComponent } from "./high-frequency/category-chart-high-frequency-sample.component";
import { CategoryChartOverviewComponent } from "./overview/category-chart-overview-sample.component";

@NgModule({
    declarations: [
        CategoryChartOverviewComponent,
        CategoryChartHighFrequencyComponent
    ],
    imports: [ CommonModule, FormsModule, IgxCategoryChartModule ]
})
export class CategoryChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CategoryChartSamplesModule
        };
    }
}

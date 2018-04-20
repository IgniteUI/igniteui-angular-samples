import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { CategoryChartAxisOptionsComponent } from "./axis-options/category-chart-axis-options-sample.component";
import { CategoryChartConfigOptionsComponent } from "./config-options/category-chart-config-options-sample.component";
import { CategoryChartHighFrequencyComponent } from "./high-frequency/category-chart-high-frequency-sample.component";
import { CategoryChartHighVolumeComponent } from "./high-volume/category-chart-high-volume-sample.component";
import { CategoryChartOverviewComponent } from "./overview/category-chart-overview-sample.component";
import { CategoryChartCustomTooltipsComponent } from "./custom-tooltips/category-chart-custom-tooltips-sample.component";

@NgModule({
    declarations: [
        CategoryChartOverviewComponent,
        CategoryChartHighVolumeComponent,
        CategoryChartHighFrequencyComponent,
        CategoryChartAxisOptionsComponent,
        CategoryChartConfigOptionsComponent,
        CategoryChartCustomTooltipsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxCategoryChartModule ]
})
export class CategoryChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CategoryChartSamplesModule
        };
    }
}

import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { CategoryChartAxisOptionsComponent } from "./axis-options/category-chart-axis-options-sample.component";
import { CategoryChartConfigOptionsComponent } from "./config-options/category-chart-config-options-sample.component";
import {
    CategoryChartCustomTooltipsComponent
} from "./custom-tooltips/category-chart-custom-tooltips-sample.component";
import { CategoryChartOverlapColumnsComponent } from "./overlap-columns/category-chart-overlap-columns.component";
import { CategoryChartOverviewComponent } from "./overview/category-chart-overview-sample.component";
import {
    CategoryChartWithTrendlineComponent
} from "./trendline/category-chart-with-trendline.component";

@NgModule({
    declarations: [
        CategoryChartOverlapColumnsComponent,
        CategoryChartOverviewComponent,
        CategoryChartAxisOptionsComponent,
        CategoryChartConfigOptionsComponent,
        CategoryChartCustomTooltipsComponent,
        CategoryChartWithTrendlineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxCategoryChartModule,
        IgxLegendModule ]
})
export class CategoryChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CategoryChartSamplesModule
        };
    }
}

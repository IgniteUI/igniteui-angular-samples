import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import {
    CategoryChartAnnotationsComponent
} from "./annotations/category-chart-annotations.component";
import {
    CategoryChartAxisOptionsComponent
} from "./axis-options/category-chart-axis-options-sample.component";
import {
    CategoryChartConfigOptionsComponent
} from "./config-options/category-chart-config-options-sample.component";
import {
    CategoryChartHighlightingComponent
} from "./highlighting/category-chart-highlighting.component";
import {
    CategoryChartOverlapColumnsComponent
} from "./overlap-columns/category-chart-overlap-columns.component";
import {
    CategoryChartOverviewComponent
} from "./overview/category-chart-overview-sample.component";
import {
    CategoryChartTooltipTemplateComponent
} from "./tooltip-template/category-chart-tooltip-template.component";
import {
    CategoryChartTooltipTypesComponent
} from "./tooltip-types/category-chart-tooltip-types.component";
import {
    CategoryChartTrendlinesComponent
} from "./trendline/category-chart-trendlines.component";

@NgModule({
    declarations: [
        CategoryChartAnnotationsComponent,
        CategoryChartHighlightingComponent,
        CategoryChartOverlapColumnsComponent,
        CategoryChartOverviewComponent,
        CategoryChartAxisOptionsComponent,
        CategoryChartConfigOptionsComponent,
        CategoryChartTooltipTemplateComponent,
        CategoryChartTooltipTypesComponent,
        CategoryChartTrendlinesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxCategoryChartModule,
        IgxLegendModule
    ]
})
export class CategoryChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CategoryChartSamplesModule
        };
    }
}

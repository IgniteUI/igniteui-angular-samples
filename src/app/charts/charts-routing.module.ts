import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    CategoryChartAnnotationsComponent
} from "./category-chart/annotations/category-chart-annotations.component";
import {
    CategoryChartAxisOptionsComponent
} from "./category-chart/axis-options/category-chart-axis-options-sample.component";
import { CategoryChartPerformanceSamplesModule } from "./category-chart/category-chart-performance-samples.module";
import { CategoryChartSamplesModule } from "./category-chart/category-chart-samples.module";
import {
    CategoryChartConfigOptionsComponent
} from "./category-chart/config-options/category-chart-config-options-sample.component";
import {
    CategoryChartHighFrequencyComponent
} from "./category-chart/high-frequency/category-chart-high-frequency-sample.component";
import {
    CategoryChartHighVolumeComponent
} from "./category-chart/high-volume/category-chart-high-volume-sample.component";
import {
    CategoryChartHighlightingComponent
} from "./category-chart/highlighting/category-chart-highlighting.component";
import {
    CategoryChartOverlapColumnsComponent
} from "./category-chart/overlap-columns/category-chart-overlap-columns.component";
import {
    CategoryChartOverviewComponent
} from "./category-chart/overview/category-chart-overview-sample.component";
import {
    CategoryChartTooltipTemplateComponent
} from "./category-chart/tooltip-template/category-chart-tooltip-template.component";
import {
    CategoryChartTooltipTypesComponent
} from "./category-chart/tooltip-types/category-chart-tooltip-types.component";
import {
    CategoryChartTrendlinesComponent
} from "./category-chart/trendline/category-chart-trendlines.component";
import {
    DoughnutChartExplosionSampleComponent
} from "./doughnut-chart/doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import {
    DoughnutChartOverviewSampleComponent
} from "./doughnut-chart/doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import { DoughnutChartSamplesModule } from "./doughnut-chart/doughnut-chart-samples.module";
import {
    DoughnutChartSelectionSampleComponent
} from "./doughnut-chart/doughnut-chart-selection-sample/doughnut-chart-selection-sample.component"
import {
    FinancialChartAnnotationsComponent
} from "./financial-chart/annotations/financial-chart-annotations.component";
import {
    FinancialChartAxisTypesComponent
} from "./financial-chart/axis-types/financial-chart-axis-types.component";
import {
    FinancialChartCustomIndicatorsComponent
} from "./financial-chart/custom-indicators/financial-chart-custom-indicators.component";
import { FinancialChartSamplesModule } from "./financial-chart/financial-chart-samples.module";
import {
    FinancialChartHighFrequencyComponent
} from "./financial-chart/high-frequency/financial-chart-high-frequency.component";
import {
    FinancialChartHighVolumeComponent
} from "./financial-chart/high-volume/financial-chart-high-volume.component";
import {
    FinancialChartIndicatorTypesComponent
} from "./financial-chart/indicator-types/financial-chart-indicator-types.component";
import {
    FinancialChartMultipleDataComponent
} from "./financial-chart/multiple-data/financial-chart-multiple-data.component";
import {
    FinancialChartMultipleFeedsComponent
} from "./financial-chart/multiple-feeds/financial-chart-multiple-feeds.component";
import {
    FinancialChartOverviewComponent
} from "./financial-chart/overview/financial-chart-overview-sample.component";
import {
    FinancialChartPanesComponent
} from "./financial-chart/panes/financial-chart-panes.component";
import {
    FinancialChartPerformanceComponent
} from "./financial-chart/performance/financial-chart-performance.component";
import {
    FinancialChartTimeBasedDataComponent
} from "./financial-chart/time-based-data/financial-chart-time-based-data.component";
import {
    FinancialChartTitlesComponent
} from "./financial-chart/titles/financial-chart-titles.component";
import {
    FinancialChartTooltipTemplateComponent
} from "./financial-chart/tooltip-template/financial-chart-tooltip-template.component";
import {
    FinancialChartTooltipTypesComponent
} from "./financial-chart/tooltip-types/financial-chart-tooltip-types.component";
import {
    FinancialChartTrendlinesComponent
} from "./financial-chart/trendlines/financial-chart-trendlines.component";
import {
    FinancialChartVolumeTypeComponent
} from "./financial-chart/volume-type/financial-chart-volume-type.component";
import { PieChartDataSampleComponent } from "./pie-chart/pie-chart-data-sample/pie-chart-data-sample.component";
import { PieChartExplosionComponent } from "./pie-chart/pie-chart-explosion/pie-chart-explosion.component";
import { PieChartLegendComponent } from "./pie-chart/pie-chart-legend/pie-chart-legend.component";
import { PieChartOthersComponent } from "./pie-chart/pie-chart-others/pie-chart-others.component";
import { PieChartSamplesModule } from "./pie-chart/pie-chart-samples.module";
import { PieChartSelectionComponent } from "./pie-chart/pie-chart-selection/pie-chart-selection.component";

export const chartsRoutes: Routes = [
    {
        component: DoughnutChartExplosionSampleComponent,
        data: { displayName: "Doughnut Chart Explosion", parentName: "Doughnut Chart" },
        path: "doughnut-chart-explosion"
    },
    {
        component: DoughnutChartOverviewSampleComponent,
        data: { displayName: "Doughnut Chart Overview", parentName: "Doughnut Chart" },
        path: "doughnut-chart-overview"
    },
    {
        component: DoughnutChartSelectionSampleComponent,
        data: { displayName: "Doughnut Chart Selection", parentName: "Doughnut Chart" },
        path: "doughnut-chart-selection"
    },
    {
        component: PieChartDataSampleComponent,
        data: { displayName: "Pie Chart Data Sample", parentName: "Pie Chart" },
        path: "pie-chart-data-sample"
    },
    {
        component: PieChartExplosionComponent,
        data: { displayName: "Pie Chart Explosion", parentName: "Pie Chart" },
        path: "pie-chart-explosion"
    },
    {
        component: PieChartLegendComponent,
        data: { displayName: "Pie Chart Legend", parentName: "Pie Chart" },
        path: "pie-chart-legend"
    },
    {
        component: PieChartOthersComponent,
        data: { displayName: "Pie Chart Others Slice", parentName: "Pie Chart" },
        path: "pie-chart-others"
    },
    {
        component: PieChartSelectionComponent,
        data: { displayName: "Pie Chart Selection", parentName: "Pie Chart" },
        path: "pie-chart-selection"
    },
    {
        component: CategoryChartOverviewComponent,
        data: { displayName: "Category Chart Overview", parentName: "Category Chart" },
        path: "category-chart-overview-sample"
    },
    {
        component: CategoryChartAnnotationsComponent,
        data: { displayName: "Category Chart Annotations", parentName: "Category Chart" },
        path: "category-chart-annotations"
    },
    {
        component: CategoryChartOverlapColumnsComponent,
        data: { displayName: "Category Chart Overlap Columns", parentName: "Category Chart" },
        path: "category-chart-overlap-columns"
    },
    {
        component: CategoryChartHighlightingComponent,
        data: { displayName: "Category Chart Highlighting", parentName: "Category Chart" },
        path: "category-chart-highlighting-sample"
    },
    {
        component: CategoryChartHighVolumeComponent,
        data: { displayName: "Category Chart High Volume", parentName: "Category Chart" },
        path: "category-chart-high-volume-sample"
    },
    {
        component: FinancialChartOverviewComponent,
        data: { displayName: "Financial Chart Overview", parentName: "Financial Chart" },
        path: "financial-chart-overview-sample"
    },
    {
        component: CategoryChartHighFrequencyComponent,
        data: { displayName: "Category Chart High Frequency", parentName: "Category Chart" },
        path: "category-chart-high-frequency-sample"
    },
    {
        component: CategoryChartAxisOptionsComponent,
        data: { displayName: "Category Chart Axis Options", parentName: "Category Chart" },
        path: "category-chart-axis-options-sample"
    },
    {
        component: CategoryChartConfigOptionsComponent,
        data: { displayName: "Category Chart Configuring Options", parentName: "Category Chart" },
        path: "category-chart-config-options-sample"
    },
    {
        component: CategoryChartTooltipTemplateComponent,
        data: { displayName: "Category Chart Tooltips Template", parentName: "Category Chart" },
        path: "category-chart-tooltip-template"
    },
    {
        component: CategoryChartTooltipTypesComponent,
        data: { displayName: "Category Chart Tooltip Types", parentName: "Category Chart" },
        path: "category-chart-tooltip-types"
    },
    {
        component: CategoryChartTrendlinesComponent,
        data: { displayName: "Category Chart Trendline", parentName: "Category Chart" },
        path: "category-chart-trendline"
    },
    {
        component: FinancialChartPerformanceComponent,
        data: { displayName: "Financial Chart Performance", parentName: "Financial Chart" },
        path: "financial-chart-performance"
    },
    {
        component: FinancialChartAnnotationsComponent,
        data: { displayName: "Financial Chart Annotations", parentName: "Financial Chart" },
        path: "financial-chart-annotations"
    },
    {
        component: FinancialChartTitlesComponent,
        data: { displayName: "Financial Chart Titles", parentName: "Financial Chart" },
        path: "financial-chart-titles"
    },
    {
        component: FinancialChartPanesComponent,
        data: { displayName: "Financial Chart Panes", parentName: "Financial Chart" },
        path: "financial-chart-panes"
    },
    {
        component: FinancialChartMultipleDataComponent,
        data: { displayName: "Financial Chart Multiple Sources", parentName: "Financial Chart" },
        path: "financial-chart-multiple-data"
    },
    {
        component: FinancialChartMultipleFeedsComponent,
        data: { displayName: "Financial Chart Multiple Feeds", parentName: "Financial Chart" },
        path: "financial-chart-multiple-feeds"
    },
    {
        component: FinancialChartIndicatorTypesComponent,
        data: { displayName: "Financial Chart Indicator Types", parentName: "Financial Chart" },
        path: "financial-chart-indicator-types"
    },
    {
        component: FinancialChartVolumeTypeComponent,
        data: { displayName: "Financial Chart Volume Types", parentName: "Financial Chart" },
        path: "financial-chart-volume-type"
    },
    {
        component: FinancialChartCustomIndicatorsComponent,
        data: { displayName: "Financial Chart Custom Indicators", parentName: "Financial Chart" },
        path: "financial-chart-custom-indicators"
    },
    {
        component: FinancialChartHighVolumeComponent,
        data: { displayName: "Financial Chart High Volume", parentName: "Financial Chart" },
        path: "financial-chart-high-volume"
    },
    {
        component: FinancialChartHighFrequencyComponent,
        data: { displayName: "Financial Chart High Frequency", parentName: "Financial Chart" },
        path: "financial-chart-high-frequency"
    },
    {
        component: FinancialChartAxisTypesComponent,
        data: { displayName: "Financial Chart Axis Types", parentName: "Financial Chart" },
        path: "financial-chart-axis-types"
    },
    {
        component: FinancialChartTooltipTemplateComponent,
        data: { displayName: "Financial Chart Tooltips Template", parentName: "Financial Chart" },
        path: "financial-chart-tooltip-template"
    },
    {
        component: FinancialChartTooltipTypesComponent,
        data: { displayName: "Financial Chart Tooltip Types", parentName: "Financial Chart" },
        path: "financial-chart-tooltip-types"
    },
    {
        component: FinancialChartTimeBasedDataComponent,
        data: { displayName: "Financial Chart Time Based Data", parentName: "Financial Chart" },
        path: "financial-chart-time-based-data"
    },
    {
        component: FinancialChartTrendlinesComponent,
        data: { displayName: "Financial Chart Trendlines", parentName: "Financial Chart" },
        path: "financial-chart-trendlines"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        CategoryChartSamplesModule.forRoot(),
        CategoryChartPerformanceSamplesModule.forRoot(),
        FinancialChartSamplesModule.forRoot(),
        PieChartSamplesModule.forRoot(),
        DoughnutChartSamplesModule.forRoot(),
        RouterModule.forChild(chartsRoutes)
    ]
})
export class ChartsRoutingModule { }

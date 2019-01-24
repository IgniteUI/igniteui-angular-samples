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
import { chartsRoutesData } from "./charts-routes-data";
import {
    DoughnutChartExplosionSampleComponent
} from "./doughnut-chart/doughnut-chart-explosion-sample/doughnut-chart-explosion-sample.component";
import {
    DoughnutChartOverviewSampleComponent
} from "./doughnut-chart/doughnut-chart-overview-sample/doughnut-chart-overview-sample.component";
import { DoughnutChartSamplesModule } from "./doughnut-chart/doughnut-chart-samples.module";
import {
    DoughnutChartSelectionSampleComponent
} from "./doughnut-chart/doughnut-chart-selection-sample/doughnut-chart-selection-sample.component";
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
        data: chartsRoutesData["doughnut-chart-explosion"],
        path: "doughnut-chart-explosion"
    },
    {
        component: DoughnutChartOverviewSampleComponent,
        data: chartsRoutesData["doughnut-chart-overview"],
        path: "doughnut-chart-overview"
    },
    {
        component: DoughnutChartSelectionSampleComponent,
        data: chartsRoutesData["doughnut-chart-selection"],
        path: "doughnut-chart-selection"
    },
    {
        component: PieChartDataSampleComponent,
        data: chartsRoutesData["pie-chart-data-sample"],
        path: "pie-chart-data-sample"
    },
    {
        component: PieChartExplosionComponent,
        data: chartsRoutesData["pie-chart-explosion"],
        path: "pie-chart-explosion"
    },
    {
        component: PieChartLegendComponent,
        data: chartsRoutesData["pie-chart-legend"],
        path: "pie-chart-legend"
    },
    {
        component: PieChartOthersComponent,
        data: chartsRoutesData["pie-chart-others"],
        path: "pie-chart-others"
    },
    {
        component: PieChartSelectionComponent,
        data: chartsRoutesData["pie-chart-selection"],
        path: "pie-chart-selection"
    },
    {
        component: CategoryChartOverviewComponent,
        data: chartsRoutesData["category-chart-overview-sample"],
        path: "category-chart-overview-sample"
    },
    {
        component: CategoryChartAnnotationsComponent,
        data: chartsRoutesData["category-chart-annotations"],
        path: "category-chart-annotations"
    },
    {
        component: CategoryChartOverlapColumnsComponent,
        data: chartsRoutesData["category-chart-overlap-columns"],
        path: "category-chart-overlap-columns"
    },
    {
        component: CategoryChartHighlightingComponent,
        data: chartsRoutesData["category-chart-highlighting-sample"],
        path: "category-chart-highlighting-sample"
    },
    {
        component: CategoryChartHighVolumeComponent,
        data: chartsRoutesData["category-chart-high-volume-sample"],
        path: "category-chart-high-volume-sample"
    },
    {
        component: FinancialChartOverviewComponent,
        data: chartsRoutesData["financial-chart-overview-sample"],
        path: "financial-chart-overview-sample"
    },
    {
        component: CategoryChartHighFrequencyComponent,
        data: chartsRoutesData["category-chart-high-frequency-sample"],
        path: "category-chart-high-frequency-sample"
    },
    {
        component: CategoryChartAxisOptionsComponent,
        data: chartsRoutesData["category-chart-axis-options-sample"],
        path: "category-chart-axis-options-sample"
    },
    {
        component: CategoryChartConfigOptionsComponent,
        data: chartsRoutesData["category-chart-config-options-sample"],
        path: "category-chart-config-options-sample"
    },
    {
        component: CategoryChartTooltipTemplateComponent,
        data: chartsRoutesData["category-chart-tooltip-template"],
        path: "category-chart-tooltip-template"
    },
    {
        component: CategoryChartTooltipTypesComponent,
        data: chartsRoutesData["category-chart-tooltip-types"],
        path: "category-chart-tooltip-types"
    },
    {
        component: CategoryChartTrendlinesComponent,
        data: chartsRoutesData["category-chart-trendline"],
        path: "category-chart-trendline"
    },
    {
        component: FinancialChartPerformanceComponent,
        data: chartsRoutesData["financial-chart-performance"],
        path: "financial-chart-performance"
    },
    {
        component: FinancialChartAnnotationsComponent,
        data: chartsRoutesData["financial-chart-annotations"],
        path: "financial-chart-annotations"
    },
    {
        component: FinancialChartTitlesComponent,
        data: chartsRoutesData["financial-chart-titles"],
        path: "financial-chart-titles"
    },
    {
        component: FinancialChartPanesComponent,
        data: chartsRoutesData["financial-chart-panes"],
        path: "financial-chart-panes"
    },
    {
        component: FinancialChartMultipleDataComponent,
        data: chartsRoutesData["financial-chart-multiple-data"],
        path: "financial-chart-multiple-data"
    },
    {
        component: FinancialChartMultipleFeedsComponent,
        data: chartsRoutesData["financial-chart-multiple-feeds"],
        path: "financial-chart-multiple-feeds"
    },
    {
        component: FinancialChartIndicatorTypesComponent,
        data: chartsRoutesData["financial-chart-indicator-types"],
        path: "financial-chart-indicator-types"
    },
    {
        component: FinancialChartVolumeTypeComponent,
        data: chartsRoutesData["financial-chart-volume-type"],
        path: "financial-chart-volume-type"
    },
    {
        component: FinancialChartCustomIndicatorsComponent,
        data: chartsRoutesData["financial-chart-custom-indicators"],
        path: "financial-chart-custom-indicators"
    },
    {
        component: FinancialChartHighVolumeComponent,
        data: chartsRoutesData["financial-chart-high-volume"],
        path: "financial-chart-high-volume"
    },
    {
        component: FinancialChartHighFrequencyComponent,
        data: chartsRoutesData["financial-chart-high-frequency"],
        path: "financial-chart-high-frequency"
    },
    {
        component: FinancialChartAxisTypesComponent,
        data: chartsRoutesData["financial-chart-axis-types"],
        path: "financial-chart-axis-types"
    },
    {
        component: FinancialChartTooltipTemplateComponent,
        data: chartsRoutesData["financial-chart-tooltip-template"],
        path: "financial-chart-tooltip-template"
    },
    {
        component: FinancialChartTooltipTypesComponent,
        data: chartsRoutesData["financial-chart-tooltip-types"],
        path: "financial-chart-tooltip-types"
    },
    {
        component: FinancialChartTimeBasedDataComponent,
        data: chartsRoutesData["financial-chart-time-based-data"],
        path: "financial-chart-time-based-data"
    },
    {
        component: FinancialChartTrendlinesComponent,
        data: chartsRoutesData["financial-chart-trendlines"],
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

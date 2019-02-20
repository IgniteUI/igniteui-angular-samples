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
import { DataChartSamplesModule } from "./data-chart/data-chart-samples-module";

import { DataChartAxisLocationsComponent
} from "./data-chart/data-chart-axis-locations/data-chart-axis-locations.component";
import { DataChartAxisSettingsComponent
} from "./data-chart/data-chart-axis-settings/data-chart-axis-settings.component";
import { DataChartAxisSharingComponent } from "./data-chart/data-chart-axis-sharing/data-chart-axis-sharing.component";
import { DataChartAxisTypesComponent } from "./data-chart/data-chart-axis-types/data-chart-axis-types.component";
import { DataChartLegendsComponent } from "./data-chart/data-chart-legends/data-chart-legends.component";
import { DataChartNavigationComponent } from "./data-chart/data-chart-navigation/data-chart-navigation.component";
import {
    DataChartOverviewComponent
} from "./data-chart/data-chart-overview/data-chart-overview.component";
import { DataChartPerformanceComponent } from "./data-chart/data-chart-performance/data-chart-performance.component";
import {
    DataChartSeriesAnimationsComponent
} from "./data-chart/data-chart-series-animations/data-chart-series-animations.component";
import {
    DataChartSeriesAnnotationsComponent
} from "./data-chart/data-chart-series-annotations/data-chart-series-annotations.component";
import {
    DataChartSeriesHighlightingComponent
} from "./data-chart/data-chart-series-highlighting/data-chart-series-highlighting.component";
import { DataChartSeriesMarkersComponent
} from "./data-chart/data-chart-series-markers/data-chart-series-markers.component";
import { DataChartSeriesTooltipsComponent
} from "./data-chart/data-chart-series-tooltips/data-chart-series-tooltips.component";
import { DataChartSeriesTrendlinesComponent
} from "./data-chart/data-chart-series-trendlines/data-chart-series-trendlines.component";
import { DataChartSynchronizationComponent
} from "./data-chart/data-chart-synchronization/data-chart-synchronization.component";
import { DataChartTitlesComponent } from "./data-chart/data-chart-titles/data-chart-titles.component";
import {
    DataChartTypeCategorySeriesComponent
} from "./data-chart/data-chart-type-category-series/data-chart-type-category-series.component";
import {
    DataChartTypeFinancialSeriesComponent
} from "./data-chart/data-chart-type-financial-series/data-chart-type-financial-series.component";
import {
    DataChartTypePolarSeriesComponent
} from "./data-chart/data-chart-type-polar-series/data-chart-type-polar-series.component";
import {
    DataChartTypeRadialSeriesComponent
} from "./data-chart/data-chart-type-radial-series/data-chart-type-radial-series.component";
import {
    DataChartTypeRangeSeriesComponent
} from "./data-chart/data-chart-type-range-series/data-chart-type-range-series.component";
import {
    DataChartTypeScatterAreaSeriesComponent
} from "./data-chart/data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
import {
    DataChartTypeScatterContourSeriesComponent
} from "./data-chart/data-chart-type-scatter-contour-series/data-chart-type-scatter-contour-series.component";
import {
    DataChartTypeScatterDensitySeriesComponent
} from "./data-chart/data-chart-type-scatter-density-series/data-chart-type-scatter-density-series.component";
import {
    DataChartTypeScatterSeriesComponent
} from "./data-chart/data-chart-type-scatter-series/data-chart-type-scatter-series.component";
import {
    DataChartTypeScatterShapeSeriesComponent
} from "./data-chart/data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
import {
    DataChartTypeStackedSeriesComponent
} from "./data-chart/data-chart-type-stacked-series/data-chart-type-stacked-series.component";
import {
    DataChartTypeValueOverlayComponent
} from "./data-chart/data-chart-type-value-overlay/data-chart-type-value-overlay.component";

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
        data: chartsRoutesData["category-chart-overview"],
        path: "category-chart-overview"
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
        component: DataChartAxisLocationsComponent,
        data: chartsRoutesData["data-chart-axis-locations"],
        path: "data-chart-axis-locations"
    },
    {
        component: DataChartAxisSettingsComponent,
        data: chartsRoutesData["data-chart-axis-settings"],
        path: "data-chart-axis-settings"
    },
    {
        component: DataChartAxisSharingComponent,
        data: chartsRoutesData["data-chart-axis-sharing"],
        path: "data-chart-axis-sharing"
    },
    {
        component: DataChartAxisTypesComponent,
        data: chartsRoutesData["data-chart-axis-types"],
        path: "data-chart-axis-types"
    },
    {
        component: DataChartLegendsComponent,
        data: chartsRoutesData["data-chart-legends"],
        path: "data-chart-legends"
    },
    {
        component: DataChartNavigationComponent,
        data: chartsRoutesData["data-chart-navigation"],
        path: "data-chart-navigation"
    },
    {
        component: DataChartOverviewComponent,
        data: chartsRoutesData["data-chart-overview"],
        path: "data-chart-overview"
    },
    {
        component: DataChartPerformanceComponent,
        data: chartsRoutesData["data-chart-performance"],
        path: "data-chart-performance"
    },
    {
        component: DataChartSeriesAnimationsComponent,
        data: chartsRoutesData["data-chart-series-animations"],
        path: "data-chart-series-animations"
    },
    {
        component: DataChartSeriesAnnotationsComponent,
        data: chartsRoutesData["data-chart-series-annotations"],
        path: "data-chart-series-annotations"
    },
    {
        component: DataChartSeriesHighlightingComponent,
        data: chartsRoutesData["data-chart-series-highlighting"],
        path: "data-chart-series-highlighting"
    },
    {
        component: DataChartSeriesMarkersComponent,
        data: chartsRoutesData["data-chart-series-markers"],
        path: "data-chart-series-markers"
    },
    {
        component: DataChartSeriesTooltipsComponent,
        data: chartsRoutesData["data-chart-series-tooltips"],
        path: "data-chart-series-tooltips"
    },
    {
        component: DataChartSeriesTrendlinesComponent,
        data: chartsRoutesData["data-chart-series-trendlines"],
        path: "data-chart-series-trendlines"
    },
    {
        component: DataChartSynchronizationComponent,
        data: chartsRoutesData["data-chart-synchronization"],
        path: "data-chart-synchronization"
    },
    {
        component: DataChartTitlesComponent,
        data: chartsRoutesData["data-chart-titles"],
        path: "data-chart-titles"
    },
    {
        component: DataChartTypeCategorySeriesComponent,
        data: chartsRoutesData["data-chart-type-category-series"],
        path: "data-chart-type-category-series"
    },
    {
        component: DataChartTypeFinancialSeriesComponent,
        data: chartsRoutesData["data-chart-type-financial-series"],
        path: "data-chart-type-financial-series"
    },
    {
        component: DataChartTypePolarSeriesComponent,
        data: chartsRoutesData["data-chart-type-polar-series"],
        path: "data-chart-type-polar-series"
    },
    {
        component: DataChartTypeRadialSeriesComponent,
        data: chartsRoutesData["data-chart-type-radial-series"],
        path: "data-chart-type-radial-series"
    },
    {
        component: DataChartTypeRangeSeriesComponent,
        data: chartsRoutesData["data-chart-type-range-series"],
        path: "data-chart-type-range-series"
    },
    {
        component: DataChartTypeScatterAreaSeriesComponent,
        data: chartsRoutesData["data-chart-type-area-series"],
        path: "data-chart-type-area-series"
    },
    {
        component: DataChartTypeScatterContourSeriesComponent,
        data: chartsRoutesData["data-chart-type-contour-series"],
        path: "data-chart-type-contour-series"
    },
    {
        component: DataChartTypeScatterDensitySeriesComponent,
        data: chartsRoutesData["data-chart-type-scatter-density-series"],
        path: "data-chart-type-scatter-density-series"
    },
    {
        component: DataChartTypeScatterSeriesComponent,
        data: chartsRoutesData["data-chart-type-scatter-series"],
        path: "data-chart-type-scatter-series"
    },
    {
        component: DataChartTypeScatterShapeSeriesComponent,
        data: chartsRoutesData["data-chart-type-shape-series"],
        path: "data-chart-type-shape-series"
    },
    {
        component: DataChartTypeStackedSeriesComponent,
        data: chartsRoutesData["data-chart-type-stacked-series"],
        path: "data-chart-type-stacked-series"
    },
    {
        component: DataChartTypeValueOverlayComponent,
        data: chartsRoutesData["data-chart-value-overlay"],
        path: "data-chart-value-overlay"
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
        CategoryChartSamplesModule,
        CategoryChartPerformanceSamplesModule,
        FinancialChartSamplesModule,
        DataChartSamplesModule,
        PieChartSamplesModule,
        DoughnutChartSamplesModule,
        RouterModule.forChild(chartsRoutes)
    ]
})
export class ChartsRoutingModule { }

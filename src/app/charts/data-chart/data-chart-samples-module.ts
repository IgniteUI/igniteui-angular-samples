import { ModuleWithProviders, NgModule } from "@angular/core";

// Chart Modules
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

// Axes
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxCategoryYAxisModule } from "igniteui-angular-charts/ES5/igx-category-y-axis-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxTimeXAxisModule } from "igniteui-angular-charts/ES5/igx-time-x-axis-module";

// Series
import { IgxBarSeriesModule} from "igniteui-angular-charts/ES5/igx-bar-series-module";
import { IgxBubbleSeriesModule } from "igniteui-angular-charts/ES5/igx-bubble-series-module";
import { IgxColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-column-series-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxScatterAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-area-series-module";
import { IgxScatterContourSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-contour-series-module";
import { IgxScatterLineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-line-series-module";
import { IgxScatterPolygonSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series-module";
import { IgxScatterPolylineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series-module";
import { IgxScatterSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-series-module";
import { IgxScatterSplineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-spline-series-module";

import {IgxLinearContourValueResolverModule
} from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver-module";

// Highlight and Annotation Layers
import { IgxCalloutLayerModule } from "igniteui-angular-charts/ES5/igx-callout-layer-module";
import { IgxCategoryHighlightLayerModule } from "igniteui-angular-charts/ES5/igx-category-highlight-layer-module";
import {
    IgxCategoryItemHighlightLayerModule
} from "igniteui-angular-charts/ES5/igx-category-item-highlight-layer-module";
import {
    IgxCrosshairLayerModule
} from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";
import {
    IgxDataChartCategoryTrendLineModule
} from "igniteui-angular-charts/ES5/igx-data-chart-category-trendline-module";
import { IgxFinalValueLayerModule } from "igniteui-angular-charts/ES5/igx-final-value-layer-module";

// Tooltip Layers
import { IgxCategoryToolTipLayerModule } from "igniteui-angular-charts/ES5/igx-category-tool-tip-layer-module";
import { IgxItemToolTipLayerModule } from "igniteui-angular-charts/ES5/igx-item-tool-tip-layer-module";

import { DataChartAxisLocationsComponent } from "./data-chart-axis-locations/data-chart-axis-locations.component";
import { DataChartAxisSettingsComponent } from "./data-chart-axis-settings/data-chart-axis-settings.component";
import { DataChartAxisSharingComponent } from "./data-chart-axis-sharing/data-chart-axis-sharing.component";
import { DataChartAxisTypesComponent } from "./data-chart-axis-types/data-chart-axis-types.component";
import { DataChartLegendsComponent } from "./data-chart-legends/data-chart-legends.component";
import { DataChartNavigationComponent } from "./data-chart-navigation/data-chart-navigation.component";
import {
    DataChartOverviewComponent
} from "./data-chart-overview/data-chart-overview.component";
import { DataChartPerformanceComponent } from "./data-chart-performance/data-chart-performance.component";
import {
    DataChartSeriesAnimationsComponent
} from "./data-chart-series-animations/data-chart-series-animations.component";
import {
    DataChartSeriesAnnotationsComponent
} from "./data-chart-series-annotations/data-chart-series-annotations.component";
import {
    DataChartSeriesHighlightingComponent
} from "./data-chart-series-highlighting/data-chart-series-highlighting.component";
import { DataChartSeriesMarkersComponent } from "./data-chart-series-markers/data-chart-series-markers.component";
import { DataChartSeriesTooltipsComponent } from "./data-chart-series-tooltips/data-chart-series-tooltips.component";
import {
    DataChartSeriesTrendlinesComponent
} from "./data-chart-series-trendlines/data-chart-series-trendlines.component";
import { DataChartSynchronizationComponent } from "./data-chart-synchronization/data-chart-synchronization.component";
import { DataChartTitlesComponent } from "./data-chart-titles/data-chart-titles.component";
import {
    DataChartTypeCategorySeriesComponent
} from "./data-chart-type-category-series/data-chart-type-category-series.component";
import {
    DataChartTypeFinancialSeriesComponent
} from "./data-chart-type-financial-series/data-chart-type-financial-series.component";
import {
    DataChartTypePolarSeriesComponent
} from "./data-chart-type-polar-series/data-chart-type-polar-series.component";
import {
    DataChartTypeRadialSeriesComponent
} from "./data-chart-type-radial-series/data-chart-type-radial-series.component";
import {
    DataChartTypeRangeSeriesComponent
} from "./data-chart-type-range-series/data-chart-type-range-series.component";
import {
    DataChartTypeScatterAreaSeriesComponent
} from "./data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
import {
    DataChartTypeScatterContourSeriesComponent
} from "./data-chart-type-scatter-contour-series/data-chart-type-scatter-contour-series.component";
import {
    DataChartTypeScatterDensitySeriesComponent
} from "./data-chart-type-scatter-density-series/data-chart-type-scatter-density-series.component";
import {
    DataChartTypeScatterSeriesComponent
} from "./data-chart-type-scatter-series/data-chart-type-scatter-series.component";
import {
    DataChartTypeScatterShapeSeriesComponent
} from "./data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
import {
    DataChartTypeStackedSeriesComponent
} from "./data-chart-type-stacked-series/data-chart-type-stacked-series.component";
import {
    DataChartTypeValueOverlayComponent
} from "./data-chart-type-value-overlay/data-chart-type-value-overlay.component";

// Indicators and Overlays
import { IgxBollingerBandsOverlayModule } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module";
import { IgxMedianPriceIndicatorModule } from "igniteui-angular-charts/ES5/igx-median-price-indicator-module";
import { IgxMoneyFlowIndexIndicatorModule } from "igniteui-angular-charts/ES5/igx-money-flow-index-indicator-module";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DataChartAxisLocationsComponent,
        DataChartAxisSettingsComponent,
        DataChartAxisSharingComponent,
        DataChartAxisTypesComponent,
        DataChartLegendsComponent,
        DataChartNavigationComponent,
        DataChartOverviewComponent,
        DataChartPerformanceComponent,
        DataChartSeriesAnimationsComponent,
        DataChartSeriesAnnotationsComponent,
        DataChartSeriesHighlightingComponent,
        DataChartSeriesMarkersComponent,
        DataChartSeriesTooltipsComponent,
        DataChartSeriesTrendlinesComponent,
        DataChartSynchronizationComponent,
        DataChartTitlesComponent,
        DataChartTypeCategorySeriesComponent,
        DataChartTypeFinancialSeriesComponent,
        DataChartTypePolarSeriesComponent,
        DataChartTypeRadialSeriesComponent,
        DataChartTypeRangeSeriesComponent,
        DataChartTypeScatterAreaSeriesComponent,
        DataChartTypeScatterContourSeriesComponent,
        DataChartTypeScatterDensitySeriesComponent,
        DataChartTypeScatterSeriesComponent,
        DataChartTypeScatterShapeSeriesComponent,
        DataChartTypeStackedSeriesComponent,
        DataChartTypeValueOverlayComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartCategoryCoreModule,
        IgxCategoryXAxisModule,
        IgxNumericYAxisModule,
        IgxColumnSeriesModule,
        IgxDataChartInteractivityModule,
        IgxCategoryHighlightLayerModule,
        IgxCategoryItemHighlightLayerModule,
        IgxCategoryToolTipLayerModule,
        IgxItemToolTipLayerModule,
        IgxFinancialPriceSeriesModule,
        IgxDataChartCategoryTrendLineModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxScatterAreaSeriesModule,
        IgxScatterSeriesModule,
        IgxScatterLineSeriesModule,
        IgxScatterPolygonSeriesModule,
        IgxScatterPolylineSeriesModule,
        IgxScatterSplineSeriesModule,
        IgxBubbleSeriesModule,
        IgxNumericXAxisModule,
        IgxDataChartAnnotationModule,
        IgxCalloutLayerModule,
        IgxFinalValueLayerModule,
        IgxCrosshairLayerModule,
        IgxLegendModule,
        IgxBollingerBandsOverlayModule,
        IgxMedianPriceIndicatorModule,
        IgxMoneyFlowIndexIndicatorModule,
        IgxBarSeriesModule,
        IgxCategoryYAxisModule,
        IgxTimeXAxisModule,
        IgxScatterContourSeriesModule,
        IgxLinearContourValueResolverModule
    ]
})
export class DataChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: DataChartSamplesModule
        };
    }
}

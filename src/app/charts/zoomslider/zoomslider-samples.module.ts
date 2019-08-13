/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// chart modules
import { IgxBubbleSeriesModule } from "igniteui-angular-charts/ES5/igx-bubble-series-module";
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxCrosshairLayerModule } from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";

import { IgxZoomSliderDynamicModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module";

// sample components
import { ZoomSliderOverviewComponent } from "./zoomslider-overview/zoomslider-overview.component";

@NgModule({
    declarations: [
        ZoomSliderOverviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartCategoryCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxNumericXAxisModule,
        IgxNumericYAxisModule,
        IgxDataChartInteractivityModule,
        IgxBubbleSeriesModule,
        IgxDataChartAnnotationModule,
        IgxCrosshairLayerModule,
        IgxZoomSliderDynamicModule
        // IgxZoomSliderModule
     ]
})
export class ZoomSliderSamplesModule {}

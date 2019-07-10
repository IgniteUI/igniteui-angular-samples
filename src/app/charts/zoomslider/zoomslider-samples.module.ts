/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

// chart modules
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";

import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxOrdinalTimeXAxisModule } from "igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxCalloutLayerModule } from "igniteui-angular-charts/ES5/igx-callout-layer-module";
import { IgxCrosshairLayerModule } from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";

// import { IgxZoomSliderModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-module";
// import { IgxZoomSliderDynamicModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module";

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
        IgxOrdinalTimeXAxisModule,
        IgxCategoryXAxisModule,
        IgxNumericYAxisModule,
        IgxDataChartInteractivityModule,
        IgxFinancialPriceSeriesModule,
        IgxDataChartAnnotationModule,
        IgxCalloutLayerModule,
        IgxCrosshairLayerModule // ,
        // IgxZoomSliderDynamicModule,
        // IgxZoomSliderModule
     ]
})
export class ZoomSliderSamplesModule {}

/* tslint:disable */

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxSliderModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
// import { IgxZoomSliderModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-module";
import { IgxZoomSliderDynamicModule } from "igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module";

import { CategoryChartPerformanceSamplesModule } from "./category-chart/category-chart-performance-samples.module";
import { CategoryChartSamplesModule } from "./category-chart/category-chart-samples.module";
import { ChartsRoutingModule } from "./charts-routing.module";
import { DataChartSamplesModule } from "./data-chart/data-chart-samples-module";
import { DoughnutChartSamplesModule } from "./doughnut-chart/doughnut-chart-samples.module";
import { FinancialChartSamplesModule } from "./financial-chart/financial-chart-samples.module";
import { PieChartSamplesModule } from "./pie-chart/pie-chart-samples.module";
import { SparklineSamplesModule } from "./sparkline/sparkline-samples.module";
import { ZoomSliderSamplesModule } from "./zoomslider/zoomslider-samples.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CategoryChartSamplesModule,
        CategoryChartPerformanceSamplesModule,
        ChartsRoutingModule,
        DataChartSamplesModule,
        DoughnutChartSamplesModule,
        FinancialChartSamplesModule,
        PieChartSamplesModule,
        SparklineSamplesModule,
        ZoomSliderSamplesModule,
        IgxCategoryChartModule,
        IgxSliderModule,
        IgxZoomSliderDynamicModule
        // IgxZoomSliderModule
    ]
})
export class ChartsModule { }

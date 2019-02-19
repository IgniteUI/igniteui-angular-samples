import { Component, OnInit, ViewChild } from "@angular/core";

// types of axis:
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

// types of scatter series:
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxScatterLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-line-series-component";
import { IgxScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-series-component";
import { IgxScatterSplineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-spline-series-component";

// elements of scatter series:
import { BrushSelectionMode } from "igniteui-angular-charts/ES5/BrushSelectionMode";
import {
    IgxCustomPaletteBrushScaleComponent
} from "igniteui-angular-charts/ES5/igx-custom-palette-brush-scale-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts/ES5/igx-value-brush-scale-component";

import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";

import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";

import { SampleScatterStats } from "../SampleScatterStats";

@Component({
  selector: "app-data-chart-type-scatter-series",
  styleUrls: ["./data-chart-type-scatter-series.component.scss"],
  templateUrl: "./data-chart-type-scatter-series.component.html"
})
export class DataChartTypeScatterSeriesComponent implements OnInit {

    @ViewChild("chart")
    public chart: IgxDataChartComponent;
    @ViewChild("xAxis")
    public xAxis: IgxNumericXAxisComponent;
    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;
    @ViewChild("legend")
    public legend: IgxLegendComponent;

    constructor() { }

    public ngOnInit() {
        if (this.legend) {
            this.chart.legend = this.legend;
            this.setSeries("Bubble");
        }
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
        if (seriesType === "Point") {
            const series1 = new IgxScatterSeriesComponent();
            series1.name = "series1";
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const series2 = new IgxScatterSeriesComponent();
            series2.name = "series2";
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Line") {
            const series1 = new IgxScatterLineSeriesComponent();
            series1.name = "series1";
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const series2 = new IgxScatterLineSeriesComponent();
            series2.name = "series2";
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Spline") {
            const series1 = new IgxScatterSplineSeriesComponent();
            series1.name = "series1";
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const series2 = new IgxScatterSplineSeriesComponent();
            series2.name = "series2";
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Bubble") {
            const sizeScale = new IgxSizeScaleComponent();
            sizeScale.minimumValue = 10;
            sizeScale.maximumValue = 60;

            const brushScale1 = new IgxValueBrushScaleComponent();
            brushScale1.brushes = ["#FFFFFF", "#b56ffc"];
            brushScale1.minimumValue = 10;
            brushScale1.maximumValue = 60;

            const series1 = new IgxBubbleSeriesComponent();
            series1.name = "series1";
            series1.title = "Large Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithLargePop();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "population";
            series1.yMemberPath = "gdpTotal";
            series1.radiusMemberPath = "gdpPerCapita";
            series1.radiusScale = sizeScale;
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            const brushScale2 = new IgxCustomPaletteBrushScaleComponent();
            brushScale2.brushes = ["#FFFFFF", "#b56ffc"];
            brushScale2.brushSelectionMode = BrushSelectionMode.Interpolate;

            const series2 = new IgxBubbleSeriesComponent();
            series2.name = "series2";
            series2.title = "Small Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithSmallPop();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "population";
            series2.yMemberPath = "gdpTotal";
            series2.radiusMemberPath = "gdpPerCapita";
            series2.radiusScale = sizeScale;
            series2.xAxis = this.xAxis;
            series2.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        }
    }

}

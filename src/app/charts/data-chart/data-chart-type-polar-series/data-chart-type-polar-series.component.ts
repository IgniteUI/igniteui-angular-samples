import { Component, OnInit, ViewChild } from "@angular/core";

// types of axis:
import { IgxNumericAngleAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis-component";
import { IgxNumericRadiusAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis-component";

// types of polar series:
import { IgxPolarAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-polar-area-series-component";
import { IgxPolarLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-polar-line-series-component";
import { IgxPolarScatterSeriesComponent } from "igniteui-angular-charts/ES5/igx-polar-scatter-series-component";
import { IgxPolarSplineAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-polar-spline-area-series-component";
import { IgxPolarSplineSeriesComponent } from "igniteui-angular-charts/ES5/igx-polar-spline-series-component";

import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";

import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";

import { SamplePolarData } from "../SamplePolarData";

@Component({
  selector: "app-data-chart-type-polar-series",
  styleUrls: ["./data-chart-type-polar-series.component.scss"],
  templateUrl: "./data-chart-type-polar-series.component.html"
})
export class DataChartTypePolarSeriesComponent implements OnInit {

    @ViewChild("chart", {static: true})
    public chart: IgxDataChartComponent;
    @ViewChild("angleAxis", {static: true})
    public angleAxis: IgxNumericAngleAxisComponent;
    @ViewChild("radiusAxis", {static: true})
    public radiusAxis: IgxNumericRadiusAxisComponent;
    @ViewChild("legend", {static: true})
    public legend: IgxLegendComponent;

    public data: any[] = SamplePolarData.create();

    constructor() { }

    public ngOnInit() {
        if (this.chart) {
            this.chart.legend = this.legend;
        }
        this.setSeries("Spline");
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
         if (seriesType === "Area") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgxPolarAreaSeriesComponent();
            series1.name = "series1";
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxPolarAreaSeriesComponent();
            series2.name = "series2";
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.areaFillOpacity = 1;
            series2.areaFillOpacity = 1;
            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Spline Area") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgxPolarSplineAreaSeriesComponent();
            series1.name = "series1";
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;

            const series2 = new IgxPolarSplineAreaSeriesComponent();
            series2.name = "series2";
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.areaFillOpacity = 0.3;
            series2.areaFillOpacity = 0.3;
            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Spline") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgxPolarSplineSeriesComponent();
            series1.name = "series1";
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxPolarSplineSeriesComponent();
            series2.name = "series2";
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Line") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgxPolarLineSeriesComponent();
            series1.name = "series1";
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxPolarLineSeriesComponent();
            series2.name = "series2";
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Scatter") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgxPolarScatterSeriesComponent();
            series1.name = "series1";
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxPolarScatterSeriesComponent();
            series2.name = "series2";
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);
        }
    }

}

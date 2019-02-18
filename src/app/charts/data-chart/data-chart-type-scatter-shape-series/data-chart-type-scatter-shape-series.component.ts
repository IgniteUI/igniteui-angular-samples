import { Component, OnInit, ViewChild } from "@angular/core";

import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxScatterPolygonSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series-component";
import { IgxScatterPolylineSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series-component";
import { SampleShapeData } from "../SampleShapeData";

@Component({
  selector: "app-data-chart-type-scatter-shape-series",
  styleUrls: ["./data-chart-type-scatter-shape-series.component.scss"],
  templateUrl: "./data-chart-type-scatter-shape-series.component.html"
})
export class DataChartTypeScatterShapeSeriesComponent implements OnInit {

    @ViewChild("chart")
    public chart: IgxDataChartComponent;
    @ViewChild("xAxis")
    public xAxis: IgxNumericXAxisComponent;
    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    public data: any = SampleShapeData.create();

    constructor() { }

    public ngOnInit() {
        this.setSeries("Polygon");
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
         if (seriesType === "Polygon") {
            const series1 = new IgxScatterPolygonSeriesComponent();
            series1.name = "series1";
            series1.shapeMemberPath = "Points";
            series1.title = "House Floor Plan";
            series1.brush = "Gray";
            series1.outline = "Black";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;
            this.chart.series.clear();
            this.chart.series.add(series1);

        } else if (seriesType === "Polyline") {

            const series1 = new IgxScatterPolylineSeriesComponent();
            series1.name = "series1";
            series1.shapeMemberPath = "Points";
            series1.title = "House Outline";
            series1.brush = "Black";
            series1.outline = "Black";
            series1.xAxis = this.xAxis;
            series1.yAxis = this.yAxis;

            this.chart.series.clear();
            this.chart.series.add(series1);
        }
    }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";

// axis components
import { IgxCategoryAngleAxisComponent } from "igniteui-angular-charts/ES5/igx-category-angle-axis-component";
import { IgxNumericRadiusAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis-component";

// series components:
import { IgxRadialAreaSeriesComponent } from "igniteui-angular-charts/ES5/igx-radial-area-series-component";
import { IgxRadialColumnSeriesComponent } from "igniteui-angular-charts/ES5/igx-radial-column-series-component";
import { IgxRadialLineSeriesComponent } from "igniteui-angular-charts/ES5/igx-radial-line-series-component";
import { IgxRadialPieSeriesComponent } from "igniteui-angular-charts/ES5/igx-radial-pie-series-component";

import { SampleRadialData } from "../SampleRadialData";

@Component({
  selector: "app-data-chart-type-radial-series",
  styleUrls: ["./data-chart-type-radial-series.component.scss"],
  templateUrl: "./data-chart-type-radial-series.component.html"
})
export class DataChartTypeRadialSeriesComponent implements OnInit {

    @ViewChild("chart", {static: true})
    public chart: IgxDataChartComponent;
    @ViewChild("legend", {static: true})
    public legend: IgxLegendComponent;
    @ViewChild("angleAxis", {static: true})
    public angleAxis: IgxCategoryAngleAxisComponent;
    @ViewChild("radiusAxis", {static: true})
    public radiusAxis: IgxNumericRadiusAxisComponent;

    public data: any[];
    public seriesType: string;

    constructor() { }

    public ngOnInit() {
        this.seriesType = "Pie";
        this.data = SampleRadialData.create();
        this.setSeries("Pie");
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.seriesType = selectedSeries;
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
         if (seriesType === "Area") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgxRadialAreaSeriesComponent();
            series1.name = "series1";
            series1.valueMemberPath  = "Budget";
            series1.valueAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxRadialAreaSeriesComponent();
            series2.name = "series2";
            series2.valueMemberPath  = "Spending";
            series2.valueAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Pie") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgxRadialPieSeriesComponent();
            series1.name = "series1";
            series1.valueMemberPath  = "Budget";
            series1.valueAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxRadialPieSeriesComponent();
            series2.name = "series2";
            series2.valueMemberPath  = "Spending";
            series2.valueAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Line") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgxRadialLineSeriesComponent();
            series1.name = "series1";
            series1.valueMemberPath  = "Budget";
            series1.valueAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxRadialLineSeriesComponent();
            series2.name = "series2";
            series2.valueMemberPath  = "Spending";
            series2.valueAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Column") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgxRadialColumnSeriesComponent();
            series1.name = "series1";
            series1.valueMemberPath  = "Budget";
            series1.valueAxis = this.radiusAxis;
            series1.angleAxis = this.angleAxis;
            const series2 = new IgxRadialColumnSeriesComponent();
            series2.name = "series2";
            series2.valueMemberPath  = "Spending";
            series2.valueAxis = this.radiusAxis;
            series2.angleAxis = this.angleAxis;

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);
        }
    }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBubbleSeriesComponent  } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { SampleScatterStats } from "../SampleScatterStats";

@Component({
  selector: "app-data-chart-overview",
  styleUrls: ["./data-chart-overview.component.scss"],
  templateUrl: "./data-chart-overview.component.html"
})
export class DataChartOverviewComponent implements OnInit {

    @ViewChild("chart")
    public chart: IgxDataChartComponent;
    @ViewChild("legend")
    public legend: IgxLegendComponent;
    @ViewChild("xAxis")
    public xAxis: IgxNumericXAxisComponent;
    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    constructor() { }

    public ngOnInit() {
        const data1 = SampleScatterStats.getCountriesWithLargePop();
        const data2 = SampleScatterStats.getCountriesWithSmallPop();

        this.chart.series.clear();
        this.createSeries(data1, "Large Countries");
        this.createSeries(data2, "Small Countries");
    }

    public createSeries(data: any, title: string) {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const id = "series" + this.chart.series.count;

        const series1 = new IgxBubbleSeriesComponent();
        series1.name = id;
        series1.title = title;
        series1.markerType = MarkerType.Circle;
        series1.dataSource = data;
        series1.showDefaultTooltip = true;
        series1.xMemberPath = "population";
        series1.yMemberPath = "gdpTotal";
        series1.radiusMemberPath = "gdpPerCapita";
        series1.radiusScale = sizeScale;
        series1.xAxis = this.xAxis;
        series1.yAxis = this.yAxis;

        this.chart.series.add(series1);
    }
}

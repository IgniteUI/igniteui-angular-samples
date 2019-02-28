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
    providers: [ SampleScatterStats ],
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

    public data1: any;
    public data2: any;

    constructor(private dataService: SampleScatterStats) {
        this.data1 = SampleScatterStats.getCountriesWithLargePop();
        this.data1 = SampleScatterStats.getCountriesWithSmallPop();
    }

    public ngOnInit() {
        this.chart.series.clear();
        this.createSeries(this.data1, "Large Countries");
        this.createSeries(this.data2, "Small Countries");
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

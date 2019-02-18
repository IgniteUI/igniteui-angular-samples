import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";

import { SampleScatterStats } from "../SampleScatterStats";

@Component({
    selector: "app-data-chart-navigation",
    styleUrls: ["./data-chart-navigation.component.scss"],
    templateUrl: "./data-chart-navigation.component.html"
})
export class DataChartNavigationComponent implements OnInit {

    public data: any[];

    public isZoomEnabled: boolean = true;

    public defaultInteraction: string = "DragZoom";
    public panModifier: string = "None";
    public zoomModifier: string = "None";

    @ViewChild("xAxis")
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("chart")
    public chart: IgxDataChartComponent;

    constructor() {
        this.data = SampleScatterStats.getCountriesWithHighIncome();
    }

    public ngOnInit() {
        this.createSeries();
        this.chart.actualWindowScaleHorizontal = 0.6;
        this.chart.actualWindowScaleVertical = 0.6;
        this.chart.actualWindowPositionVertical = 0.2;
        this.chart.actualWindowPositionHorizontal = 0.2;
    }

    public onPanUpClick() {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick() {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanRightClick() {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onPanLeftClick() {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public createSeries() {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const series = new IgxBubbleSeriesComponent();
        series.title = "Countries";
        series.dataSource = SampleScatterStats.getCountries();
        series.showDefaultTooltip = true;
        series.xMemberPath = "population";
        series.yMemberPath = "gdpTotal";
        series.radiusMemberPath = "gdpPerCapita";
        series.radiusScale = sizeScale;
        series.xAxis = this.xAxis;
        series.yAxis = this.yAxis;

        this.chart.series.clear();
        this.chart.series.add(series);
    }
}

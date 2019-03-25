import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { SampleScatterData } from "../SampleScatterData";

import { IgxLinearContourValueResolverComponent
} from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxScatterContourSeriesComponent } from "igniteui-angular-charts/ES5/igx-scatter-contour-series-component";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts/ES5/igx-value-brush-scale-component";

@Component({
    selector: "app-data-chart-type-scatter-contour-series",
    styleUrls: ["./data-chart-type-scatter-contour-series.component.scss"],
    templateUrl: "./data-chart-type-scatter-contour-series.component.html"
})
export class DataChartTypeScatterContourSeriesComponent implements OnInit {

    public data: any[];

    public seriesThickness: number = 5;
    public seriesContours: number = 5;

    @ViewChild("chart")
    public chart: IgxDataChartComponent;

    @ViewChild("xAxis")
    public xAxis: IgxNumericXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    public brushScale: IgxValueBrushScaleComponent;

    constructor() {
        this.data = SampleScatterData.create();

        this.brushScale = new IgxValueBrushScaleComponent();
        this.brushScale.minimumValue = -2;
        this.brushScale.maximumValue = 2;
        this.brushScale.brushes = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
    }

    public onSeriesContoursChanged = (e: any) => {
        // const num: number = parseInt(e.target.value, 10);

        const series = this.chart.actualSeries[0] as IgxScatterContourSeriesComponent;
        if (series !== undefined) {
            const contours = new IgxLinearContourValueResolverComponent();
            contours.valueCount = this.seriesContours;
            series.valueResolver = contours;
        }
    }

    public ngOnInit() {

    }
}

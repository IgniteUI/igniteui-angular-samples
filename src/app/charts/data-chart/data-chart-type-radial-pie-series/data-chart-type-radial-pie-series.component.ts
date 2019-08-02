import { Component } from "@angular/core";
import { SampleRadialData } from "../SampleRadialData";

@Component({
    selector: "app-data-chart-type-radial-pie-series",
    templateUrl: "./data-chart-type-radial-pie-series.component.html",
    styleUrls: ["./data-chart-type-radial-pie-series.component.scss"]
})
export class DataChartTypeRadialPieSeriesComponent {
    public data: any[] = SampleRadialData.create();
    constructor() { }
}

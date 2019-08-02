import { Component } from "@angular/core";
import { SampleRadialData } from "../SampleRadialData";

@Component({
    selector: "app-data-chart-type-radial-line-series",
    templateUrl: "./data-chart-type-radial-line-series.component.html",
    styleUrls: ["./data-chart-type-radial-line-series.component.scss"]
})
export class DataChartTypeRadialLineSeriesComponent {

    public data: any[] = SampleRadialData.create();

    constructor() { }
}

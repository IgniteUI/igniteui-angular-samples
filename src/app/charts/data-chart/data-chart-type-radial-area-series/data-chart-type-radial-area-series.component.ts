import { Component } from "@angular/core";
import { SampleRadialData } from "../SampleRadialData";

@Component({
    selector: "app-data-chart-type-radial-area-series",
    templateUrl: "./data-chart-type-radial-area-series.component.html",
    styleUrls: ["./data-chart-type-radial-area-series.component.scss"]
})
export class DataChartTypeRadialAreaSeriesComponent {

    public data: any[] = SampleRadialData.create();

    constructor() {
    }
}

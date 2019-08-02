import { Component } from "@angular/core";
import { SampleRadialData } from "../SampleRadialData";

@Component({
    selector: "app-data-chart-type-radial-column-series",
    templateUrl: "./data-chart-type-radial-column-series.component.html",
    styleUrls: ["./data-chart-type-radial-column-series.component.scss"]
})
export class DataChartTypeRadialColumnSeriesComponent {

    public data: any[] = SampleRadialData.create();

    constructor() { }
}

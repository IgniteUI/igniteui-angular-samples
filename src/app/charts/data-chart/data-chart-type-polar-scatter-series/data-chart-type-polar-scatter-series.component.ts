import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";

@Component({
    selector: "app-data-chart-type-polar-scatter-series",
    templateUrl: "./data-chart-type-polar-scatter-series.component.html",
    styleUrls: ["./data-chart-type-polar-scatter-series.component.scss"]
})
export class DataChartTypePolarScatterSeriesComponent {

    public data: any[] = SamplePolarData.create();

    constructor() { }
}

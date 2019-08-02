import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";

@Component({
    selector: "app-data-chart-type-polar-line-series",
    templateUrl: "./data-chart-type-polar-line-series.component.html",
    styleUrls: ["./data-chart-type-polar-line-series.component.scss"]
})
export class DataChartTypePolarLineSeriesComponent {

    public data: any[] = SamplePolarData.create();

    constructor() { }

}

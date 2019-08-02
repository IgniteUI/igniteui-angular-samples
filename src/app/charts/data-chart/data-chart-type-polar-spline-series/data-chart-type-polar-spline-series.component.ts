import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";

@Component({
    selector: "app-data-chart-type-polar-spline-series",
    templateUrl: "./data-chart-type-polar-spline-series.component.html",
    styleUrls: ["./data-chart-type-polar-spline-series.component.scss"]
})
export class DataChartTypePolarSplineSeriesComponent {

    public data: any[] = SamplePolarData.create();
    constructor() { }
}

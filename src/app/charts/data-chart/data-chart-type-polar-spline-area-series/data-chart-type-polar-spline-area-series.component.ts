import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";

@Component({
    selector: "app-data-chart-type-polar-spline-area-series",
    templateUrl: "./data-chart-type-polar-spline-area-series.component.html",
    styleUrls: ["./data-chart-type-polar-spline-area-series.component.scss"]
})
export class DataChartTypePolarSplineAreaSeriesComponent {

    public data: any[] = SamplePolarData.create();

    constructor() { }
}

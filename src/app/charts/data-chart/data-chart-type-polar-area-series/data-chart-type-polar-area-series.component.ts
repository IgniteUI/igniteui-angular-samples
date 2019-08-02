import { Component } from "@angular/core";
import { SamplePolarData } from "../SamplePolarData";

@Component({
  selector: "app-data-chart-type-polar-area-series",
  templateUrl: "./data-chart-type-polar-area-series.component.html",
  styleUrls: ["./data-chart-type-polar-area-series.component.scss"]
})
export class DataChartTypePolarAreaSeriesComponent {

    public data: any[] = SamplePolarData.create();

    constructor() { }
}

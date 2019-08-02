import { Component } from "@angular/core";
import { SampleRangeData } from "../SampleRangeData";

@Component({
    selector: "app-data-chart-type-range-column-series",
    templateUrl: "./data-chart-type-range-column-series.component.html",
    styleUrls: ["./data-chart-type-range-column-series.component.scss"]
})
export class DataChartTypeRangeColumnSeriesComponent {

    public data: any[] = SampleRangeData.create();

    constructor() {
    }
}

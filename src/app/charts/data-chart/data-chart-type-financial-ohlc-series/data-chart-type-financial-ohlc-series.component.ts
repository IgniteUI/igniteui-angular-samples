import { Component } from "@angular/core";
import { SampleFinancialData } from "../SampleFinancialData";

@Component({
    selector: "app-data-chart-type-financial-ohlc-series",
    templateUrl: "./data-chart-type-financial-ohlc-series.component.html",
    styleUrls: ["./data-chart-type-financial-ohlc-series.component.scss"]
})
export class DataChartTypeFinancialOhlcSeriesComponent {

    public data: any = SampleFinancialData.create();
    public displayTypeIndicator: string = "Line";

    constructor() { }
}

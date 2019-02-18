import { Component, OnInit } from "@angular/core";

import { SampleFinancialData } from "../SampleFinancialData";

@Component({
    selector: "app-data-chart-type-financial-series",
    styleUrls: ["./data-chart-type-financial-series.component.scss"],
    templateUrl: "./data-chart-type-financial-series.component.html"
})
export class DataChartTypeFinancialSeriesComponent implements OnInit {

    public data: any = SampleFinancialData.create();
    public displayTypeSeries: string = "Candlestick";
    public displayTypeIndicator: string = "Line";

    constructor() { }

    public ngOnInit() {
    }
}

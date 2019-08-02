import { Component } from "@angular/core";

@Component({
  selector: "app-data-chart-type-category-step-area-series",
  templateUrl: "./data-chart-type-category-step-area-series.component.html",
  styleUrls: ["./data-chart-type-category-step-area-series.component.scss"]
})
export class DataChartTypeCategoryStepAreaSeriesComponent {

    public data = [

        {Year: "1996", USA: 148, CHN: 110, RUS: 95},
        {Year: "2000", USA: 142, CHN: 115, RUS: 91},
        {Year: "2004", USA: 134, CHN: 121, RUS: 86},
        {Year: "2008", USA: 131, CHN: 129, RUS: 65},
        {Year: "2012", USA: 135, CHN: 115, RUS: 77},
        {Year: "2016", USA: 146, CHN: 112, RUS: 88}
    ];

    constructor() { }

}

import { Component } from "@angular/core";

@Component({
  selector: "app-data-chart-type-stacked-line-series",
  templateUrl: "./data-chart-type-stacked-line-series.component.html",
  styleUrls: ["./data-chart-type-stacked-line-series.component.scss"]
})
export class DataChartTypeStackedLineSeriesComponent {
    public data: any[];

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }

}

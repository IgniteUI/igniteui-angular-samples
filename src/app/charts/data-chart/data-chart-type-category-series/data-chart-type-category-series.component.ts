import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-chart-type-category-series",
  styleUrls: ["./data-chart-type-category-series.component.scss"],
  templateUrl: "./data-chart-type-category-series.component.html"
})
export class DataChartTypeCategorySeriesComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }
  public data = [
    { label: "Africa", value1: 200, value2: 150 },
{ label: "Brazil", value1: 500, value2: 500 },
{ label: "Canada", value1: 300, value2: 300 },
{ label: "Denmark", value1: 600, value2: 600 },
{ label: "England", value1: 1000, value2: 1000 },
{ label: "France", value1: 200, value2: 50 }
  ]
}

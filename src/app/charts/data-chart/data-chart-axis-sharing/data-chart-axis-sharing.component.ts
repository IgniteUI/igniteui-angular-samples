import { Component, OnInit } from "@angular/core";
import { SampleFinancialData } from "../SampleFinancialData";

@Component({
  selector: "app-data-chart-axis-sharing",
  styleUrls: ["./data-chart-axis-sharing.component.scss"],
  templateUrl: "./data-chart-axis-sharing.component.html"
})
export class DataChartAxisSharingComponent implements OnInit {

    public data: any[] = SampleFinancialData.create();
    constructor() { }

    public ngOnInit() {
    }

}

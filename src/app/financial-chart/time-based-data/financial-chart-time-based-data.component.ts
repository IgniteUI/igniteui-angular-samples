import { Component, OnInit } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
  selector: "app-financial-chart-time-based-data",
  styleUrls: ["./financial-chart-time-based-data.component.scss"],
  templateUrl: "./financial-chart-time-based-data.component.html"
})
export class FinancialChartTimeBasedDataComponent {

    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn()];
    }
}

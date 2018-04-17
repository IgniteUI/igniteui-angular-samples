import { Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-overview-sample",
    styleUrls: ["./financial-chart-overview-sample.component.scss"],
    templateUrl: "./financial-chart-overview-sample.component.html"
})
export class FinancialChartOverviewComponent {

    public data: any;

    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getThree();
    }
}

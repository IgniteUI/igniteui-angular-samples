import { Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

@Component({
    providers: [ GenerateOhlcPricesService ],
    selector: "app-financial-chart-overview-sample",
    styleUrls: ["./financial-chart-overview-sample.component.scss"],
    templateUrl: "./financial-chart-overview-sample.component.html"
})
export class FinancialChartOverviewComponent {

    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        this.dataService.daysInterval = 60;

        const dateStart = new Date(2000, 1, 1);
        const dateStop = new Date(2025, 11, 1);
        const stock1 = this.dataService.GetStockHistoryBetween(dateStart, dateStop);
        const stock2 = this.dataService.GetStockHistoryBetween(dateStart, dateStop);
        stock1.title = "General Motors (GM)";
        stock2.title = "General Electric (GE)";
        this.data = [ stock1, stock2 ];
    }
}

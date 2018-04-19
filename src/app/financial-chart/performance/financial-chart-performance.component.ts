import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ GenerateOhlcPricesService ],
    selector:  "app-financial-chart-performance",
    styleUrls: [ "./financial-chart-performance.component.scss"],
    templateUrl: "./financial-chart-performance.component.html"
})
export class FinancialChartPerformanceComponent {

    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}

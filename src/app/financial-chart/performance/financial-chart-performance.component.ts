import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockDataService } from "../services/stock-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector:  "app-financial-chart-performance",
    styleUrls: [ "./financial-chart-performance.component.scss"],
    templateUrl: "./financial-chart-performance.component.html"
})
export class FinancialChartPerformanceComponent {

    public data: any;

    constructor(private dataService: StockDataService) {
        this.data = [ this.dataService.GetStockTSLA() ];
    }
}

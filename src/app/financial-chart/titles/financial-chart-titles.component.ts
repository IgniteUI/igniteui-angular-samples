import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockDataService } from "../services/stock-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector:  "app-financial-chart-titles",
    styleUrls: [ "./financial-chart-titles.component.scss"],
    templateUrl: "./financial-chart-titles.component.html"
})
export class FinancialChartTitlesComponent {

    public data: any;

    constructor(private dataService: StockDataService) {
        this.data = this.dataService.GetStockTSLA();
    }
}

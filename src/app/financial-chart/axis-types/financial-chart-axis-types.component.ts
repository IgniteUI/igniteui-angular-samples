import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ GenerateOhlcPricesService ],
    selector: "app-financial-chart-axis-types",
    styleUrls: ["./financial-chart-axis-types.component.scss"],
    templateUrl: "./financial-chart-axis-types.component.html"
})
export class FinancialChartAxisTypesComponent {

    public xAxisMode: string = "Ordinal";
    public yAxisMode: string = "Numeric";
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateStart = new Date(2017, 1, 1);
        const dateStop = new Date(2018, 4, 1);
        const stock1 = this.dataService.GetStockHistoryBetween(dateStart, dateStop);
        const stock2 = this.dataService.GetStockHistoryBetween(dateStart, dateStop);
        stock1.title = "General Motors (GM)";
        stock2.title = "General Electric (GE)";
        this.data = [ stock1, stock2 ];
    }
}

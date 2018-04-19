import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GenerateHourlyPricesService } from "../services/generate-hourly-prices.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ GenerateHourlyPricesService ],
    selector:  "app-financial-chart-high-volume",
    styleUrls: [ "./financial-chart-high-volume.component.scss"],
    templateUrl: "./financial-chart-high-volume.component.html"
})
export class FinancialChartHighVolumeComponent {

    public data: any;

    constructor(private dataService: GenerateHourlyPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}

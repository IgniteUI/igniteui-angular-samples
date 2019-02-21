import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-trendlines",
    styleUrls: ["./financial-chart-trendlines.component.scss"],
    templateUrl: "./financial-chart-trendlines.component.html"
})
export class FinancialChartTrendlinesComponent {

    public data: any;

    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
    }
}

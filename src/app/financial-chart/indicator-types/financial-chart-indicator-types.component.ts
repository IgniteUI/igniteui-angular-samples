import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-indicator-types",
    styleUrls: ["./financial-chart-indicator-types.component.scss"],
    templateUrl: "./financial-chart-indicator-types.component.html"
})
export class FinancialChartIndicatorTypesComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getAmzn();
    }
}

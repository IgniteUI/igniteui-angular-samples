import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-multiple-data",
    styleUrls: ["./financial-chart-multiple-data.component.scss"],
    templateUrl: "./financial-chart-multiple-data.component.html"
})
export class FinancialChartMultipleDataComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
    }
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-axis-types",
    styleUrls: ["./financial-chart-axis-types.component.scss"],
    templateUrl: "./financial-chart-axis-types.component.html"
})
export class FinancialChartAxisTypesComponent {

    public xAxisMode: string = "Ordinal";
    public yAxisMode: string = "Numeric";
    public data: any;

    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
    }
}

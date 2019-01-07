import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-tooltip-template",
    styleUrls: ["./financial-chart-tooltip-template.component.scss"],
    templateUrl: "./financial-chart-tooltip-template.component.html"
})
export class FinancialChartTooltipTemplateComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getTsla();
    }
}

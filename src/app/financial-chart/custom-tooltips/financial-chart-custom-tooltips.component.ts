import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-custom-tooltips",
    styleUrls: ["./financial-chart-custom-tooltips.component.scss"],
    templateUrl: "./financial-chart-custom-tooltips.component.html"
})
export class FinancialChartCustomTooltipsComponent {
    public data: any;
    public hello: string;
    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getGoog();
        this.hello = "YO";
    }
}

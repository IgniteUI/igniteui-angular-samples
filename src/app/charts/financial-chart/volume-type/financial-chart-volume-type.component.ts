import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-volume-type",
    styleUrls: ["./financial-chart-volume-type.component.scss"],
    templateUrl: "./financial-chart-volume-type.component.html"
})
export class FinancialChartVolumeTypeComponent {
    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getAmzn();
    }
}

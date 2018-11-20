import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-tooltip-types",
    styleUrls: ["./financial-chart-tooltip-types.component.scss"],
    templateUrl: "./financial-chart-tooltip-types.component.html"
})
export class FinancialChartTooltipTypesComponent {

    public financialData: any;
    public sampleOptions: SampleOptions = new SampleOptions();

    constructor(private dataService: FinancialDataService) {
        this.financialData = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
    }
}

class SampleOptions {
    public tooltipType: string = "Category";
}

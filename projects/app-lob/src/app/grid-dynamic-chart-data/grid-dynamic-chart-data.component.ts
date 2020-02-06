import { Component,  ViewChild } from "@angular/core";
import { FinancialData } from "../services/financialData";
import { ChartIntegrationDirective } from "./directives/chart-integration/chart-integration.directive";
import { ConditionalFormattingDirective } from "./directives/conditional-formatting/conditional-formatting.directive";

@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"]
})
export class GridDynamicChartDataComponent {

    @ViewChild(ConditionalFormattingDirective, { read: ConditionalFormattingDirective, static: true })
    public formatting: ConditionalFormattingDirective;
    @ViewChild(ChartIntegrationDirective, {read: ChartIntegrationDirective, static: true})
    public chartIntegration: ChartIntegrationDirective;
    public data;

    public ngOnInit() {
        this.data = new FinancialData().generateData(1000);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

}

import { Component } from "@angular/core";
import { FinancialData } from "../services/financialData";
@Component({
    selector: "app-grid-dynamic-chart-data",
    templateUrl: "./grid-dynamic-chart-data.component.html",
    styleUrls: ["./grid-dynamic-chart-data.component.scss"]
})
export class GridDynamicChartDataComponent {
    public data;

    public ngOnInit() {
        this.data = new FinancialData().generateData(1000);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }
}

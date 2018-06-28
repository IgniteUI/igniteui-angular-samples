import { Component } from "@angular/core";
import { DATA } from "../grid-sample-selection/financialData";

@Component({
    selector: "app-grid-moving-sample",
    styleUrls: ["./grid-moving-sample.component.scss"],
    templateUrl: "./grid-moving-sample.component.html"
})
export class GridMovingSampleComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public pin(column) {
        if (!column.pinned) {
            column.pin();
        }
    }
}

import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-data-chart-type-value-overlay",
    styleUrls: ["./data-chart-type-value-overlay.component.scss"],
    templateUrl: "./data-chart-type-value-overlay.component.html"
})
export class DataChartTypeValueOverlayComponent {

    public data: any[];

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = [
            { Label: 1, Value: 1.0 },
            { Label: 2, Value: 2.0 },
            { Label: 3, Value: 6.0 },
            { Label: 4, Value: 8.0 },
            { Label: 5, Value: 2.0 },
            { Label: 6, Value: 6.0 },
            { Label: 7, Value: 4.0 },
            { Label: 8, Value: 2.0 },
            { Label: 9, Value: 1.0 }
        ];
    }
}

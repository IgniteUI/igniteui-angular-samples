import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-pie-chart-legend",
    styleUrls: ["./pie-chart-legend.component.scss"],
    templateUrl: "./pie-chart-legend.component.html"
})
export class PieChartLegendComponent {

    public data: any;

    constructor() {
        this.data = [
            { Label: "Administration", Value: 2 },
            { Label: "Sales", Value: 8 },
            { Label: "IT", Value: 3 },
            { Label: "Marketing", Value: 8 },
            { Label: "Development", Value: 4 },
            { Label: "Customer Support", Value: 6 }
        ];
    }

    public pieSliceClickEvent(e: any): void {
    }
}

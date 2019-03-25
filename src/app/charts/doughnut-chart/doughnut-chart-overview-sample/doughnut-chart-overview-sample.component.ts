import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-doughnut-chart-overview-sample",
    styleUrls: ["./doughnut-chart-overview-sample.component.scss"],
    templateUrl: "./doughnut-chart-overview-sample.component.html"
})
export class DoughnutChartOverviewSampleComponent {

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
}

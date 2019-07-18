import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart-overview",
  styleUrls: ["./pie-chart-overview.component.scss"],
  templateUrl: "./pie-chart-overview.component.html"
})
export class PieChartDataSampleComponent {

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

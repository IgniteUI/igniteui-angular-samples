import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart-selection",
  styleUrls: ["./pie-chart-selection.component.scss"],
  templateUrl: "./pie-chart-selection.component.html"
})
export class PieChartSelectionComponent {

    public selectionType: string;
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

        this.selectionType = "Single";
      }

}

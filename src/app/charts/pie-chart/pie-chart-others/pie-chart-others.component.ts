import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie-chart-others",
  styleUrls: ["./pie-chart-others.component.scss"],
  templateUrl: "./pie-chart-others.component.html"
})
export class PieChartOthersComponent {

    public data: any;

    constructor() {
        this.data = [
            { Label: "IBM", Value: 7 },
            { Label: "SONY", Value: 5 },
            { Label: "DELL", Value: 3 },
            { Label: "Apple", Value: 4 },
            { Label: "Hitachi", Value: 1 },
            { Label: "Acer", Value: 1 },
            { Label: "HP", Value: 2 },
            { Label: "Asus", Value: 2 },
            { Label: "Gateway", Value: 1 }
        ];
      }
}

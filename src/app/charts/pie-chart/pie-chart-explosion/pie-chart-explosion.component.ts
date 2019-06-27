import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxPieChartComponent } from "igniteui-angular-charts/ES5/igx-pie-chart-component";

@Component({
  selector: "app-pie-chart-explosion",
  styleUrls: ["./pie-chart-explosion.component.scss"],
  templateUrl: "./pie-chart-explosion.component.html"
})
export class PieChartExplosionComponent implements AfterViewInit {

    public data: any;

    @ViewChild("chart", { static: true })
    public chart: IgxPieChartComponent;

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
        e.args.isExploded = !e.args.isExploded;
    }

    public ngAfterViewInit(): void {
        this.chart.explodedSlices.add(3);
    }
}

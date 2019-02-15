import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";

@Component({
  selector: "app-data-chart-navigation",
  styleUrls: ["./data-chart-navigation.component.scss"],
  templateUrl: "./data-chart-navigation.component.html"
})
export class DataChartNavigationComponent {

    public data: any[];

    public isHorizontalZoomEnabled: boolean = false;
    public isVerticalZoomEnabled: boolean = false;

    public defaultInteraction: string = "None";
    public panModifier: string = "None";
    public zoomModifier: string = "None";

    @ViewChild("xAxis")
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("chart")
    public chart: IgxDataChartComponent;

    constructor() {
      this.initData();
    }

    public initData() {
      this.data = [
        { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
        { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
        { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
        { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
        { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
        { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
      ];
    }

    public onPanUpClick() {
      this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick() {
      this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanRightClick() {
      this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onPanLeftClick() {
      this.chart.actualWindowPositionHorizontal -= 0.05;
    }
}

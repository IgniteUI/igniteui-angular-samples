import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { SharedData } from "../SharedData";

@Component({
  selector: "app-data-chart-legends",
  styleUrls: ["./data-chart-legends.component.scss"],
  templateUrl: "./data-chart-legends.component.html"
})
export class DataChartLegendsComponent {
    public data: any[];

    @ViewChild("xAxis", { static: true })
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis", { static: true })
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;

    constructor() {
      this.initData();
    }

    public initData() {
        this.data = SharedData.getEnergyProduction();
    }
}

import { Component, ViewChild } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { SharedData } from "../SharedData";

@Component({
    selector: "app-data-chart-axis-settings",
    styleUrls: ["./data-chart-axis-settings.component.scss"],
    templateUrl: "./data-chart-axis-settings.component.html"
})
export class DataChartAxisSettingsComponent {

    public data: any[];

    @ViewChild("xAxis")
    public xAxis: IgxCategoryXAxisComponent;

    @ViewChild("yAxis")
    public yAxis: IgxNumericYAxisComponent;

    @ViewChild("legend")
    public legend: IgxLegendComponent;

    constructor() {
        this.initData();
    }

    public initData() {
        this.data = SharedData.getEnergyProduction();
    }
}

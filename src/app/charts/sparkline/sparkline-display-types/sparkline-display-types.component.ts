import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts/ES5/igx-sparkline-component";
import { SparklineDisplayType } from "igniteui-angular-charts/ES5/SparklineDisplayType";

import { SharedData } from "../SharedData";

@Component({
    selector: "app-sparkline-display-types",
    styleUrls: ["./sparkline-display-types.component.scss"],
    templateUrl: "./sparkline-display-types.component.html"
})
export class SparklineDisplayTypesComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onDisplayTypeChanged(e: any) {
        const selection = e.target.value.toString();

        switch (selection) {
            case "Area": {
                this.sparkline.displayType = SparklineDisplayType.Area;
                break;
            }
            case "Column": {
                this.sparkline.displayType = SparklineDisplayType.Column;
                break;
            }
            case "Line": {
                this.sparkline.displayType = SparklineDisplayType.Line;
                break;
            }
            case "WinLoss": {
                this.sparkline.displayType = SparklineDisplayType.WinLoss;
                break;
            }
        }
    }
}

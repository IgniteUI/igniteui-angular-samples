import { Component, ViewChild } from "@angular/core";
import { IgxSparklineComponent } from "igniteui-angular-charts/ES5/igx-sparkline-component";

import { SharedData } from "../SharedData";

@Component({
    selector: "app-sparkline-trendlines",
    styleUrls: ["./sparkline-trendlines.component.scss"],
    templateUrl: "./sparkline-trendlines.component.html"
})
export class SparklineTrendlinesComponent {

    public data: any[];

    @ViewChild("sparkline", { static: true })
    public sparkline: IgxSparklineComponent;

    constructor() {
        this.data = SharedData.getSharedData();
    }

    public onTrendlineChanged(e: any) {
        const selection = e.target.value.toString();
        this.sparkline.trendLineType = selection;
    }
}

import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-ranges",
  styleUrls: [ "./linear-gauge-ranges.component.scss"],
  templateUrl: "./linear-gauge-ranges.component.html"
})

export class LinearGaugeRangesComponent implements AfterViewInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;

    public ngAfterViewInit(): void {

        this.linearGauge.scaleBrush = "#dddddd";
        this.linearGauge.scaleOutline = "#dbdbdb";
        this.linearGauge.backingBrush = "#f7f7f7";
        this.linearGauge.backingOutline = "#bfbfbf";
        this.linearGauge.backingStrokeThickness = 2;
        this.linearGauge.tickStrokeThickness = 1.5;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;
        this.linearGauge.minorTickEndExtent = 0.05;
        this.linearGauge.minorTickStartExtent = 0.20;
        this.linearGauge.labelExtent = 0.05;

    }

}

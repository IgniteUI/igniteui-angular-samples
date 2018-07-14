import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-scale",
  styleUrls: [ "./linear-gauge-scale.component.scss"],
  templateUrl: "./linear-gauge-scale.component.html"
})

export class LinearGaugeScaleComponent implements AfterViewInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;

    public ngAfterViewInit(): void {

        this.linearGauge.isScaleInverted = false;
        this.linearGauge.scaleBrush = "DodgerBlue";
        this.linearGauge.scaleOutline = "DarkViolet";
        this.linearGauge.scaleStrokeThickness = 1;
        this.linearGauge.scaleInnerExtent = 0.05;
        this.linearGauge.scaleOuterExtent = 0.65;
        this.linearGauge.scaleStartExtent = 0.05;
        this.linearGauge.scaleEndExtent = 0.95;

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

import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";
import { LinearGraphNeedleShape } from "igniteui-angular-gauges/ES5/LinearGraphNeedleShape";

@Component({
  selector: "app-linear-gauge-needle",
  styleUrls: [ "./linear-gauge-needle.component.scss"],
  templateUrl: "./linear-gauge-needle.component.html"
})

export class LinearGaugeNeedleComponent implements AfterViewInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // setting custom appearance of needle
        this.linearGauge.isNeedleDraggingEnabled = true;
        this.linearGauge.needleShape = LinearGraphNeedleShape.Custom;
        this.linearGauge.needleBrush = "DodgerBlue";
        this.linearGauge.needleOutline = "DodgerBlue";
        this.linearGauge.needleStrokeThickness = 1;
        this.linearGauge.needleBreadth = 15;
        this.linearGauge.needleInnerExtent = 0.35;
        this.linearGauge.needleOuterExtent = 0.65;
        this.linearGauge.needleOuterPointExtent = 0.8;
        this.linearGauge.needleInnerPointExtent = 0.325;
        this.linearGauge.needleInnerPointWidth = 0;
        this.linearGauge.needleOuterPointWidth = 0.3;
        this.linearGauge.needleInnerBaseWidth = 0;
        this.linearGauge.needleOuterBaseWidth = 0.07;

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

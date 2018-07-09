import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";
import { IgxLinearGraphRangeComponent } from "igniteui-angular-gauges/ES5/igx-linear-graph-range-component";
import { LinearGraphNeedleShape } from "igniteui-angular-gauges/ES5/LinearGraphNeedleShape";

@Component({
  selector: "app-linear-gauge-sample",
  styleUrls: ["./linear-gauge-sample.component.scss"],
  templateUrl: "./linear-gauge-sample.component.html"
})

export class LinearGaugeSampleComponent implements AfterViewInit, OnInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;
    public wasAnimated: boolean = true;

    constructor() { }

    public ngOnInit(): void { }

    public ngAfterViewInit(): void {

        // note this type script code is for demonstration purpose and
        // it is setting the same properties as in html

        // setting values of gauge
        this.linearGauge.minimumValue = 0;
        this.linearGauge.maximumValue = 120;
        this.linearGauge.value = 65;
        this.linearGauge.interval = 10;

        // setting appearance of labels
        this.linearGauge.labelInterval = 10;
        this.linearGauge.labelExtent = 0.05;

        // setting appearance of needle
        this.linearGauge.isNeedleDraggingEnabled = true;
        this.linearGauge.needleShape = LinearGraphNeedleShape.Custom;
        this.linearGauge.needleBrush = "#4286f4";
        this.linearGauge.needleOutline = "#4286f4";
        this.linearGauge.needleBreadth = 20;
        this.linearGauge.needleInnerExtent = 0.3;
        this.linearGauge.needleOuterExtent = 0.7;
        this.linearGauge.needleOuterPointExtent = 0.8;
        this.linearGauge.needleInnerPointExtent = 0.25;
        this.linearGauge.needleInnerPointWidth = 0;
        this.linearGauge.needleOuterPointWidth = 0.3;
        this.linearGauge.needleInnerBaseWidth = 0;
        this.linearGauge.needleOuterBaseWidth = 0.07;

        // setting appearance of major/minor ticks
        this.linearGauge.minorTickCount = 5;
        this.linearGauge.minorTickEndExtent = 0.075;
        this.linearGauge.minorTickStartExtent = 0.2;
        this.linearGauge.minorTickStrokeThickness = 1;
        this.linearGauge.tickStartExtent = 0.3;
        this.linearGauge.tickEndExtent = 0.075;
        this.linearGauge.tickStrokeThickness = 1.5;

        // setting start/end of gauge ranges
        const range1 = new IgxLinearGraphRangeComponent();
        range1.startValue = 20;
        range1.endValue = 50;
        const range2 = new IgxLinearGraphRangeComponent();
        range2.startValue = 50;
        range2.endValue = 80;
        const range3 = new IgxLinearGraphRangeComponent();
        range3.startValue = 80;
        range3.endValue = 120;

        this.linearGauge.rangeBrushes  = [ "#fffb2d", "#f4c51e", "#f44c1e"];
        this.linearGauge.rangeOutlines = [ "gray", "gray", "gray"];
        this.linearGauge.ranges.clear();
        this.linearGauge.ranges.add(range1);
        this.linearGauge.ranges.add(range2);
        this.linearGauge.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < 3; i++) {
            const range = this.linearGauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.85;
            range.outerEndExtent = 0.85;
        }

        // setting extent of gauge scale
        this.linearGauge.scaleStrokeThickness = 1;
        this.linearGauge.scaleBrush = "#dbdbdb";
        this.linearGauge.scaleOutline = "#d3d3d3";
        this.linearGauge.scaleInnerExtent = 0.075;
        this.linearGauge.scaleOuterExtent = 0.85;
        this.linearGauge.scaleStartExtent = 0.05;
        this.linearGauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.linearGauge.backingBrush = "#f7f7f7";
        this.linearGauge.backingOutline = "#d1d1d1";
        this.linearGauge.backingStrokeThickness = 10;

        // enabling animation of the gauge
        this.linearGauge.transitionDuration = 500;
    }
    public onClick(ev: Event): void {

        if (this.wasAnimated) {
            this.wasAnimated = false;
            this.linearGauge.transitionDuration = 0;
            this.linearGauge.isScaleInverted = false;
            this.linearGauge.transitionDuration = 500;
            this.linearGauge.isScaleInverted = true;
        } else {
            this.wasAnimated = true;
            this.linearGauge.transitionDuration = 0;
            this.linearGauge.isScaleInverted = true;
            this.linearGauge.transitionDuration = 500;
            this.linearGauge.isScaleInverted = false;
        }
    }
}

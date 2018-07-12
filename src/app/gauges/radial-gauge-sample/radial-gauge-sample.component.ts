import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { SweepDirection } from "igniteui-angular-core/ES5/SweepDirection";
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeRangeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-range-component";
import { RadialGaugeNeedleShape } from "igniteui-angular-gauges/ES5/RadialGaugeNeedleShape";
import { RadialGaugePivotShape } from "igniteui-angular-gauges/ES5/RadialGaugePivotShape";
import { RadialGaugeScaleOversweepShape } from "igniteui-angular-gauges/ES5/RadialGaugeScaleOversweepShape";

@Component({
  selector: "app-radial-gauge-sample",
  styleUrls: ["./radial-gauge-sample.component.scss"],
  templateUrl: "./radial-gauge-sample.component.html"
})
export class RadialGaugeSampleComponent implements AfterViewInit, OnInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;
    public wasAnimated: boolean = true;

    constructor() { }

    public ngOnInit(): void { }

    public ngAfterViewInit(): void {

        // note this type script code is for demonstration purpose and
        // it is setting the same properties as in html

        // setting values of gauge
        this.radialGauge.minimumValue = 0;
        this.radialGauge.maximumValue = 50;
        this.radialGauge.value = 25;
        this.radialGauge.interval = 5;

        // setting appearance of labels
        this.radialGauge.labelInterval = 5;
        this.radialGauge.labelExtent = 0.71;

        // setting appearance of needle
        this.radialGauge.isNeedleDraggingEnabled = true;
        this.radialGauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.radialGauge.needleEndWidthRatio = 0.03;
        this.radialGauge.needleStartWidthRatio = 0.05;
        this.radialGauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.radialGauge.needlePivotWidthRatio = 0.15;
        this.radialGauge.needleBaseFeatureWidthRatio = 0.15;
        this.radialGauge.needleBrush = "#79797a";
        this.radialGauge.needleOutline = "#79797a";
        this.radialGauge.needlePivotBrush = "#79797a";
        this.radialGauge.needlePivotOutline = "#79797a";

        // setting appearance of major/minor ticks
        this.radialGauge.minorTickCount = 5;
        this.radialGauge.minorTickStartExtent = 0.65;
        this.radialGauge.minorTickStrokeThickness = 1;
        this.radialGauge.tickStartExtent = 0.6;
        this.radialGauge.tickEndExtent = 0.65;
        this.radialGauge.tickStrokeThickness = 1.75;

        // setting start/end of gauge ranges
        const range1 = new IgxRadialGaugeRangeComponent();
        range1.startValue = 5;
        range1.endValue = 15;
        const range2 = new IgxRadialGaugeRangeComponent();
        range2.startValue = 15;
        range2.endValue = 35;
        const range3 = new IgxRadialGaugeRangeComponent();
        range3.startValue = 35;
        range3.endValue = 45;

        this.radialGauge.rangeBrushes  = [ "#F86232", "#DC3F76", "#7446B9"];
        this.radialGauge.rangeOutlines = [ "#F86232", "#DC3F76", "#7446B9"];
        this.radialGauge.ranges.clear();
        this.radialGauge.ranges.add(range1);
        this.radialGauge.ranges.add(range2);
        this.radialGauge.ranges.add(range3);

        // setting extent of all gauge ranges
        for (let i = 0; i < 3; i++) {
            const range = this.radialGauge.ranges.item(i);
            range.innerStartExtent = 0.5;
            range.innerEndExtent = 0.5;
            range.outerStartExtent = 0.57;
            range.outerEndExtent = 0.57;
        }

        // setting extent of gauge scale
        this.radialGauge.scaleStartAngle = 120;
        this.radialGauge.scaleEndAngle = 60;
        this.radialGauge.scaleBrush = "#d6d6d6";
        this.radialGauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;

        // setting appearance of backing dial
        this.radialGauge.backingBrush = "#fcfcfc";
        this.radialGauge.backingOutline = "#d6d6d6";
        this.radialGauge.backingStrokeThickness = 5;

        // enabling animation duration (in milliseconds) of the gauge
        this.radialGauge.transitionDuration = 500;

    }
    public onClick(ev: Event): void {

        if (this.wasAnimated) {
            this.wasAnimated = false;
            this.radialGauge.transitionDuration = 0;
            this.radialGauge.scaleStartAngle = 120;
            this.radialGauge.scaleEndAngle = 60;
            this.radialGauge.transitionDuration = 500;
            this.radialGauge.scaleStartAngle = 300;
            this.radialGauge.scaleEndAngle = 240;
        } else {
            this.wasAnimated = true;
            this.radialGauge.transitionDuration = 0;
            this.radialGauge.scaleStartAngle = 300;
            this.radialGauge.scaleEndAngle = 240;
            this.radialGauge.transitionDuration = 500;
            this.radialGauge.scaleStartAngle = 120;
            this.radialGauge.scaleEndAngle = 60;
        }
    }

}

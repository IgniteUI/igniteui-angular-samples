import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { SweepDirection } from "igniteui-angular-core/ES5/SweepDirection";
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";
import { RadialGaugeScaleOversweepShape } from "igniteui-angular-gauges/ES5/RadialGaugeScaleOversweepShape";

@Component({
  selector: "app-radial-gauge-scale",
  styleUrls: [ "./radial-gauge-scale.component.scss"],
  templateUrl: "./radial-gauge-scale.component.html"
})
export class RadialGaugeScaleComponent implements AfterViewInit, OnInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    constructor() { }

    public ngOnInit(): void { }

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // Scale Settings
        this.radialGauge.scaleStartAngle = 135;
        this.radialGauge.scaleEndAngle = 45;
        this.radialGauge.scaleBrush = "DodgerBlue";
        this.radialGauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.radialGauge.scaleOversweep = 1;
        this.radialGauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        this.radialGauge.scaleStartExtent = 0.45;
        this.radialGauge.scaleEndExtent = 0.575;

        this.radialGauge.tickStrokeThickness = 1.5;
    }

}

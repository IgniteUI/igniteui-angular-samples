import { AfterViewInit, Component, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";
import { RadialGaugeBackingShape } from "igniteui-angular-gauges/ES5/RadialGaugeBackingShape";

@Component({
  selector: "app-radial-gauge-backing",
  styleUrls: [ "./radial-gauge-backing.component.scss"],
  templateUrl: "./radial-gauge-backing.component.html"
})
export class RadialGaugeBackingComponent implements AfterViewInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // Backing Settings
        this.radialGauge.backingShape = RadialGaugeBackingShape.Fitted;
        this.radialGauge.backingBrush = "#fcfcfc";
        this.radialGauge.backingOutline = "DodgerBlue";
        this.radialGauge.backingOversweep = 5;
        this.radialGauge.backingCornerRadius = 10;
        this.radialGauge.backingStrokeThickness = 5;
        this.radialGauge.backingOuterExtent = 0.8;
        this.radialGauge.backingInnerExtent = 0.15;

        // Scale Settings
        this.radialGauge.scaleStartAngle = 135;
        this.radialGauge.scaleEndAngle = 45;
        this.radialGauge.scaleBrush = "#dddddd";

        this.radialGauge.tickStrokeThickness = 1.5;
    }

}

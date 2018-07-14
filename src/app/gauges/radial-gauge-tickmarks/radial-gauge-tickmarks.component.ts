import { AfterViewInit, Component, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-gauge-tickmarks",
  styleUrls: [ "./radial-gauge-tickmarks.component.scss"],
  templateUrl: "./radial-gauge-tickmarks.component.html"
})
export class RadialGaugeTickmarksComponent implements AfterViewInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // settings for major tick marks
        this.radialGauge.tickStartExtent = 0.45;
        this.radialGauge.tickEndExtent = 0.575;
        this.radialGauge.tickStrokeThickness = 2;
        this.radialGauge.tickBrush = "DodgerBlue";

        // settings for minor tick marks
        this.radialGauge.minorTickCount = 4;
        this.radialGauge.minorTickEndExtent = 0.5;
        this.radialGauge.minorTickStartExtent = 0.575;
        this.radialGauge.minorTickStrokeThickness = 1;
        this.radialGauge.minorTickBrush = "DarkViolet";

        this.radialGauge.scaleBrush = "#e8e8e8";
        this.radialGauge.scaleEndExtent = 0.575;
        this.radialGauge.scaleStartExtent = 0.45;
        this.radialGauge.needleEndExtent = 0.425;

    }

}

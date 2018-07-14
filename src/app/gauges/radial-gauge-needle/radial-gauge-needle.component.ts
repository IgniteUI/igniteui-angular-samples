import { AfterViewInit, Component, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";
import { RadialGaugeNeedleShape } from "igniteui-angular-gauges/ES5/RadialGaugeNeedleShape";
import { RadialGaugePivotShape } from "igniteui-angular-gauges/ES5/RadialGaugePivotShape";

@Component({
  selector: "app-radial-gauge-needle",
  styleUrls: [ "./radial-gauge-needle.component.scss"],
  templateUrl: "./radial-gauge-needle.component.html"
})
export class RadialGaugeNeedleComponent implements AfterViewInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // enable needle dragging and contraine it to min/max scale
        this.radialGauge.isNeedleDraggingEnabled = true;
        this.radialGauge.isNeedleDraggingConstrained = true;

        // needle shape settings
        this.radialGauge.needleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        this.radialGauge.needleBrush = "DodgerBlue";
        this.radialGauge.needleOutline = "DodgerBlue";
        this.radialGauge.needleEndExtent = 0.475;
        this.radialGauge.needleStrokeThickness = 1;

        // needle pivot settings
        this.radialGauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.radialGauge.needlePivotBrush = "#9f9fa0";
        this.radialGauge.needlePivotOutline = "#9f9fa0";
        this.radialGauge.needlePivotWidthRatio = 0.2;
        this.radialGauge.needlePivotStrokeThickness = 1;

        this.radialGauge.scaleBrush = "#e8e8e8";
    }

}

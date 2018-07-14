import { AfterViewInit, Component, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-gauge-ranges",
  styleUrls: [ "./radial-gauge-ranges.component.scss"],
  templateUrl: "./radial-gauge-ranges.component.html"
})
export class RadialGaugeRangesComponent implements AfterViewInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngAfterViewInit(): void {

        this.radialGauge.scaleBrush = "#e8e8e8";
        this.radialGauge.scaleStartExtent = 0.45;
        this.radialGauge.scaleEndExtent = 0.575;
        this.radialGauge.tickStrokeThickness = 1.5;
    }

}

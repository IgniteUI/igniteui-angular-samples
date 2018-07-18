import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-gauge-needle",
  styleUrls: [ "./radial-gauge-needle.component.scss"],
  templateUrl: "./radial-gauge-needle.component.html"
})
export class RadialGaugeNeedleComponent implements OnInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}

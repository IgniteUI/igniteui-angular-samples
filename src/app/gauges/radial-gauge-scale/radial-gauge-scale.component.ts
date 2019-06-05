import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-gauge-scale",
  styleUrls: [ "./radial-gauge-scale.component.scss"],
  templateUrl: "./radial-gauge-scale.component.html"
})
export class RadialGaugeScaleComponent {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;
}

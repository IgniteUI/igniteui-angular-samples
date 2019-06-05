import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-gauge-backing",
  styleUrls: [ "./radial-gauge-backing.component.scss"],
  templateUrl: "./radial-gauge-backing.component.html"
})
export class RadialGaugeBackingComponent implements OnInit {

    @ViewChild("radialGauge", { static: true })
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}

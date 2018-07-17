import { Component, OnInit, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-gauge-tickmarks",
  styleUrls: [ "./radial-gauge-tickmarks.component.scss"],
  templateUrl: "./radial-gauge-tickmarks.component.html"
})
export class RadialGaugeTickmarksComponent implements OnInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngOnInit(): void {

        // changing defaults to highlight current feature
        this.radialGauge.scaleBrush = "#e8e8e8";
    }
}

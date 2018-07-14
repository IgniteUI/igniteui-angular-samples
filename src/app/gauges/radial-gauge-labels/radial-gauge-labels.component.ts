import { AfterViewInit, Component, ViewChild } from "@angular/core";
// radial gauge imports
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

@Component({
  selector: "app-radial-labels-sample",
  styleUrls: [ "./radial-gauge-labels.component.scss"],
  templateUrl: "./radial-gauge-labels.component.html"
})
export class RadialGaugeLabelsComponent implements AfterViewInit {

    @ViewChild("radialGauge")
    public radialGauge: IgxRadialGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // Label Settings
        this.radialGauge.labelExtent = 0.65;
        this.radialGauge.labelInterval = 10;
        this.radialGauge.font = "11px Verdana";
        this.radialGauge.fontBrush = "DodgerBlue";

        this.radialGauge.scaleBrush = "#e8e8e8";
    }

}

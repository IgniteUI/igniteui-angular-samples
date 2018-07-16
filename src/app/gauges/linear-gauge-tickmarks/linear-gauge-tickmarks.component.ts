import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-tickmarks",
  styleUrls: [ "./linear-gauge-tickmarks.component.scss"],
  templateUrl: "./linear-gauge-tickmarks.component.html"
})

export class LinearGaugeTickmarksComponent {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;
}

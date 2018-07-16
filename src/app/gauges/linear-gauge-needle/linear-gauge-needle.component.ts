import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-needle",
  styleUrls: [ "./linear-gauge-needle.component.scss"],
  templateUrl: "./linear-gauge-needle.component.html"
})

export class LinearGaugeNeedleComponent {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;
}

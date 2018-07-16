import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-needle",
  styleUrls: [ "./linear-gauge-backing.component.scss"],
  templateUrl: "./linear-gauge-backing.component.html"
})

export class LinearGaugeBackingComponent {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;
}

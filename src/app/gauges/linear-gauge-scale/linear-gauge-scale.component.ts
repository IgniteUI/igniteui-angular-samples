import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-scale",
  styleUrls: [ "./linear-gauge-scale.component.scss"],
  templateUrl: "./linear-gauge-scale.component.html"
})

export class LinearGaugeScaleComponent {

    @ViewChild("linearGauge", {static: true})
    public linearGauge: IgxLinearGaugeComponent;

}

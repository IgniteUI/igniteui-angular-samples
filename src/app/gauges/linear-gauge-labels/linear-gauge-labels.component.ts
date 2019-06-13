import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-labels",
  styleUrls: [ "./linear-gauge-labels.component.scss"],
  templateUrl: "./linear-gauge-labels.component.html"
})

export class LinearGaugeLabelsComponent {

    @ViewChild("linearGauge", {static: true})
    public linearGauge: IgxLinearGaugeComponent;
}

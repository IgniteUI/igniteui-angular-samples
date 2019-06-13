import { Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-ranges",
  styleUrls: [ "./linear-gauge-ranges.component.scss"],
  templateUrl: "./linear-gauge-ranges.component.html"
})

export class LinearGaugeRangesComponent {

    @ViewChild("linearGauge", {static: true})
    public linearGauge: IgxLinearGaugeComponent;
}

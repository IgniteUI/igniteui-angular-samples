import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-needle",
  styleUrls: [ "./linear-gauge-backing.component.scss"],
  templateUrl: "./linear-gauge-backing.component.html"
})

export class LinearGaugeBackingComponent implements AfterViewInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        this.linearGauge.backingBrush = "#bddcfc";
        this.linearGauge.backingOutline = "DodgerBlue";
        this.linearGauge.backingStrokeThickness = 4;
        this.linearGauge.backingInnerExtent = 0;
        this.linearGauge.backingOuterExtent = 1;

        this.linearGauge.scaleBrush = "white";
        this.linearGauge.scaleOutline = "white";
        this.linearGauge.tickStrokeThickness = 1.5;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;
        this.linearGauge.minorTickEndExtent = 0.05;
        this.linearGauge.minorTickStartExtent = 0.20;
        this.linearGauge.labelExtent = 0.03;
    }

}

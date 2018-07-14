import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-tickmarks",
  styleUrls: [ "./linear-gauge-tickmarks.component.scss"],
  templateUrl: "./linear-gauge-tickmarks.component.html"
})

export class LinearGaugeTickmarksComponent implements AfterViewInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // settings for major tick marks
        this.linearGauge.tickBrush = "DodgerBlue";
        this.linearGauge.ticksPreTerminal = 0;
        this.linearGauge.ticksPostInitial = 0;
        this.linearGauge.tickStrokeThickness = 2;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;

        // settings for minor tick marks
        this.linearGauge.minorTickCount = 4;
        this.linearGauge.minorTickBrush = "DarkViolet";
        this.linearGauge.minorTickEndExtent = 0.05;
        this.linearGauge.minorTickStartExtent = 0.15;
        this.linearGauge.minorTickStrokeThickness = 1;

        this.linearGauge.scaleBrush = "#e5e5e5";
        this.linearGauge.scaleOutline = "#e5e5e5";
        this.linearGauge.backingBrush = "#f7f7f7";
        this.linearGauge.backingOutline = "#bfbfbf";
        this.linearGauge.backingStrokeThickness = 2;
        this.linearGauge.labelExtent = 0.05;

    }

}

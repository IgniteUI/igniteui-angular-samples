import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";

@Component({
  selector: "app-linear-gauge-labels",
  styleUrls: [ "./linear-gauge-labels.component.scss"],
  templateUrl: "./linear-gauge-labels.component.html"
})

export class LinearGaugeLabelsComponent implements AfterViewInit {

    @ViewChild("linearGauge")
    public linearGauge: IgxLinearGaugeComponent;

    public ngAfterViewInit(): void {

        // note these properties have the same values as in the html file
        // and they are listed here for demonstration purpose

        // setting for needle
        this.linearGauge.labelInterval = 10;
        this.linearGauge.labelExtent = 0.025;
        this.linearGauge.labelsPreTerminal = 0;
        this.linearGauge.labelsPostInitial = 0;
        this.linearGauge.fontBrush = "DodgerBlue";
        this.linearGauge.font = "11px Verdana";

        this.linearGauge.scaleBrush = "#e5e5e5";
        this.linearGauge.scaleOutline = "#e5e5e5";
        this.linearGauge.backingBrush = "#f7f7f7";
        this.linearGauge.backingOutline = "#bfbfbf";
        this.linearGauge.tickStrokeThickness = 1.5;
        this.linearGauge.tickStartExtent = 0.25;
        this.linearGauge.tickEndExtent = 0.05;
        this.linearGauge.minorTickEndExtent = 0.05;
        this.linearGauge.minorTickStartExtent = 0.20;

    }

}

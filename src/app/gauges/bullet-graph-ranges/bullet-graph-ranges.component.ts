import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";

@Component({
  selector: "app-bullet-graph-ranges",
  styleUrls: [ "./bullet-graph-ranges.component.scss"],
  templateUrl: "./bullet-graph-ranges.component.html"
})

export class BulletGraphRangesComponent implements AfterViewInit {

    @ViewChild("bulletGraph")
    public bulletGraph: IgxBulletGraphComponent;

    public ngAfterViewInit(): void {

        this.bulletGraph.scaleBackgroundBrush = "#e5e5e5";
        this.bulletGraph.scaleBackgroundOutline = "#e5e5e5";
        this.bulletGraph.backingBrush = "#f7f7f7";
        this.bulletGraph.backingOutline = "#bfbfbf";
        this.bulletGraph.tickStrokeThickness = 1.5;
        this.bulletGraph.labelExtent = 0.025;
    }
}

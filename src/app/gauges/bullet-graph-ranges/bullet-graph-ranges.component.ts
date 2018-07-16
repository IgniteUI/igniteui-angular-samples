import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";

@Component({
  selector: "app-bullet-graph-ranges",
  styleUrls: [ "./bullet-graph-ranges.component.scss"],
  templateUrl: "./bullet-graph-ranges.component.html"
})

export class BulletGraphRangesComponent {

    @ViewChild("bulletGraph")
    public bulletGraph: IgxBulletGraphComponent;
}

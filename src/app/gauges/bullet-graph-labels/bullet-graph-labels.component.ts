import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";

@Component({
  selector: "app-bullet-graph-labels",
  styleUrls: [ "./bullet-graph-labels.component.scss"],
  templateUrl: "./bullet-graph-labels.component.html"
})

export class BulletGraphLabelsComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;

}

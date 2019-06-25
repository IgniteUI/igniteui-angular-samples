import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";

@Component({
  selector: "app-bullet-graph-scale",
  styleUrls: [ "./bullet-graph-scale.component.scss"],
  templateUrl: "./bullet-graph-scale.component.html"
})

export class BulletGraphScaleComponent {

    @ViewChild("bulletGraph", { static: true })
    public bulletGraph: IgxBulletGraphComponent;
}

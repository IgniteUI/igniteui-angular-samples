import { Component, ViewChild } from "@angular/core";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";

@Component({
  selector: "app-bullet-graph-background",
  styleUrls: [ "./bullet-graph-background.component.scss"],
  templateUrl: "./bullet-graph-background.component.html"
})

export class BulletGraphBackgroundComponent {

    @ViewChild("bulletGraph", {static: true})
    public bulletGraph: IgxBulletGraphComponent;

}

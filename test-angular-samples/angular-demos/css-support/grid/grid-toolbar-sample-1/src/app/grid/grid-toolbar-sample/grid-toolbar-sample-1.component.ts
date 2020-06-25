import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-1",
  styleUrls: ["./grid-toolbar-sample-1.component.css"],
  templateUrl: "./grid-toolbar-sample-1.component.html"
})
export class GridToolbarSample1Component implements OnInit {

    @ViewChild("grid1", { static: true }) public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }
}

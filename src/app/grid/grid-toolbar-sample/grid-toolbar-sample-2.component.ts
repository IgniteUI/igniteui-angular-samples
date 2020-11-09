import { Component, OnInit, ViewChild } from "@angular/core";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-2",
  styleUrls: ["./grid-toolbar-sample-2.component.scss"],
  templateUrl: "./grid-toolbar-sample-2.component.html"
})
export class GridToolbarSample2Component implements OnInit {

    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }
}

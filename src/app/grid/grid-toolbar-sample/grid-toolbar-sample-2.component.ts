import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-2",
  styleUrls: ["./grid-toolbar-sample-2.component.scss"],
  templateUrl: "./grid-toolbar-sample-2.component.html"
})
export class GridToolbarSample2Component implements OnInit {

    @ViewChild("grid1") public grid: IgxGridComponent;
    public data: any[];
  
    ngOnInit() {
        this.data = athletesData;
    }
}

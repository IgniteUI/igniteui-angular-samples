import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "./data";

@Component({
  selector: "app-grid-editing-sample",
  styleUrls: ["./grid-editing-sample.component.scss"],
  templateUrl: "./grid-editing-sample.component.html"
})
export class GridEditingSampleComponent implements OnInit {

    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    public data;
    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }

    public removeRow(rowIndex) {
        this.grid1.deleteRow(rowIndex);

    }
}

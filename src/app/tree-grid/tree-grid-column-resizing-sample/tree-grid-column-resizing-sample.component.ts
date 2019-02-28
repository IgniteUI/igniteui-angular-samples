import { Component } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-column-resizing-sample",
  styleUrls: ["./tree-grid-column-resizing-sample.component.scss"],
  templateUrl: "./tree-grid-column-resizing-sample.component.html"
})
export class TreeGridColumnResizingSampleComponent {
    public data: any[];

    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.data = EMPLOYEE_FLAT_DATA_DETAILED();
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }
}

import { Component, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxTreeGridComponent } from "igniteui-angular";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-column-pinning-sample",
  styleUrls: ["./tree-grid-column-pinning-sample.component.scss"],
  templateUrl: "./tree-grid-column-pinning-sample.component.html"
})
export class TreeGridColumnPinningSampleComponent {

    public data: any[];
    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;

    constructor() {
        this.data = EMPLOYEE_FLAT_DATA_DETAILED();
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}

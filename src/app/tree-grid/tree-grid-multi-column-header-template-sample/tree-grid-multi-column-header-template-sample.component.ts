import { Component, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-multi-column-header-template-sample",
  styleUrls: ["./tree-grid-multi-column-header-template-sample.component.scss"],
  templateUrl: "./tree-grid-multi-column-header-template-sample.component.html"
})
export class TreeGridMultiColumnHeaderTemplateSampleComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent })
    public treeGrid: IgxTreeGridComponent;
    public data = EMPLOYEE_FLAT_DATA_DETAILED();
}

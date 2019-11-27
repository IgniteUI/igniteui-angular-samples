import { Component, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeDetailedFlatData } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-multi-column-headers-sample",
  styleUrls: ["./tree-grid-collapsible-column-groups.component.scss"],
  templateUrl: "./tree-grid-collapsible-column-groups.component.html"
})
export class TreeGridMultiCollapsibleColumnGroupsComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data = generateEmployeeDetailedFlatData();
}

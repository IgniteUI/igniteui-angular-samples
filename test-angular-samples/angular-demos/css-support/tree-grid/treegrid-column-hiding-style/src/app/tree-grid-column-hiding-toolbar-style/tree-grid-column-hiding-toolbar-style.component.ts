import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeDetailedFlatData } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-column-hiding-toolbar-style",
  styleUrls: ["./tree-grid-column-hiding-toolbar-style.component.css"],
  templateUrl: "./tree-grid-column-hiding-toolbar-style.component.html"
})
export class TreeGridColumnHidingToolbarStyleComponent implements OnInit {

    @ViewChild("treeGrid", { read: IgxTreeGridComponent, static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public ngAfterViewInit() {
        this.treeGrid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
    }
}

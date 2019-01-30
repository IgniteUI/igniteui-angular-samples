import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-column-hiding-toolbar-sample",
  styleUrls: ["./tree-grid-column-hiding-toolbar-sample.component.scss"],
  templateUrl: "./tree-grid-column-hiding-toolbar-sample.component.html"
})
export class TreeGridColumnHidingToolbarSampleComponent implements OnInit, AfterViewInit {

    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_DATA_DETAILED;
    }

    public ngAfterViewInit() {
        this.treeGrid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
    }
}

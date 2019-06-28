import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
  selector: "app-tree-grid-selection-sample",
  styleUrls: ["./tree-grid-selection-sample.component.scss"],
  templateUrl: "./tree-grid-selection-sample.component.html"
})
export class TreeGridSelectionSampleComponent implements OnInit {

    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public selection = true;

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.treeGrid.deselectAllRows();
            this.treeGrid.selectRows([targetCell.row.rowID]);
        }
    }
}

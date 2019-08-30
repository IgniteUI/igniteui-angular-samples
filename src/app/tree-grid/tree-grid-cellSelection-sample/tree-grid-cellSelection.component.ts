import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
    selector: "tree-grid-cellSelection",
    styleUrls: ["./tree-grid-cellSelection.component.scss"],
    templateUrl: "tree-grid-cellSelection.component.html"
})
export class TreeGridCellSelectionComponent implements OnInit {
    public data: any[];
    public cellSelectionMode = "multiple";
    public selectionModes = [];

    @ViewChild("treegrid", { static: true }) public treeGrid: IgxTreeGridComponent;

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.selectionModes = [
            { label: "none", selected: this.cellSelectionMode === "none", togglable: true },
            { label: "single", selected: this.cellSelectionMode === "single", togglable: true },
            { label: "multiple", selected: this.cellSelectionMode === "multiple", togglable: true }
        ];
    }

    public selectCellSelectionMode(args) {
        this.cellSelectionMode = this.selectionModes[args.index].label;
    }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSnackbarComponent, IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
    selector: "app-tree-grid-selection-sample",
    styleUrls: ["./tree-grid-selection-sample.component.scss"],
    templateUrl: "./tree-grid-selection-sample.component.html"
})
export class TreeGridSelectionSampleComponent implements OnInit {

    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public data: any[];
    public selectionMode = "multiple";
    public selectionModes = [];
    public hideRowSelectors = false;

    constructor() {
        this.data = generateEmployeeFlatData();
        this.selectionModes = [
            { label: "none", selected: this.selectionMode === "none", togglable: true },
            { label: "single", selected: this.selectionMode === "single", togglable: true },
            { label: "multiple", selected: this.selectionMode === "multiple", togglable: true }
        ];
    }

    public ngOnInit(): void {

        this.snackbar.autoHide = false;
        this.snackbar.show();
    }
    public handleRowSelection(event) {

    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.show();
    }
}

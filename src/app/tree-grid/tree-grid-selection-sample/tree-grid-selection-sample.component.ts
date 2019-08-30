import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
  selector: "app-tree-grid-selection-sample",
  styleUrls: ["./tree-grid-selection-sample.component.scss"],
  templateUrl: "./tree-grid-selection-sample.component.html"
})
export class TreeGridSelectionSampleComponent implements OnInit {

    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public data: any[];
    public selectionMode = "multiple";
    public selectionModes = [];
    public hideRowSelectors = false;

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.selectionModes = [
            { label: "none", selected: this.selectionMode === "none", togglable: true },
            { label: "single", selected: this.selectionMode === "single", togglable: true },
            { label: "multiple", selected: this.selectionMode === "multiple", togglable: true }
        ];
        this.banner.open();
    }

    public handleRowSelection(event) {

    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.banner.open();
    }
}

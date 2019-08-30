import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-cellSelection",
    styleUrls: ["./grid-cellSelection.component.scss"],
    templateUrl: "grid-cellSelection.component.html"
})
export class GridCellSelectionComponent implements OnInit {
    public data: any[];
    public selection = true;
    public cellSelectionMode = "multiple";
    public selectionModes = [];

    @ViewChild("grid", { static: true }) public grid: IgxGridComponent;

    constructor() { }

    public ngOnInit(): void {
        this.data = DATA;
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

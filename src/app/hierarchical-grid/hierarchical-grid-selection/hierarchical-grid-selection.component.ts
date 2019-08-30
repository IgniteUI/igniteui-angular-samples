import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-selection",
    styleUrls: ["./hierarchical-grid-selection.component.scss"],
    templateUrl: "hierarchical-grid-selection.component.html"
})

export class HGridSelectionSampleComponent implements OnInit {
    public localdata;
    public selectionMode = "multiple";
    public selectionModes = [];
    public hideRowSelectors = false;

    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.selectionModes = [
            { label: "none", selected: this.selectionMode === "none", togglable: true },
            { label: "single", selected: this.selectionMode === "single", togglable: true },
            { label: "multiple", selected: this.selectionMode === "multiple", togglable: true }
        ];
        this.banner.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.banner.open();
    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
    }

    public formatter = (a) => a;
}

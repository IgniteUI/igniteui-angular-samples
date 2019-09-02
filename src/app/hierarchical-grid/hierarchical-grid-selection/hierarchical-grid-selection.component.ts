import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxSnackbarComponent } from "igniteui-angular";
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
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;

    constructor() {
        this.localdata = SINGERS;
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

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.show();
    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
    }

    public formatter = (a) => a;
}

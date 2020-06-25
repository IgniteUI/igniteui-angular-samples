import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxSnackbarComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-cellSelection",
    styleUrls: ["./grid-cellSelection.component.css"],
    templateUrl: "grid-cellSelection.component.html"
})
export class GridCellSelectionComponent implements OnInit {
    public data: any[];
    public selection = true;
    public selectionMode = "multiple";
    public selectionModes = [];

    @ViewChild("grid", { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;

    constructor() { }

    public ngOnInit(): void {
        this.data = DATA;
        this.selectionModes = [
            { label: "none", selected: this.selectionMode === "none", togglable: true },
            { label: "single", selected: this.selectionMode === "single", togglable: true },
            { label: "multiple", selected: this.selectionMode === "multiple", togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.show();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.show();
    }
}

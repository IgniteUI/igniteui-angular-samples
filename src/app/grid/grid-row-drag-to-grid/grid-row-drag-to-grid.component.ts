import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "./data";

enum DragIcon {
    DEFAULT = "drag_handle",
    ALLOW = "add"
}

@Component({
    selector: "grid-row-drag-to-grid-sample",
    styleUrls: ["./grid-row-drag-to-grid.component.scss"],
    templateUrl: "grid-row-drag-to-grid.component.html"
})

export class GridDragToGridSampleComponent {
    public data1: any[];
    public data2: any[];
    @ViewChild("sourceGrid", { read: IgxGridComponent }) public sourceGrid: IgxGridComponent;
    @ViewChild("targetGrid", { read: IgxGridComponent }) public targetGrid: IgxGridComponent;
    private _prevIcon;
    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onDropAllowed(args) {
        args.cancel = true;
        this.targetGrid.addRow(args.dragData.rowData);
        this.sourceGrid.deleteRow(args.dragData.rowID);
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = [...ghost.querySelectorAll("igx-icon")]
            .find((e) => e.innerText === (this._prevIcon || DragIcon.DEFAULT));
            if (currentIcon) {
                currentIcon.innerText = icon;
                this._prevIcon = icon;
            }
        }
    }
}

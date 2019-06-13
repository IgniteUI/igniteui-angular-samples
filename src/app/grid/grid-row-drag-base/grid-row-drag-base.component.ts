import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "add"
}

@Component({
    selector: "grid-row-drag-base-sample",
    styleUrls: ["./grid-row-drag-base.component.scss"],
    templateUrl: "grid-row-drag-base.component.html"
})

export class GridDragBaseSampleComponent {
    public data1: any[];
    public data2: any[];
    @ViewChild("sourceGrid", {static: true}) 
    public sourceGrid: IgxGridComponent;
    @ViewChild("targetGrid", {static: true})
    public targetGrid: IgxGridComponent;
    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onRowDragEnd(args) {
        args.animation = true;
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
            const currentIcon = ghost.querySelector(".igx-grid__drag-indicator > igx-icon");
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}

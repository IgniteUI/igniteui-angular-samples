import { Component, ViewChild } from "@angular/core";
import { IgxDropEventArgs, IgxTreeGridComponent, IgxTreeGridRowComponent } from "igniteui-angular";
import { FULL_EMPLOYEE_DATA } from "../data/employees";

enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "remove"
}

@Component({
    selector: "tree-grid-row-drag",
    styleUrls: ["tree-grid-row-drag.component.scss"],
    templateUrl: "tree-grid-row-drag.component.html"
})
export class TreeGridRowDrag {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent })
    public treeGrid: IgxTreeGridComponent;

    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public onDropAllowed(args: IgxDropEventArgs) {
        args.cancel = true;
        const draggedRow: IgxTreeGridRowComponent = args.dragData;
        draggedRow.delete();
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            ghost.querySelector("igx-icon").innerHTML = icon;
        }
    }
}

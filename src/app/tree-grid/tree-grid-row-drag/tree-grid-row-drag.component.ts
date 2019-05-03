import { Component, ViewChild } from "@angular/core";
import { IgxDropEventArgs, IgxTreeGridComponent, IgxTreeGridRowComponent } from "igniteui-angular";
import { FULL_EMPLOYEE_DATA } from "../data/employees";

enum DragIcon {
    DEFAULT = "drag_handle",
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
    private _prevIcon;
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
            const currentIcon = [...ghost.querySelectorAll("igx-icon")]
            .find((e) => e.innerText === (this._prevIcon || DragIcon.DEFAULT));
            if (currentIcon) {
                currentIcon.innerText = icon;
                this._prevIcon = icon;
            }
        }
    }
}

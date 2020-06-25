import { Component, ViewChild } from "@angular/core";
import { IDropDroppedEventArgs, IgxTreeGridComponent, IgxTreeGridRowComponent } from "igniteui-angular";
import { FULL_EMPLOYEE_DATA } from "../data/employees";

enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "remove"
}

@Component({
    selector: "tree-grid-row-drag-base",
    styleUrls: ["tree-grid-row-drag-base.component.scss"],
    templateUrl: "tree-grid-row-drag-base.component.html"
})
export class TreeGridRowDragBase {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;

    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: IgxTreeGridRowComponent = args.dragData;
        draggedRow.delete();
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
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

import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxDropEventArgs, IgxHierarchicalGridComponent, IgxHierarchicalRowComponent } from "igniteui-angular";
import { createData, IDrive } from "../../data/files.data";

enum DragIcon {
    DEFAULT = "drag_handle",
    ALLOW = "remove"
}

@Component({
    selector: "hierarchical-grid-row-drag",
    styleUrls: ["./hierarchical-grid-row-drag.component.scss"],
    templateUrl: "hierarchical-grid-row-drag.component.html"
})

export class HGridDragSampleComponent implements AfterViewInit {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    @ViewChild("customDragIcon", { read: TemplateRef, static: true })
    public dragTemplate: TemplateRef<any>;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IgxDropEventArgs) {
        args.cancel = true;
        const draggedRow: IgxHierarchicalRowComponent = args.dragData;
        draggedRow.delete();
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.dragGhost, DragIcon.DEFAULT);
    }

    public ngAfterViewInit() {
        this.hGrid.dragIndicatorIconTemplate = this.dragTemplate;
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

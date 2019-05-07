import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxDropEventArgs, IgxHierarchicalGridComponent, IgxHierarchicalRowComponent } from "igniteui-angular";
import { createData } from "./files.data";

interface IDrive {
    directoryName: string;
    size: number;
    name: string;
    system: boolean;
    id: number;
    folders: IFolder[];
}

interface IFolder {
    name: string;
    size: number;
    id: number;
    files: IFile[];
}

interface IFile {
    name: string;
    extension: string;
    owner: string;
    size: number;
    createdBy: string;
}

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
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent })
    public hGrid: IgxHierarchicalGridComponent;
    @ViewChild("customDragIcon", { read: TemplateRef })
    public dragTemplate: TemplateRef<any>;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
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

/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxDropDirective } from 'igniteui-angular/directives';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { createData, IDrive } from '../../data/files.data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-hierarchical-row-drag-base',
    styleUrls: ['./hierarchical-row-drag-base.component.scss'],
    templateUrl: 'hierarchical-row-drag-base.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridRowDragBaseComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
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
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}

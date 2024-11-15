/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxGridComponent, IgxColumnComponent, IgxDropDirective } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'add'
}

@Component({
    selector: 'app-grid-row-drag-base-sample',
    styleUrls: ['./grid-row-drag-base.component.scss'],
    templateUrl: 'grid-row-drag-base.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxDropDirective]
})

export class GridDragBaseSampleComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent, static: true }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent, static: true }) public targetGrid: IgxGridComponent;
    public data1: any[];
    public data2: any[];

    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        this.targetGrid.addRow(args.dragData.data);
        this.sourceGrid.deleteRow(args.dragData.key);
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

import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs,
    IgxTreeGridComponent, RowType, Point } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-row-reorder',
    styleUrls: ['tree-grid-row-reorder.component.scss'],
    templateUrl: 'tree-grid-row-reorder.component.html'
})
export class TreeGridRowReorderComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static : true })
    public treeGrid: IgxTreeGridComponent;
    public selectionMode = 'multiple';
    public localData = [];
    constructor() {
        this.localData = generateEmployeeFlatData();
    }

    public rowDragStart(args: any): void {
        const targetRow: RowType = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetRow.key);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow: RowType = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        const row = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }

        if (row.key === draggedRow.key) {
            /** dragged row and targeted row are same */
            return;
        }

        if (row.data.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.data.ParentID === draggedRow.data.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedRow.data);
                this.localData[rowIndex].ParentID = row.data.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.key === draggedRow.key).key], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: RowType, targetRow: RowType) {
        const draggedRowIndex = this.getRowIndex(draggedRow.data);
        const targetRowIndex: number = this.getRowIndex(targetRow.data);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedRow.data);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point): any {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }
}

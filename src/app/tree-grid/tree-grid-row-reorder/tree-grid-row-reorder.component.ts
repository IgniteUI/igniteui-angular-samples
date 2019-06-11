import { Component, ViewChild } from "@angular/core";
import { IgxDropEventArgs, IgxTreeGridComponent, IgxTreeGridRowComponent, Point } from "igniteui-angular";
import { FULL_EMPLOYEE_DATA } from "../data/employees";

@Component({
    selector: "tree-grid-row-reorder",
    styleUrls: ["tree-grid-row-reorder.component.scss"],
    templateUrl: "tree-grid-row-reorder.component.html"
})
export class TreeGridRowReorderComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent })
    public treeGrid: IgxTreeGridComponent;

    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public rowDragStart(args: any): void {
        const targetRow: IgxTreeGridRowComponent = args.dragData;
        if (targetRow.expanded) {
            const grid = targetRow.grid;
            grid.expansionStates = grid.expansionStates.set(targetRow.rowID, false);
        }
    }

    public dropInGrid(args: IgxDropEventArgs): void {
        args.cancel = true;
        const draggedRow: IgxTreeGridRowComponent = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.pageX, y: event.pageY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: IgxTreeGridRowComponent, cursorPosition: Point): void {
        const parent: IgxTreeGridComponent = draggedRow.grid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.rowData);
        if (draggedRow.isSelected) {
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowData.ID === draggedRow.rowData.ID).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point): number {
        const targetElem: IgxTreeGridRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.ID === targetElem.rowData.ID));
    }

    private catchCursorPosOnElem(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point)
        : IgxTreeGridRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top && cursorPosition.y < rowRect.bottom &&
                cursorPosition.x > rowRect.left && cursorPosition.x < rowRect.right) {
                return row;
            }
        }
    }
}

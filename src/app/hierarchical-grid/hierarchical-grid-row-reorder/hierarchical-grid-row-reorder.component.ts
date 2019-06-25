import { Component, ViewChild } from "@angular/core";
import { IgxDropEventArgs, IgxHierarchicalGridComponent, IgxHierarchicalRowComponent, Point } from "igniteui-angular";
import { createData, IDrive } from "../../data/files.data";

@Component({
    selector: "hierarchical-grid-row-reorder",
    styleUrls: ["./hierarchical-grid-row-reorder.component.scss"],
    templateUrl: "hierarchical-grid-row-reorder.component.html"
})
export class HGridRowReorderComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent , static: true  })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public rowDragStart(args: any): void {
        const targetRow: IgxHierarchicalRowComponent = args.dragData;
        // if the row-to-be-dragged is expanded - collapse it
        if (targetRow.expanded) {
            targetRow.toggle();
        }
    }

    public rowDrop(args: IgxDropEventArgs): void {
        args.cancel = true;
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.pageX, y: event.pageY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: IgxHierarchicalRowComponent, cursorPosition: Point): void {
        const parent: IgxHierarchicalGridComponent = draggedRow.grid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        // delete the dragged row and then insert it at its new position
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.rowData);
        if (draggedRow.isSelected) {
            // find the row that has the same ID as the dragged row and select it
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowData.id === draggedRow.rowData.id).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: IgxHierarchicalRowComponent[], cursorPosition: Point): number {
        const targetElem: IgxHierarchicalRowComponent = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        // get the index of the row that has the same ID as the dragged row
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: IgxHierarchicalRowComponent[], cursorPosition: Point)
        : IgxHierarchicalRowComponent {
        // get the row which the dragged row was dropped on
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top && cursorPosition.y < rowRect.bottom &&
                cursorPosition.x > rowRect.left && cursorPosition.x < rowRect.right) {
                return row;
            }
        }
    }
}

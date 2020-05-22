import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IGridCellEventArgs,
    IgxActionStripComponent,
    IgxGridComponent,
    IgxGridRowComponent,
    IPinningConfig,
    IRowDragStartEventArgs,
    RowPinningPosition
} from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-row-pinning-drag-sample",
    styleUrls: ["./grid-row-pinning-drag.component.scss"],
    templateUrl: "grid-row-pinning-drag.component.html"
})

export class GridPinningDragSampleComponent implements OnInit {
    public data: any[];

    @ViewChild("grid1", { static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxActionStripComponent, { static: true })
    public actionStrip: IgxActionStripComponent;

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public ngOnInit() {
        this.grid.pinRow(this.data[0].ID);
        this.grid.pinRow(this.data[3].ID);
        this.grid.pinRow(this.data[8].ID);
        this.grid.pinRow(this.data[11].ID);
    }

    public togglePining(row: IgxGridRowComponent, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public onDropAllowed(args) {
        const event = args.originalEvent;
        let currRowPinnedIndex;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }

        const currRowID = this.getCurrentRowID(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });

        const currentRow = this.grid.rowList.toArray().find((r) => r.rowID === currRowID);
        if (currentRow.pinned) {
            currRowPinnedIndex = this.grid.pinnedRows.indexOf(this.grid.pinnedRows.find((r) => r.rowID === currRowID));
        }
        // remove the row that was dragged and place it onto its new location
        this.grid.deleteRow(args.dragData.rowID);
        this.data.splice(currRowIndex, 0, args.dragData.rowData);
        if (currentRow.pinned && !args.dragData.pinned) {
            this.grid.pinRow(args.dragData.rowID, currRowPinnedIndex);
        } else if (!currentRow.pinned && args.dragData.pinned) {
            this.grid.unpinRow(args.dragData.rowID);
        } else if (currentRow.pinned && args.dragData.pinned) {
            this.grid.unpinRow(args.dragData.rowID);
            this.grid.pinRow(args.dragData.rowID, currRowPinnedIndex);
        }
    }

    public onRowDragStart(args: IRowDragStartEventArgs) {
        if (args.dragData.disabled) {
            args.cancel = true;
        }
    }

    public onMouseOver(actionStrip: IgxActionStripComponent, grid: IgxGridComponent, event) {
        if (event.target.nodeName.toLowerCase() === "igx-grid-cell") {
            const rowIndex = parseInt(event.target.attributes["data-rowindex"].value, 10);
            const row = grid.getRowByIndex(rowIndex);
            actionStrip.show(row);
        }
    }

    public onMouseLeave(actionStrip: IgxActionStripComponent, event?) {
        if (!event || !event.relatedTarget || event.relatedTarget.nodeName.toLowerCase() !== "igx-drop-down-item") {
            actionStrip.hide();
        }
    }

    public onCellClick(args: IGridCellEventArgs) {
        this.actionStrip.show(args.cell.row);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return this.data.indexOf(this.data.find((r) => r.ID === row.rowData.ID));
            }
        }

        return -1;
    }

    private getCurrentRowID(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the ID of the targeted row
                return row.rowData.ID;
            }
        }
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IDropDroppedEventArgs,
    IgxGridComponent,
    IPinningConfig,
    IRowDragStartEventArgs,
    RowPinningPosition,
    RowType
} from 'igniteui-angular';
import { IgxRowDirective } from 'igniteui-angular/lib/grids/row.directive';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-row-pinning-drag-sample',
    styleUrls: ['./grid-row-pinning-drag.component.scss'],
    templateUrl: 'grid-row-pinning-drag.component.html'
})

export class GridPinningDragSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid: IgxGridComponent;
    public data: any[];
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

    public togglePining(row: RowType, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const event = args.originalEvent;
        let currRowPinnedIndex;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }

        const currRowID = this.getCurrentRowID(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });

        const currentRow = this.grid.rowList.toArray().find((r) => r.key === currRowID);
        if (currentRow.pinned) {
            currRowPinnedIndex = this.grid.pinnedRows.indexOf(this.grid.pinnedRows.find((r) => r.key === currRowID));
        }
        // remove the row that was dragged and place it onto its new location
        this.grid.deleteRow((args.dragData as RowType).key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
        if (currentRow.pinned && !args.dragData.pinned) {
            this.grid.pinRow(args.dragData.key, currRowPinnedIndex);
        } else if (!currentRow.pinned && args.dragData.pinned) {
            this.grid.unpinRow(args.dragData.key);
        } else if (currentRow.pinned && args.dragData.pinned) {
            this.grid.unpinRow(args.dragData.key);
            this.grid.pinRow(args.dragData.key, currRowPinnedIndex);
        }
    }

    public onRowDragStart(args: IRowDragStartEventArgs) {
        if (args.dragData.disabled) {
            args.cancel = true;
        }
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return this.data.indexOf(this.data.find((r) => r.ID === row.key));
            }
        }

        return -1;
    }

    private getCurrentRowID(rowList: IgxRowDirective[], cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the ID of the targeted row
                return row.key;
            }
        }
    }
}

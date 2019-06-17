import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-row-reorder-sample",
    styleUrls: ["grid-row-reorder.scss"],
    templateUrl: "grid-row-reorder.html"
})
export class GridRowReorderComponent {
    public data: any[];
    @ViewChild("grid", { read: IgxGridComponent })
    public grid: IgxGridComponent;

    constructor() {
        this.data = DATA;
    }

    public onDropAllowed(args) {
        args.cancel = true;
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.pageX, y: event.pageY });
        // remove the row that was dragged and place it onto its new location
        this.grid.deleteRow(args.dragData.rowID);
        this.data.splice(currRowIndex, 0, args.dragData.rowData);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top && cursorPosition.y < rowRect.bottom &&
                cursorPosition.x > rowRect.left && cursorPosition.x < rowRect.right) {
                // return the index of the targeted row
                return this.data.indexOf(this.data.find((r) => r.ID === row.rowData.ID));
            }
        }

        throw new Error("Failed to get row index.");
    }
}

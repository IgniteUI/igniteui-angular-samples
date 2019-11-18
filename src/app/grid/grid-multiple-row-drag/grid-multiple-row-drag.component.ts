import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

enum DragIcon {
    DEFAULT = "drag_indicator",
    ALLOW = "add"
}

@Component({
    selector: "grid-multiple-row-drag",
    styleUrls: ["./grid-multiple-row-drag.component.scss"],
    templateUrl: "./grid-multiple-row-drag.component.html"
})
export class GridMultipleRowDragComponent  {
    public data1: any[];
    public data2: any[];
    public icon = DragIcon.DEFAULT;
    @ViewChild("sourceGrid", { read: IgxGridComponent, static: true })
    public sourceGrid: IgxGridComponent;
    @ViewChild("targetGrid", { read: IgxGridComponent, static: true })
    public targetGrid: IgxGridComponent;
    public selectionMode = "multiple";
    constructor() {
        this.data1 = DATA;
        this.data2 = [];
   }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args) {
        let selected = false;
        const ids = this.sourceGrid.selectedRows();
        const selectedRowData = this.sourceGrid.data.filter((record) => {
            return ids.includes(record.ID);
        });
        selectedRowData.forEach((rowData) => {
            selected = true;
            this.targetGrid.addRow(rowData);
            this.sourceGrid.deleteRow(rowData.ID);
        });
        if (selected === false) {
            this.targetGrid.addRow(args.dragData.rowData);
            this.sourceGrid.deleteRow(args.dragData.rowID);
        }
    }

    public onEnter(args) {
        this.icon = DragIcon.ALLOW;
    }

    public onLeave(args) {
        this.icon = DragIcon.DEFAULT;
    }
}

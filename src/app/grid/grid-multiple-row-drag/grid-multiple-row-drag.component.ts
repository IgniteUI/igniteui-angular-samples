import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";
@Component({
    selector: "grid-multiple-row-drag",
    styleUrls: ["./grid-multiple-row-drag.component.scss"],
    templateUrl: "./grid-multiple-row-drag.component.html"
})
export class GridMultipleRowDragComponent  {
    public data1: any[];
    public data2: any[];
    public icon = "drag_indicator";
    public secondIcon = "arrow_right_alt";
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
        this.secondIcon = "add";
    }
    public onRowDragStart(args) {
        let count = this.sourceGrid.selectedRows().length;
        if (count === 0) {
            count = 1;
        }
        if (count > 9) {
            this.icon = `filter_9_plus`;
        } else {
            this.icon = `filter_${count}`;
        }
    }
    public onLeave(args) {
        this.onRowDragStart(args);
        this.secondIcon = "arrow_right_alt";
    }
}

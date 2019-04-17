import { Component, ViewChild } from "@angular/core";
import { IGridDataBindable, IgxGridBaseComponent, IgxGridComponent,
    IgxRowComponent, IRowDragEndEventArgs } from "igniteui-angular";
import { DATA } from "./data";

@Component({
    selector: "grid-row-drag-to-grid-sample",
    styleUrls: ["./grid-row-drag-to-grid.component.scss"],
    templateUrl: "grid-row-drag-to-grid.component.html"
})

export class GridDragToGridSampleComponent {
    public data1: any[];
    public data2: any[];
    @ViewChild("grid1", { read: IgxGridComponent }) public grid1: IgxGridComponent;
    @ViewChild("grid2", { read: IgxGridComponent }) public grid2: IgxGridComponent;

    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public dragAreaEnter(args) {

    }

    public dragAreaLeave(args) {

    }

    public rowDropped1(args: IRowDragEndEventArgs) {
        this.addRow(this.grid1, args.source);
        this.removeRow(this.grid2, args.source);
    }

    public rowDropped2(args: IRowDragEndEventArgs) {
        this.addRow(this.grid2, args.source);
        this.removeRow(this.grid1, args.source);
    }

    public addRow(grid: IgxGridComponent, row: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>) {
        grid.addRow(row.rowData);
    }

    public removeRow(grid: IgxGridComponent, row: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>) {
        grid.deleteRow(row.rowID);
    }
}

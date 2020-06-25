import { Component, OnInit, ViewChild } from "@angular/core";
import {
    ColumnPinningPosition,
    IGridCellEventArgs,
    IgxActionStripComponent,
    IgxTreeGridComponent,
    IPinningConfig,
    RowPinningPosition
} from "igniteui-angular";
import { generateEmployeeFlatData, IEmployee } from "../data/employees-flat";

@Component({
    selector: "tree-grid-row-pinning-styling",
    styleUrls: ["tree-grid-row-pinning-styling.component.css"],
    templateUrl: "tree-grid-row-pinning-styling.component.html"
})
export class TreeGridRowPinningStylingSampleComponent implements OnInit {

    public data: IEmployee[];
    public columns: any[];

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    @ViewChild("treeGrid1", { static: true })
    public treeGrid: IgxTreeGridComponent;

    @ViewChild(IgxActionStripComponent, { static: true })
    public actionStrip: IgxActionStripComponent;

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: "Name", label: "Full Name", dataType: "string" },
            { field: "Age", label: "Age", dataType: "number" },
            { field: "Title", label: "Title", dataType: "string" },
            { field: "HireDate", label: "Hire Date", dataType: "date" }
        ];

        this.treeGrid.pinRow(this.data[0].ID);
        this.treeGrid.pinRow(this.data[3].ID);
    }

    public onMouseOver(actionStrip: IgxActionStripComponent, treeGrid: IgxTreeGridComponent, event) {
        if (["igx-grid-cell", "igx-tree-grid-cell"].find(e => e === event.target.nodeName.toLowerCase())) {
            const rowIndex = parseInt(event.target.attributes["data-rowindex"].value, 10);
            const row = treeGrid.getRowByIndex(rowIndex);
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
}

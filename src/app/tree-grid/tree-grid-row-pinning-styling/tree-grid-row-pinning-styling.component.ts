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
    styleUrls: ["tree-grid-row-pinning-styling.component.scss"],
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
}

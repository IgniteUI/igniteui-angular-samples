import { Component, OnInit, ViewChild } from "@angular/core";
import {
    ColumnPinningPosition,
    IgxHierarchicalGridComponent,
    IPinningConfig,
    RowPinningPosition
} from "igniteui-angular";
import { SINGERS } from "../../data/singersData";

@Component({
    selector: "hierarchical-grid-row-pinning-styling",
    styleUrls: ["./hierarchical-grid-row-pinning-styling.component.scss"],
    templateUrl: "hierarchical-grid-row-pinning-styling.component.html"
})

export class HGridRowPinningStylingSampleComponent implements OnInit {
    public localData;
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    @ViewChild("hierarchicalGrid1", { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;

    public ngOnInit() {
        this.hierarchicalGrid.pinRow(SINGERS[0].Photo);
        this.hierarchicalGrid.pinRow(SINGERS[3].Photo);
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}

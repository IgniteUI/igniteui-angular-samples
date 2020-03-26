import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridRowComponent, RowPinningPosition } from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-row-pinning-sample",
    templateUrl: "grid-row-pinning.component.html",
    styleUrls: ["./grid-row-pinning.component.scss"]
})

export class GridRowPinningSampleComponent {
    public data: any[];
    @ViewChild("grid", {read: IgxGridComponent, static: true})
    public grid: IgxGridComponent;
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public togglePinning(row: IgxGridRowComponent, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}

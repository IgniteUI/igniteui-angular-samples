import { Component, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxHierarchicalRowComponent, RowPinningPosition } from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-row-pinning",
    styleUrls: ["./hierarchical-grid-row-pinning.component.scss"],
    templateUrl: "hierarchical-grid-row-pinning.component.html"
})

export class HGridRowPinningSampleComponent {
    public localdata;
    public pinningConfig: IPinningConfig = {rows: RowPinningPosition.Top};

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }

    public togglePinning(row: IgxHierarchicalRowComponent, event) {
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

    public formatter = (a) => a;
}

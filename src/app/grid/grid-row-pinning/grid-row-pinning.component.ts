import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IGridCellEventArgs,
    IgxActionStripComponent,
    IgxGridComponent,
    IPinningConfig,
    RowPinningPosition
} from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-row-pinning",
    templateUrl: "grid-row-pinning.component.html",
    styleUrls: ["./grid-row-pinning.component.scss"]
})

export class GridRowPinningSampleComponent implements OnInit {
    public data: any[];

    @ViewChild("grid1", { static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxActionStripComponent, { static: true })
    public actionStrip: IgxActionStripComponent;

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public ngOnInit() {
        this.grid.pinRow(this.data[0].ID);
        this.grid.pinRow(this.data[3].ID);
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}

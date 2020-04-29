import { AfterViewInit, Component, ViewChild } from "@angular/core";
import {
    IGridCellEventArgs,
    IgxActionStripComponent,
    IgxGridComponent,
    RowPinningPosition
} from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-row-pinning-styling",
    templateUrl: "grid-row-pinning-styling.component.html",
    styleUrls: ["./grid-row-pinning-styling.component.scss"]
})

export class GridRowPinningStylingSampleComponent implements AfterViewInit {
    public data: any[];

    @ViewChild(IgxGridComponent, { static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxActionStripComponent, { static: true })
    public actionStrip: IgxActionStripComponent;

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };

    constructor() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.pinRow(this.data[0].ID);
        this.grid.pinRow(this.data[3].ID);
    }

    public onMouseOver(actionStrip: IgxActionStripComponent, grid: IgxGridComponent, event) {
        if (event.target.nodeName.toLowerCase() === "igx-grid-cell") {
            const rowIndex = parseInt(event.target.attributes["data-rowindex"].value, 10);
            const row = grid.getRowByIndex(rowIndex);
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

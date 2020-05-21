import { Component, OnInit, ViewChild } from "@angular/core";
import {
    ColumnPinningPosition,
    IGridCellEventArgs,
    IgxActionStripComponent,
    IgxHierarchicalGridComponent,
    IPinningConfig,
    RowPinningPosition
} from "igniteui-angular";
import { SINGERS } from "../data";

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

    @ViewChild(IgxActionStripComponent, { static: true })
    public actionStrip: IgxActionStripComponent;

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

    public onMouseOver(actionStrip: IgxActionStripComponent, hierarchicalGrid: IgxHierarchicalGridComponent, event) {
        const target = event.target;
        if (target.nodeName.toLowerCase() === "igx-hierarchical-grid-cell") {
            const gridId = target.parentNode.parentNode.attributes["ng-reflect-grid-i-d"].value;
            const grid = hierarchicalGrid.hgridAPI.getChildGrids(true)
                .find(childGrid => childGrid.id === gridId) || hierarchicalGrid;
            const rowIndex = parseInt(target.attributes["data-rowindex"].value, 10);
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

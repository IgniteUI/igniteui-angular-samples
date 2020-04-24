import { Component, OnInit, ViewChild } from "@angular/core";
import {IgxGridRowComponent, IgxIconService, IgxTreeGridComponent, RowPinningPosition } from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { icons } from "../../grid/services/svgIcons";
import { generateEmployeeFlatData, IEmployee } from "../data/employees-flat";

const FILTERING_ICONS_FONT_SET = "filtering-icons";
@Component({
    selector: "app-tree-grid-row-pinning",
    styleUrls: ["tree-grid-row-pinning-sample.component.scss"],
    templateUrl: "tree-grid-row-pinning-sample.component.html"
})
export class TreeGridRowPinningSampleComponent implements OnInit {

    public data: IEmployee[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top };
    @ViewChild("treeGrid", { static: true }) public treeGrid1: IgxTreeGridComponent;

    constructor(private iconService: IgxIconService) {}

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            // tslint:disable:max-line-length
            { field: "Name", label: "Full Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "Age", label: "Age", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "number" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === "pin" || icon.name === "unpin");
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
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

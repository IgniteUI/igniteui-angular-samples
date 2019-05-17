import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { IgxIconModule, SortingDirection } from "igniteui-angular";

interface ICopyData {
    data: any;
}
@Component({
    selector: "contextmenu",
    styleUrls: ["./contextmenu.component.scss"],
    templateUrl: "./contextmenu.component.html"
})
export class ContextmenuComponent implements OnInit {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public multiCell;

    @Output()
    public onCellValueCopy = new EventEmitter<ICopyData>();

    public divX;
    public sortDir: SortingDirection;
    public divY;
    public selectedData: ICopyData;
    public chooseType: boolean = false;
    public isDivFocused = false;

    constructor() { }

    public sort(eventArgs) {
        this.cell.grid.sort({ fieldName: this.cell.column.field, dir: this.sortDir, ignoreCase: true });
        this.sortDir = this.sortDir === 1 ? 2 : 1;
    }

    public clearSort(eventArgs) {
        this.cell.grid.clearSort(this.cell.column.field);
    }

    public isColumnSortable() {
        return this.cell.column.sortable;
    }

    public clearAll(eventArgs) {
        this.cell.grid.clearSort();
    }

    public hasSortedColumn() {
        if (this.isColumnSortable() && this.cell.grid.sortingExpressions.length > 0 &&
        this.cell.grid.sortingExpressions.find((expr) => expr.fieldName === this.cell.column.field)) {
            return true;
        }
        return false;
    }

    public hasMutliSortedColumns() {
        if (this.isColumnSortable()) {
            if (this.cell.grid.sortingExpressions && this.cell.grid.sortingExpressions.length > 1) {
                return true;
            }
        }
        return false;
    }

    public copySelectedCellData(event) {
        const selectedData = { [this.cell.column.field]: this.cell.value };
        this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copyRowData(event) {
        const selectedData = this.cell.row.rowData ;
        this.copyData(JSON.stringify(this.cell.row.rowData));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copySelectedCells(event) {
        const selectedData = this.multiCell.data;
        this.copyData(JSON.stringify(selectedData));
        this.onCellValueCopy.emit({ data: selectedData });
    }

    public copySelectedRowsData(event) {
        const res = [];
        for (let i = this.multiCell.rowStart; i <= this.multiCell.rowEnd; i++) {
            res.push(this.multiCell.selectionStart.grid.data[i]);
        }
        this.copyData(JSON.stringify(res));
        this.onCellValueCopy.emit({ data: res});
    }

    public ngOnInit() {
        if (this.cell && this.cell.column.sortable) {
            const colExpr = this.cell.grid.sortingExpressions.find((expr) => expr.fieldName === this.cell.column.field);
            if (colExpr) {
                this.sortDir = colExpr.dir === 1 ? 2 : 1;
            } else {
                this.sortDir = 1;
            }
        }
    }

    private copyData(data) {
        const tempElement = document.createElement("input");
        document.body.appendChild(tempElement);
        tempElement.setAttribute("id", "temp_id");
        (document.getElementById("temp_id") as HTMLInputElement).value = data;
        tempElement.select();
        document.execCommand("copy");
        document.body.removeChild(tempElement);
    }
}

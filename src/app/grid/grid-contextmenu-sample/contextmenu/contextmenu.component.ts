import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { IgxIconModule, SortingDirection } from "igniteui-angular";

enum SortingType {
    SINGLE = "Single",
    MULTI = "Multiple"
}

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
    public type: typeof SortingType = SortingType;
    public sortingType: SortingType = window.sessionStorage.sortType ?
        window.sessionStorage.sortType : SortingType.SINGLE;
    public chooseType: boolean = false;
    public isDivFocused = false;

    @ViewChild("multiCellTemplate", { read: TemplateRef })
    protected initialsTemplate: TemplateRef<any>;

    constructor() { }

    public sort(eventArgs) {
        if (this.sortingType === SortingType.MULTI) {
            this.cell.grid.sort({ fieldName: this.cell.column.field, dir: this.sortDir, ignoreCase: true });
        } else {
            this.cell.grid.columns.forEach((col) => {
                if (!(col.field === this.cell.column.fieldName)) {
                    this.cell.grid.clearSort(col.field);
                }
            });
            this.cell.grid.sort({ fieldName: this.cell.column.field, dir: this.sortDir, ignoreCase: true });
        }

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
        return this.isColumnSortable() ? this.cell.grid.sortingExpressions.length > 0 : false;
    }

    public hasMutliSortedColumns() {
        if (this.isColumnSortable()) {
            if (this.cell.grid.sortingExpressions && this.cell.grid.sortingExpressions.length > 1) {
                return true;
            }
        }
        return false;
    }

    public setSortingType(event: SortingType) {
        if (!(event === this.sortingType)) {
            window.sessionStorage.sortType = event;
            this.sortingType = event;
            this.cell.grid.clearSort();
        }

        this.chooseType = false;
    }

    public open(icon) {
        this.chooseType = true;
        this.divX = icon.el.nativeElement.getClientRects()[0].x + 20;
        this.divY = icon.el.nativeElement.getClientRects()[0].y;
    }

    public close($event) {
        setTimeout(() => {
            if (this.isDivFocused === false) {
                this.chooseType = false;
            }
        }, 100);
    }

    public copySelectedCellData(event) {
        this.onCellValueCopy.emit({data: {[this.cell.column.field]: this.cell.value}});
    }

    public copySelectedCells(event) {
        const res = [];
        this.multiCell.forEach((cell) => {
            res.push({ [cell.column.field]: cell.value });
        });
        this.onCellValueCopy.emit({ data: res });
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
}

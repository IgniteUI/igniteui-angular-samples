import { AfterViewInit, Directive, Inject, Input, NgZone } from "@angular/core";
import { IgxGridCellComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";

export interface IgxCellData {
    value: any;
    column: string;
    cellID: {
        rowID: any;
        columnID: number;
        rowIndex: number;
    };
}

export enum CellFormatType {
    NUMERIC = "numeric",
    TEXT = "text",
    COMPOSITE = "composite"
}

@Directive({
    selector: "[conditionalFormating]"
})
export class ConditionalFormatingDirective implements AfterViewInit {

    public maxValue;
    @Input()
    public set selectionRange(range: GridSelectionRange) {
        const selectedData = []
        if (range) {
            console.log(range)
            this.range = range;
            let minCol;
            let minRow;
            let maxValue;
            let cellForComparison;
            let textCells;
            let numericData;
            const selectedData = this.grid.getSelectedData().reduce((accumulator, currentValue) => {
                return Object.values(accumulator).concat(Object.values(currentValue));
            });

            this.zone.runOutsideAngular(() => {

                // tslint:disable: max-line-length
                numericData = selectedData.filter(value => typeof  value === "number");
                textCells = selectedData.filter(value => typeof value === "string");
                if (numericData.length === 0) {
                    this.formatType = CellFormatType.TEXT;
                    minCol = range.columnStart;
                    minRow = range.rowStart;
                    cellForComparison = {rowID: minRow, colID: minCol};
                } else if (textCells.length === 0) {
                    this.formatType = CellFormatType.NUMERIC;
                    maxValue = Math.max(...numericData);
                    this.maxValue = maxValue;
                    this._warnValue = (66 / Math.floor(this.maxValue)) * 100;
                    this._errorValue =(33 / Math.floor(this.maxValue)) * 100;
                } else {
                    minCol = range.columnStart;
                    minRow = range.rowStart;
                    cellForComparison = {rowID: minRow, colID: minCol};
                    maxValue = Math.max(...numericData);
                    this.maxValue = maxValue;
                    this.formatType = CellFormatType.COMPOSITE;
                    this._warnValue = (66 / Math.floor(this.maxValue)) * 100;
                    this._errorValue =(33 / Math.floor(this.maxValue)) * 100;
                }
            });
        }

    }

    public getPercantage(value) {
        return (Math.floor(value) / Math.floor(this.maxValue)) * 100;
    }

    // tslint:disable: member-ordering
    public colorScale = {
        background: (rowData, coljey, cellValue, rowIndex) => {
            if (this.isWithingRange(rowData[this.grid.primaryKey], coljey)) {
                let percentage = this.getPercantage(cellValue);
                return this._errorValue >= percentage ? this._errorColor :
                       this._warnValue >= percentage ? this._warningColor : this._successColor;
            }
        }
    };

    private _successColor = "#4eb862";
    private _warningColor = "#fbb13c";
    private _errorColor = "#ff134a";
    private formatType;
    private _errorValue;
    private _warnValue;
    private range: GridSelectionRange;
    constructor(@Inject(IgxGridComponent) public grid: IgxGridComponent, private zone: NgZone) {
    }

    public formatCells() {
        for (let index = (this.range.columnStart as number); index <= this.range.columnEnd; index++) {
            const col = this.grid.visibleColumns[index];
            col.cellStyles = this.colorScale;
        }
    }
    public ngAfterViewInit() {

    }

    private isWithingRange(rowId, columnName) {
        const columnIndex = this.grid.getColumnByName(columnName).visibleIndex;
        return rowId >= this.range.rowStart &&
               rowId <= this.range.rowEnd &&
               columnIndex >= this.range.columnStart &&
               columnIndex <= this.range.columnEnd;
    }
}

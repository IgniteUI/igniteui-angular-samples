import { AfterViewInit, Directive, Inject, Input, NgZone, Optional } from "@angular/core";
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

    public set range(range: GridSelectionRange) {
        if (range) {
            this._range = range;
            let minCol;
            let minRow;
            let maxValue;
            const selectedData = this.grid.getSelectedData().reduce((accumulator, currentValue) => {
                return Object.values(accumulator).concat(Object.values(currentValue));
            });
            this._selectedData = selectedData;
            this.zone.runOutsideAngular(() => {

                // tslint:disable: max-line-length
                this._numericData = selectedData.filter(value => typeof  value === "number");
                this._textData = selectedData.filter(value => typeof value === "string");
                if (this._numericData.length === 0) {
                    this.formatType = CellFormatType.TEXT;
                    minCol = range.columnStart;
                    minRow = range.rowStart;
                    this._cellValueForComparison = {minRow, minCol};

                } else if (this._textData.length === 0) {
                    this.formatType = CellFormatType.NUMERIC;
                    maxValue = Math.max(...this._numericData);
                    this._maxValue = maxValue;
                    this._warnValue = this.middleTresholdValue();
                    this._errorValue = this.lowTresholdValue();
                    this._top10Value = this.top10PercentTreshold();
                    this._averageValue = this.getAvgValue(this._numericData);
                } else {
                    minCol = range.columnStart;
                    minRow = range.rowStart;
                    this._cellValueForComparison = this.grid.getCellByColumn(minRow, this.grid.visibleColumns[minCol].field);
                    maxValue = Math.max(...this._numericData);
                    this._maxValue = maxValue;
                    this.formatType = CellFormatType.COMPOSITE;
                    this._warnValue = this.middleTresholdValue();
                    this._errorValue = this.lowTresholdValue();
                    this._top10Value = this.top10PercentTreshold();
                    this._averageValue = this.getAvgValue(this._numericData);
                }
            });
        }

    }

    public get range() {
        return this._range;
    }

    public colorScale = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                return this._errorValue >= cellValue ? this._errorColor :
                       this._warnValue >= cellValue ? this._warningColor : this._successColor;
            }
        }
    };

    public dataBars = {
        backgroundImage: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                return `linear-gradient(90deg, rgb(0, 194, 255) ${this.getPercentage(cellValue)}%, transparent 0%)`;
            }
        }
    };

    public top10Percent = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue >= this._top10Value) {
                    return this._top10Color;
            }
        }
    };

    public greaterThan = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
                    return this._averageColor;
            }
        }
    };

    public empty = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue === undefined) {
                    return this._errorColor;
            }
        }
    };

    public duplicates = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ? this._warningColor : ""; });
                return color;
            }
        }
    };

    public textContains = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && rowIndex === this._cellValueForComparison.minRow) {
                return this._warningColor;
            }
        }
    };

    public uniques = {
        background: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ? this._warningColor : ""; });
                return color;
            }
        }
    };

    private formatType;
    private _successColor = "rgba(78, 184, 98, .7)";
    private _warningColor = "rgba(251,177,60, .7)";
    private _errorColor = "rgba(255,19,74, .7)";
    private _top10Color = "rgb(78, 184, 98)";
    private _averageColor = "rgba(78, 184, 98, .5)";
    private _top10Value;
    private _errorValue;
    private _warnValue;
    private _averageValue;
    private _range: GridSelectionRange;
    private _maxValue;
    private _selectedData;
    private _numericData;
    private _textData;
    private _cellValueForComparison;
    constructor(@Inject(IgxGridComponent) public grid: IgxGridComponent, private zone: NgZone) {
    }

    public formatCells() {
          this.grid.visibleColumns.forEach(c => {
              c.cellStyles = null;
              this.grid.cdr.detectChanges();
              if (c.visibleIndex >= this.range.columnStart && c.visibleIndex <= this.range.columnEnd) {
                  c.cellStyles = this.textContains;
              }
          });
    }

    public ngAfterViewInit() {

    }

    private isWithingRange(rowId) {
        return rowId >= this.range.rowStart &&
               rowId <= this.range.rowEnd;
    }

    private middleTresholdValue() {
        return (66 * Math.floor(this._maxValue)) / 100;
    }

    private lowTresholdValue() {
        return (33 * Math.floor(this._maxValue)) / 100;
    }

    private top10PercentTreshold() {
        return (10 * Math.floor(this._maxValue)) / 100;
    }

    private getAvgValue(data: number[]) {
        return Math.floor((data.reduce((a, b) => a + b , 0)) / data.length);
    }

    private getPercentage(val) {
        return (Math.ceil(val) / Math.ceil(this._maxValue)) * 100;
    }
}

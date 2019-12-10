import { AfterViewInit, Directive, EventEmitter, Inject, Input, NgZone, Output } from "@angular/core";
import { IgxColumnComponent, IgxGridCellComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";

export enum CellFormatType {
    NUMERIC = "number",
    TEXT = "string",
    COMPOSITE = "composite"
}

@Directive({
    selector: "[conditionalFormating]"
})
export class ConditionalFormatingDirective {

    public set range(range: GridSelectionRange) {
        if (range) {
            this._range = range;

            let maxValue;
            let minValue;
            const formattersName = ["Duplicate Values", "Unique Values", "Empty Values"];
            const selectedData = this.grid.getSelectedData().reduce((accumulator, currentValue) => {
                return Object.values(accumulator).concat(Object.values(currentValue));
            });
            this._selectedData = selectedData;
            this.zone.runOutsideAngular(() => {

                // tslint:disable: max-line-length
                this._numericData = selectedData.filter(value => typeof value === "number");
                this._textData = selectedData.filter(value => typeof value === "string");
                if (this._numericData.length === 0) {
                    this.formatType = CellFormatType.TEXT;
                    this._valueForComparison = this._textData[0];
                    formattersName.splice(0, 0, ...this._textFormatters);
                } else if (this._textData.length === 0) {
                    this.formatType = CellFormatType.NUMERIC;
                    maxValue = Math.max(...this._numericData);
                    minValue = Math.min(...this._numericData);
                    this._maxValue = maxValue;
                    this._minValue = minValue;
                    this._warnValue = this.middleTresholdValue();
                    this._errorValue = this.lowTresholdValue();
                    this._top10Value = this.top10PercentTreshold();
                    this._averageValue = this.getAvgValue(this._numericData);
                    formattersName.splice(0, 0, ...this._numericFormatters);
                } else {
                    this._valueForComparison = this._textData[0];
                    maxValue = Math.max(...this._numericData);
                    minValue = Math.min(...this._numericData);
                    this._maxValue = maxValue;
                    this._minValue = minValue;
                    this.formatType = CellFormatType.COMPOSITE;
                    this._warnValue = this.middleTresholdValue();
                    this._errorValue = this.lowTresholdValue();
                    this._top10Value = this.top10PercentTreshold();
                    this._averageValue = this.getAvgValue(this._numericData);
                    formattersName.splice(0, 0, "Data Bars", "Color Scale", "Text Contains");
                }
            });
            this.onFormattersReady.emit(formattersName);
        }

    }

    public get range() {
        return this._range;
    }

    @Output()
    public onFormattersReady = new EventEmitter<string[]>();

    public colorScale = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
        }
            if (this.isWithingRange(rowIndex)) {
                return this._errorValue >= cellValue ? this._errorColor :
                    this._warnValue >= cellValue ? this._warningColor : this._successColor;
            }
        }
    };

    public dataBars = {
        backgroundImage: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                    return;
            }
            if (this.isWithingRange(rowIndex)) {
                if (cellValue < 0) {
                    return `linear-gradient(to left, rgb(255, 0, 0) ${this.getNegativePercentage(cellValue)}%, transparent 0%)`;
                } else if (cellValue < 1) {
                    return `linear-gradient(90deg, rgb(0, 194, 255) ${1}%, transparent 0%)`;
                } else {
                    return `linear-gradient(90deg, rgb(0, 194, 255) ${this.getPositivePercentage(cellValue)}%, transparent 0%)`;
                }
            }
        },
        backgroundSize: "90% 70%",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center"
    };

    public top10Percent = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
        }
            if (this.isWithingRange(rowIndex) && cellValue > this._top10Value) {
                return this._top10Color;
            }
        }
    };

    public greaterThan = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "number") {
                return;
        }
            if (this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
                return this._averageColor;
            }
        }
    };

    public empty = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue === undefined) {
                return this._errorColor;
            }
        }
    };

    public duplicates = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ? this._warningColor : "";
                });
                return color;
            }
        }
    };

    public textContains = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue !== "string") {
                return;
        }
            if (this.isWithingRange(rowIndex) && cellValue.toLowerCase().indexOf(this._valueForComparison.toLowerCase()) !== -1) {
                return this._warningColor;
            }
        }
    };

    public uniques = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const color = this.zone.runOutsideAngular(() => {
                    const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                    return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ? this._warningColor : "";
                });
                return color;
            }
        }
    };

    private formatType;
    private _successColor = "rgba(78, 184, 98, .7)";
    private _warningColor = "rgba(251,177,60, .7)";
    private _errorColor = "rgba(255,19,74, .7)";
    private _top10Color = "rgb(78, 150, 98)";
    private _averageColor = "rgba(78, 184, 98, .5)";
    private _numericFormatters = ["Data Bars", "Color Scale", "Top 10%", "Greater Than"];
    private _textFormatters = ["Text Contains"];

    private _minValue;
    private _top10Value;
    private _errorValue;
    private _warnValue;
    private _averageValue;
    private _range: GridSelectionRange;
    private _maxValue;
    private _selectedData;
    private _numericData;
    private _textData;
    private _valueForComparison;
    private _formattersData = new Map<string, any>();

    constructor(@Inject(IgxGridComponent) public grid: IgxGridComponent, private zone: NgZone) {
        this._formattersData.set("Data Bars", this.dataBars);
        this._formattersData.set("Color Scale", this.colorScale);
        this._formattersData.set("Greater Than", this.greaterThan);
        this._formattersData.set("Top 10%", this.top10Percent);
        this._formattersData.set("Text Contains", this.textContains);
        this._formattersData.set("Duplicate Values", this.duplicates);
        this._formattersData.set("Unique Values", this.uniques);
        this._formattersData.set("Empty Values", this.empty);
    }

    public formatCells(formatterName) {
        const formatter = this._formattersData.get(formatterName);
        const formatType = this._numericFormatters.indexOf(formatterName) !== -1 ? CellFormatType.NUMERIC :
                           this._textFormatters.indexOf(formatterName) !== - 1 ? CellFormatType.TEXT : CellFormatType.COMPOSITE;
        this.grid.visibleColumns.forEach(c => {
            if (!(c.visibleIndex >= this.range.columnStart && c.visibleIndex <= this.range.columnEnd)) {
                this.removeFormatting(c);
            } else {
                this.applyFormatting(c, formatType, formatter);
            }
        });

    }

    public clearFormatting() {
        this.grid.visibleColumns.forEach(c => {
            c.cellStyles = null;
            this.grid.notifyChanges();
        });
    }

    public removeFormatting(column) {
        column.cellStyles = null;
        this.grid.notifyChanges();
    }

    private applyFormatting(column: IgxColumnComponent, type: CellFormatType, formatter: any) {
        if ((column.dataType as string) === (type as string) || type === CellFormatType.COMPOSITE) {
            column.cellStyles = formatter;
            this.grid.notifyChanges();
        }
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
        return (90 * Math.floor(this._maxValue)) / 100;
    }

    private getAvgValue(data: number[]) {
        return Math.floor((data.reduce((a, b) => a + b, 0)) / data.length);
    }

    private getPositivePercentage(val) {
        const result = (Math.ceil(val) / Math.ceil(this._maxValue)) * 100;
        return result < 1 ? 1 : result;
    }

    private getNegativePercentage(val) {
        const result = (val / this._minValue) * 100;
        return result;
    }
}

import {  Directive, EventEmitter, Inject, NgZone, Output } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";

export enum CellFormatType {
    NUMERIC = "number",
    TEXT = "string",
    COMPOSITE = "composite"
}

export interface IFormatColors {
    success: string;
    error: string;
    info: string;
    warning: string;
    text: string;
}

@Directive({
    selector: "[conditionalFormatting]"
})
export class ConditionalFormattingDirective {

    public set range(range: GridSelectionRange) {
        if (range) {
            this._range = range;
            this.ensureValues();
        }
    }

    public get range() {
        return this._range;
    }

    @Output()
    public onFormattersReady = new EventEmitter<string[]>();

    public colorScale = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (!(typeof cellValue === "number" && this.isWithingRange(rowIndex))) { return; }
            return this._errorValue >= cellValue ? this._formatColors.error :
                this._warnValue >= cellValue ? this._formatColors.warning :  this._formatColors.success;
        }
    };

    public dataBars = {
        backgroundImage: (rowData, colname, cellValue, rowIndex) => {
            if (!(typeof cellValue === "number" && this.isWithingRange(rowIndex))) { return; }
            const treshold = this.setTreshold(this._minValue);
            let gradientPercents;
            if (cellValue < 0) {
                const negativeStartingPoint = 100 - treshold;
                gradientPercents = this.getNegativePercentage(cellValue);
                return `linear-gradient(to left, transparent 0% ${negativeStartingPoint}%,
                    ${ this._formatColors.error} ${negativeStartingPoint}% ${negativeStartingPoint + gradientPercents}%,
                    transparent ${gradientPercents}% 100%)`;
            } else {
                gradientPercents = this.getPositivePercentage(cellValue);
                return `linear-gradient(to right, transparent 0% ${treshold}%,
                    ${ this._formatColors.success} ${treshold}% ${treshold + gradientPercents}%,
                    transparent ${treshold + gradientPercents}% 100%)`;
            }
        },
        backgroundSize: "100% 80%",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center"
    };

    public top10Percent = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue === "number" && this.isWithingRange(rowIndex) && cellValue > this._top10Value) {
                return  this._formatColors.info;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue === "number" && this.isWithingRange(rowIndex) && cellValue > this._top10Value) {
                return  this._formatColors.text;
            }
        }
    };

    public greaterThan = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue === "number" && this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
                return  this._formatColors.info;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue === "number" && this.isWithingRange(rowIndex) && cellValue > this._averageValue) {
                return  this._formatColors.text;
            }
        }
    };

    public empty = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue === undefined) {
                return  this._formatColors.info;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue === undefined) {
                return  this._formatColors.text;
            }
        }
    };

    public duplicates = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ?  this._formatColors.info : "";
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ?  this._formatColors.text : "";
            }
        }
    };

    public textContains = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue === "string" && this.isWithingRange(rowIndex) &&
            cellValue.toLowerCase().indexOf(this._valueForComparison.toLowerCase()) !== -1) {
                return  this._formatColors.info;
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (typeof cellValue === "string" && this.isWithingRange(rowIndex) &&
            cellValue.toLowerCase().indexOf(this._valueForComparison.toLowerCase()) !== -1) {
                return  this._formatColors.text;
            }
        }
    };

    public uniques = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ?  this._formatColors.info : "";
            }
        },
        color: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex)) {
                const arr: any[] = typeof cellValue === "number" ? this._numericData : this._textData;
                return arr.indexOf(cellValue) === arr.lastIndexOf(cellValue) ?  this._formatColors.text : "";
            }
        }
    };

    private formatType;
    private _formatColors: IFormatColors = {
        success: "#4EB862",
        error: "#FF134A",
        warning: "#FBB13C",
        info: "#1377D5",
        text: "#FFF"
    };
    private _numericFormatters = ["Data Bars", "Color Scale", "Top 10", "Greater Than"];
    private _textFormatters = ["Text Contains"];
    private _commonFormattersName = ["Duplicate Values", "Unique Values", "Empty"];
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
        this._formattersData.set("Top 10", this.top10Percent);
        this._formattersData.set("Text Contains", this.textContains);
        this._formattersData.set("Duplicate Values", this.duplicates);
        this._formattersData.set("Unique Values", this.uniques);
        this._formattersData.set("Empty", this.empty);
    }

    public formatCells(formatterName) {
        this.clearFormatting();
        const formatter = this._formattersData.get(formatterName);
        const formatType = this._numericFormatters.indexOf(formatterName) !== -1 ? CellFormatType.NUMERIC :
            this._textFormatters.indexOf(formatterName) !== - 1 ? CellFormatType.TEXT : CellFormatType.COMPOSITE;
        this.grid.visibleColumns.forEach(c => {
            if (c.visibleIndex >= this.range.columnStart && c.visibleIndex <= this.range.columnEnd) {
                this.applyFormatting(c, formatType, formatter);
            }
        });
    }

    public clearFormatting() {
        // should clear the style for the cells inside the selected range ????
        this.grid.visibleColumns.forEach(c => {
            c.cellStyles = undefined;
            this.grid.cdr.detectChanges();
        });
    }

    public ensureValues() {
        const selectedData = this.toArray(this.grid.getSelectedData());
        this.zone.runOutsideAngular(() => {
            this._numericData = selectedData.filter(value => typeof value === "number");
            this._textData = selectedData.filter(value => typeof value === "string");
            if (this._numericData.length === 0) {
                this.formatType = CellFormatType.TEXT;
                this._valueForComparison = this._textData[0];
            } else if (this._textData.length === 0) {
                this.formatType = CellFormatType.NUMERIC;
                this.recalcValues();
            } else {
                this.formatType = CellFormatType.COMPOSITE;
                this._valueForComparison = this._textData[0];
                this.recalcValues();
            }
        });
    }

    public determineFormatters() {
        const selectedData = this.toArray(this.grid.getSelectedData());
        const hasNumericValues = selectedData.some((val) => typeof val === "number");
        const hasTextData = selectedData.some((val) => typeof val === "string");

        if (!hasNumericValues && hasTextData) {
            this._commonFormattersName.splice(0, 0, ...this._textFormatters);
        } else if (hasNumericValues && !hasTextData) {
            this._commonFormattersName.splice(0, 0, ...this._numericFormatters);
        } else {
            this._commonFormattersName.splice(0, 0, "Data Bars", "Color Scale", "Text Contains");
        }
        this.onFormattersReady.emit(this._commonFormattersName);
    }

    private applyFormatting(column: IgxColumnComponent, type: CellFormatType, formatter: any) {
        // if ((column.dataType as string) === (type as string) || type === CellFormatType.COMPOSITE) {
            column.cellStyles = formatter;
            this.grid.notifyChanges();
        // }
    }

    private recalcValues() {
        this._maxValue = Math.max(...this._numericData);
        this._minValue = Math.min(...this._numericData.filter(value => value < 0)) | 0;
        this._warnValue = this.middleTresholdValue();
        this._errorValue = this.lowTresholdValue();
        this._top10Value = this.top10PercentTreshold();
        this._averageValue = this.getAvgValue(this._numericData);
    }

    private isWithingRange(rowIndex) {
        return rowIndex >= this.range.rowStart &&
        rowIndex <= this.range.rowEnd;
    }

    private middleTresholdValue() {
        return (66 * Math.ceil(this._maxValue)) / 100;
    }

    private lowTresholdValue() {
        return (33 * Math.ceil(this._maxValue)) / 100;
    }

    private top10PercentTreshold() {
        return (90 * Math.ceil(this._maxValue)) / 100;
    }

    private getAvgValue(data: number[]) {
        return Math.ceil((data.reduce((a, b) => a + b, 0)) / data.length);
    }

    private getPositivePercentage(val) {
        const result = (Math.ceil(val) / (this._maxValue + Math.abs(this._minValue))) * 100;
        return Math.ceil(result);
    }

    private getNegativePercentage(val) {
        const result = (Math.abs(val) / (this._maxValue + Math.abs(this._minValue))) * 100;
        return Math.ceil(result);
    }

    private setTreshold(value) {
        return Math.ceil((Math.abs(value) / (this._maxValue + Math.abs(this._minValue))) * 100);
    }

    private toArray(data) {
        let result = [];
        data.forEach(rec => result = result.concat(Object.values(rec)));
        return result;
    }
}

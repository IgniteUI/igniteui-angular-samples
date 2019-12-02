import { AfterViewInit, Directive, Inject, Input, NgZone, Output, EventEmitter } from "@angular/core";
import { IgxGridCellComponent, IgxGridComponent } from "igniteui-angular";
import { GridSelectionRange } from "igniteui-angular/lib/grids/selection/selection.service";

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
            const formattersName = ["Duplicate Values", "Unique Values", "Empty Values"];
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
                    this._valueForComparison = this._textData[0];
                    formattersName.splice(0, 0, ...this._textFormatters);
                } else if (this._textData.length === 0) {
                    this.formatType = CellFormatType.NUMERIC;
                    maxValue = Math.max(...this._numericData);
                    this._maxValue = maxValue;
                    this._warnValue = this.middleTresholdValue();
                    this._errorValue = this.lowTresholdValue();
                    this._top10Value = this.top10PercentTreshold();
                    this._averageValue = this.getAvgValue(this._numericData);
                    formattersName.splice(0, 0, ...this._numericFormatters);
                } else {
                    minCol = range.columnStart;
                    minRow = range.rowStart;
                    this._valueForComparison = this._textData[0];
                    maxValue = Math.max(...this._numericData);
                    this._maxValue = maxValue;
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
    public onFormattersReady =  new EventEmitter<string[]>();

    public colorScale = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
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
        },
        backgroundSize: "90% 70%",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center"
    };

    public top10Percent = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
            if (this.isWithingRange(rowIndex) && cellValue >= this._top10Value) {
                    return this._top10Color;
            }
        }
    };

    public greaterThan = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
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
                    return arr.indexOf(cellValue) !== arr.lastIndexOf(cellValue) ? this._warningColor : ""; });
                return color;
            }
        }
    };

    public textContains = {
        backgroundColor: (rowData, colname, cellValue, rowIndex) => {
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

    private _numericFormatters = ["Data Bars", "Color Scale", "Top 10%", "Greater Than"];
    private _textFormatters =  ["Text Contains"];

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
          this.grid.visibleColumns.forEach(c => {
              if (!(c.visibleIndex >= this.range.columnStart && c.visibleIndex <= this.range.columnEnd)) {
                    c.cellStyles = null;
                    this.grid.cdr.detectChanges();
              } else if (this._numericFormatters.indexOf(formatterName) !== -1) {
                      if (c.dataType === "number") {
                          if (c.cellStyles) {
                              c.cellStyles = {...c.cellStyles, ...formatter };
                              console.log(c.cellStyles)
                          } else {
                              c.cellStyles = formatter;
                          }
                          this.grid.notifyChanges();
                      }

              } else if (this._textFormatters.indexOf(formatterName) !== -1) {
                if (c.dataType === "string") {
                    c.cellStyles = formatter;
                  }
              } else {
                c.cellStyles = formatter;
              }
          });

    }

    public clearFormatting() {
        this.grid.visibleColumns.forEach(c => {
            c.cellStyles = null;
            this.grid.cdr.detectChanges();
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
        return (90 * Math.floor(this._maxValue)) / 100;
    }

    private getAvgValue(data: number[]) {
        return Math.floor((data.reduce((a, b) => a + b , 0)) / data.length);
    }

    private getPercentage(val) {
        return (Math.ceil(val) / Math.ceil(this._maxValue)) * 100;
    }
}

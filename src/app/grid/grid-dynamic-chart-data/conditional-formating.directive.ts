import { AfterViewInit, Directive, NgZone, Input, Inject } from "@angular/core";
import { IgxGridComponent, IgxGridCellComponent } from "igniteui-angular";
import { GridSelectionRange } from 'igniteui-angular/lib/grids/selection/selection.service';

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

    private _successColor = "#4eb862";
    private _warningColor = "#fbb13c";
    private _errorColor = "#ff134a";
    private _cellsToFormat: IgxCellData[] = [];
    private formatType;
    constructor(@Inject(IgxGridComponent) public grid: IgxGridComponent, private zone: NgZone) {
    }

    @Input()
    public set selectionRange(range: GridSelectionRange) {
        if (range) {
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
                } else {
                    minCol = range.columnStart;
                    minRow = range.rowStart;
                    cellForComparison = {rowID: minRow, colID: minCol};
                    maxValue = Math.max(...numericData);
                    this.formatType = CellFormatType.COMPOSITE;
                }
            });
        }

    }

    ngAfterViewInit() {

    }

}

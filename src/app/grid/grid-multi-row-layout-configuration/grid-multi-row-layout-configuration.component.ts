import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
    ViewEncapsulation } from "@angular/core";
import {
    IgxDialogComponent,
    IgxDropEnterEventArgs,
    IgxDropEventArgs,
    IgxDropLeaveEventArgs,
    IgxGridComponent
} from "igniteui-angular";

class ColumnConfig {
    public key: string;
    public width: string;
    public colStart: number;
    public rowStart: number;
    public colSpan: number;
    public rowSpan: number;
    public selected: boolean;
    public hovered: boolean;
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-multi-row-layout-configuration-sample",
    styleUrls: ["./grid-multi-row-layout-configuration.component.scss"],
    templateUrl: "./grid-multi-row-layout-configuration.component.html"
})
export class GridMultiRowLayoutConfigurationComponent {

    public get layoutRowStyle() {
        let style = "";
        this.collection.forEach(() => {
            if (this.rowsHeight.indexOf("px") !== -1 ||
                this.rowsHeight.indexOf("%") !== -1 ||
                isNaN(parseInt(this.rowsHeight, 10))) {
                style += " " + this.rowsHeight;
            } else {
                style += " " + parseInt(this.rowsHeight, 10) + "px";
            }
        });
        return style;
    }

    public get layoutColsStyle() {
        let style = "";
        this.collection[0].forEach((col) => {
            for (let i = 0; i < col.colSpan; i++) {
                if (this.colsWidth.indexOf("px") !== -1 ||
                    this.colsWidth.indexOf("%") !== -1 ||
                    isNaN(parseInt(this.colsWidth, 10))) {
                    style += " " + this.colsWidth;
                } else {
                    style += " " + parseInt(this.colsWidth, 10) + "px";
                }
            }
        });
        return style;
    }

    @ViewChild("jsonDialog", { read: IgxDialogComponent })
    public jsonDialog: IgxDialogComponent;

    @ViewChild("textArea", { read: ElementRef })
    public textArea: ElementRef;

    @ViewChild("grid", { read: IgxGridComponent })
    public grid: IgxGridComponent;

    @ViewChildren("gridCell", { read: ElementRef })
    public gridCells: QueryList<ElementRef>;

    @ViewChild("resizeIndicator", { read: ElementRef })
    public resizeIndicator: ElementRef;

    public rowsCount = 3;
    public colsCount = 6;
    public rowsHeight = "32px";
    public colsWidth = "136px";
    public keyValue = "";
    public collection: ColumnConfig[][] = [];
    public gridCollection = [];
    public jsonCollection = "";
    public cellSelected;
    public resizeVisible = false;
    public resizeTop;
    public resizeLeft;
    public resizeWidth = 0;
    public resizeHeight = 0;

    public columnsList = [];
    public columnsConfiguration;

    public data = [
    ];

    private dragStarted = false;
    private dragStartX;
    private dragStartY;

    private curResizedCell;
    private colSpanIncrease = 0;
    private rowSpanIncrease = 0;
    private resizeInitialWidth = 0;
    private resizeInitialHeight = 0;
    // tslint:enable:max-line-length

    constructor(public cdr: ChangeDetectorRef) {
        this.updateCollectionSize();
    }

    public updateCollectionSize() {
        const newCollection = [];
        for (let rowIndex = 0; rowIndex < this.rowsCount; rowIndex++) {
            const row = [];
            for (let colIndex = 0; colIndex < this.colsCount; colIndex++) {
                if (this.collection[rowIndex] && this.collection[rowIndex][colIndex]) {
                    row.push(this.collection[rowIndex][colIndex]);
                } else {
                    row.push({
                        colSpan: 1,
                        colStart: colIndex + 1,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowIndex + 1,
                        width: ""
                    });
                }
            }

            newCollection.push(row);
        }
        this.collection = newCollection;
    }

    public updateCollectionLayout() {
        for (const record of this.collection) {
            let column = record[0];
            for (let colIndex = 1; colIndex < record.length; colIndex++) {
                if (record[colIndex].key === column.key &&
                        record[colIndex].key !== "") {
                    column.colSpan += record[colIndex].colSpan;
                    record.splice(colIndex, 1);
                    colIndex--;
                } else {
                    column = record[colIndex];
                }
            }
        }
    }

    public rowCountChanged(event) {
        this.rowsCount = parseInt(event.target.value, 10);
        this.updateCollectionSize();
    }

    public rowHeightChanged(event) {
        this.rowsHeight = event.target.value;
        this.cdr.detectChanges();
    }

    public colCountChanged(event) {
        this.colsCount = parseInt(event.target.value, 10);
        this.updateCollectionSize();
    }

    public colWidthChanged(event) {
        this.colsWidth = event.target.value;
    }

    public onColEnter(event: IgxDropEnterEventArgs, rowIndex, colIndex) {
        this.collection[rowIndex][colIndex].hovered = true;
    }

    public onColLeave(event: IgxDropLeaveEventArgs, rowIndex, colIndex) {
        this.collection[rowIndex][colIndex].hovered = false;
    }

    public onColDropped(event: IgxDropEventArgs, rowIndex, colIndex) {
        event.cancel = true;
        this.collection[rowIndex][colIndex].key = event.drag.data.key;
        this.updateCollectionLayout();
    }

    public flattenCollection() {
        const result = [];
        this.collection.forEach((row) => {
            row.forEach((col) => {
                const newCol = { ...col };
                delete newCol.width;
                delete newCol.hovered;
                delete newCol.selected;

                result.push(newCol);
            });
        });

        return result;
    }

    public getColumnLayoutTemplate() {
        const flatCollection = this.flattenCollection();
        let columnLayout = "<igx-column-layout>";
        flatCollection.map((row) => {
            const column =
                '\n    <igx-column [rowStart]="' + row.rowStart + '"' +
                ' [rowEnd]="' + (row.rowStart + row.rowSpan) + '"' +
                ' [colStart]="' + row.colStart + '"' +
                ' [colEnd]="' + (row.colStart + row.colSpan) + '"' +
                ' field="' + row.key + '">' +
                "\n    </igx-column>";
            columnLayout += column;
        });

        columnLayout += "\n</igx-column-layout>";

        this.jsonCollection = columnLayout;
        this.jsonDialog.open();
    }

    public renderJson() {
        const flatCollection = this.flattenCollection();
        const mappedCollection = flatCollection.map((row) => {
            return {
                colEnd: row.colStart + row.colSpan,
                colStart: row.colStart,
                key: row.key,
                rowEnd: row.rowStart + row.rowSpan,
                rowStart: row.rowStart
            };
        });
        this.jsonCollection = JSON.stringify(mappedCollection);
        this.jsonDialog.open();
    }

    public addColumn() {
        if (this.keyValue === "") {
            return;
        }

        this.columnsList.push({
            field: this.keyValue,
            key: this.keyValue
        });

        this.keyValue = "";
    }

    public copyToClipboard() {
        this.textArea.nativeElement.select();
        document.execCommand("copy");
    }

    public clickCell(cellRef, rowIndex, colIndex) {
        this.cellSelected = this.collection[rowIndex][colIndex];
        this.cellSelected.selected = true;

        this.resizeTop = cellRef.offsetTop;
        this.resizeLeft = cellRef.offsetLeft;
        this.resizeHeight = cellRef.offsetHeight;
        this.resizeWidth = cellRef.offsetWidth;
        this.resizeInitialHeight = this.resizeHeight;
        this.resizeInitialWidth = this.resizeWidth;
        this.resizeVisible = true;
    }

    public onBlur(event, rowIndex, colIndex) {
        this.cellSelected = null;
        this.collection[rowIndex][colIndex].selected = false;
        this.resizeVisible = false;
    }

    public pointerDownResize(event, rowIndex, colIndex) {
        this.dragStarted = true;
        this.dragStartX = event.pageX;
        this.dragStartY = event.pageY;
        this.curResizedCell = this.collection[rowIndex][colIndex];

        event.target.setPointerCapture(event.pointerId);
    }

    public pointerMoveResizeLeft(event, cellRef, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = this.dragStartX - event.pageX;
            const minIncrease = -this.curResizedCell.colSpan;
            const maxIncrease = colIndex;
            this.colSpanIncrease = Math.min(Math.round(curDistance / parseInt(this.colsWidth, 10)), maxIncrease);
            this.colSpanIncrease = Math.max(this.colSpanIncrease, minIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * parseInt(this.colsWidth, 10);
            this.resizeLeft = cellRef.offsetLeft - this.colSpanIncrease * parseInt(this.colsWidth, 10);
        }
    }

    public pointerMoveResizeRight(event, cellRef, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = event.pageX - this.dragStartX;
            const maxIncrease = this.colsCount - (colIndex + this.curResizedCell.colSpan);
            this.colSpanIncrease = Math.min(Math.round(curDistance / parseInt(this.colsWidth, 10)), maxIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * parseInt(this.colsWidth, 10);
        }
    }

    public pointerUpResizeRight(event, cellRef, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;

        if (this.colSpanIncrease > 0) {
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const nextCell = this.collection[rowIndex][colIndex + 1];
                if ((this.curResizedCell.colStart + this.curResizedCell.colSpan + i) !==
                        (nextCell.colStart || nextCell.rowSpan > 1)) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (this.collection[rowIndex][colIndex + 1].colSpan > 1) {
                    this.collection[rowIndex][colIndex + 1].colStart++;
                    this.collection[rowIndex][colIndex + 1].colSpan--;
                } else {
                    this.collection[rowIndex].splice(colIndex + 1, 1);
                }
            }

            if (this.curResizedCell.rowSpan > 1) {
                for (let row = this.curResizedCell.rowStart;
                        row < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        row++) {
                    for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                        let borderCellIndex = 0;
                        const borderCell = this.collection[row].find((cell, index) => {
                            borderCellIndex = index;
                            return cell.colStart === this.curResizedCell.colStart +
                                this.curResizedCell.colSpan + spanIndex;
                        });
                        if (borderCell) {
                            if (borderCell.colSpan > 1) {
                                borderCell.colStart++;
                                borderCell.colSpan--;
                            } else {
                                this.collection[row].splice(borderCellIndex, 1);
                            }
                        }
                    }
                }
            }

            this.curResizedCell.colSpan += this.colSpanIncrease;
        } else if (this.colSpanIncrease < 0) {
            this.colSpanIncrease = -1 * Math.min(-1 * this.colSpanIncrease, this.curResizedCell.colSpan);
            const rowEndIndex = this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;

            for (let rowUpdateIndex = rowIndex; rowUpdateIndex < rowEndIndex; rowUpdateIndex++) {
                const firstHalf = [];
                for (const record of this.collection[rowUpdateIndex]) {
                    if (record.colStart <
                            this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = this.collection[rowUpdateIndex].slice(firstHalf.length);
                for (let i = 0; i < -1 * this.colSpanIncrease; i++) {
                    secondHalf.unshift({
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + this.curResizedCell.colSpan - i - 1,
                        hovered: false,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowUpdateIndex + 1,
                        selected: false,
                        width: ""
                    });
                }

                this.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);

            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            if (this.curResizedCell.colSpan === 0) {
                this.collection[rowIndex].splice(colIndex + this.curResizedCell.colSpan, 1);
            }
        }
        this.colSpanIncrease = 0;
    }

    public pointerUpResizeLeft(event, cellRef, targetRowIndex, targetColIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;

        const curIndexFromEnd = this.collection[targetRowIndex].length - targetColIndex - 1;
        if (this.colSpanIncrease > 0) {
            // Handle first row
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const curIndexFromStart = this.collection[targetRowIndex].length - curIndexFromEnd - 1;
                const prevCell = this.collection[targetRowIndex][curIndexFromStart - 1];
                if (prevCell.colStart + prevCell.colSpan + i !==
                    this.collection[targetRowIndex][curIndexFromStart].colStart ||
                    prevCell.rowSpan > 1) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (prevCell.colSpan > 1) {
                    prevCell.colSpan--;
                } else {
                    this.collection[targetRowIndex].splice(curIndexFromStart - 1, 1);
                }
            }

            // Handle the rest if it spans more than one row
            if (this.curResizedCell.rowSpan > 1) {
                for (let rowIndex = this.curResizedCell.rowStart;
                        rowIndex < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        rowIndex++) {
                    let leftSibling;
                    let leftSiblingIndex = 0;
                    for (let m = 0; m < this.collection[rowIndex].length; m++) {
                        if (this.collection[rowIndex][m].colStart >=
                                this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                            break;
                        }
                        leftSiblingIndex = m;
                        leftSibling = this.collection[rowIndex][m];
                    }

                    for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                        if (leftSibling.colSpan > 1) {
                            leftSibling.colSpan--;
                        } else {
                            this.collection[rowIndex].splice(leftSiblingIndex - spanIndex, 1);
                        }
                        leftSibling = this.collection[rowIndex][leftSiblingIndex - spanIndex - 1];
                    }
                }
            }

            this.curResizedCell.colStart -= this.colSpanIncrease;
            this.curResizedCell.colSpan += this.colSpanIncrease;
        } else if (this.colSpanIncrease < 0) {
            this.colSpanIncrease = -1 * Math.min(-1 * this.colSpanIncrease, this.curResizedCell.colSpan);
            const rowEndIndex = this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
            for (let rowUpdateIndex = targetRowIndex; rowUpdateIndex < rowEndIndex; rowUpdateIndex++) {
                const firstHalf = [];
                for (const record of this.collection[rowUpdateIndex]) {
                    if (record.colStart < this.curResizedCell.colStart) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = this.collection[rowUpdateIndex].slice(firstHalf.length);
                for (let i = 0; i < -1 * this.colSpanIncrease; i++) {
                    firstHalf.push({
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + i,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowUpdateIndex + 1,
                        selected: false,
                        width: ""
                    });
                }

                if (rowUpdateIndex === targetRowIndex && this.curResizedCell.colSpan === 0) {
                    secondHalf.shift();
                }
                this.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);
            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            this.curResizedCell.colStart += -1 * this.colSpanIncrease;
        }
        this.colSpanIncrease = 0;
    }

    public pointerMoveResizeBottom(event, cellRef, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = event.pageY - this.dragStartY;
            const maxIncrease = this.rowsCount - rowIndex - this.curResizedCell.rowSpan;
            this.rowSpanIncrease = Math.min(Math.round(curDistance / parseInt(this.rowsHeight, 10)), maxIncrease);
            this.resizeHeight = this.resizeInitialHeight + this.rowSpanIncrease * parseInt(this.rowsHeight, 10);
        }
    }

    public pointerUpResizeBottom(event, cellRef, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;

        if (this.rowSpanIncrease > 0) {
            for (let increaseIndex = 1; increaseIndex <= this.rowSpanIncrease; increaseIndex++) {
                // Cycle how many rows should the size of the cell increase, and edit them accordingly.
                const curRowIndex = rowIndex + (this.curResizedCell.rowSpan - 1) + increaseIndex;

                for (let j = this.collection[curRowIndex].length - 1; j >= 0; j--) {
                    // Cycle all cells backwards because when cell spans in
                    // the way it should be cut and cells on the right should be added.
                    const curCell = this.collection[curRowIndex][j];
                    const curCellStart = curCell.colStart;
                    let curCellEnd = curCell.colStart + curCell.colSpan;
                    const resizedCellStart = this.curResizedCell.colStart;
                    const resizedCellEnd = this.curResizedCell.colStart + this.curResizedCell.colSpan;

                    if (curCellStart < resizedCellEnd && curCellEnd > resizedCellEnd && curCell.rowSpan === 1) {
                        // If current cell spans the way of the resized
                        // down cell and the end is spanning more to the right,
                        // cut the current cell and add the needed cells after the resized cell ends.
                        const numNewCells = curCellEnd - resizedCellEnd;
                        for (let i = 0; i < numNewCells; i++) {
                            curCell.colSpan--;
                            curCellEnd--;
                            this.collection[curRowIndex].splice(j + 1, 0, {
                                colSpan: 1,
                                colStart: curCellEnd,
                                hovered: false,
                                key: "",
                                rowSpan: 1,
                                rowStart: curRowIndex + 1,
                                selected: false,
                                width: ""
                            });
                        }
                    } else if (curCellStart < resizedCellEnd && curCellEnd > resizedCellEnd && curCell.rowSpan > 1) {
                        // We only need to check the rowSpan because we start
                        // from top to bottom and top cells have the rowSpan
                        this.curResizedCell.rowSpan += increaseIndex - 1;
                        this.rowSpanIncrease = 0;
                        return;
                    }

                    if (curCellStart <= resizedCellEnd &&
                            curCellEnd >= resizedCellStart &&
                            curCellEnd <= resizedCellEnd) {
                        // If current cell is in the way of resized down cell decrease the size of the current cell.
                        curCell.colSpan -= (curCellEnd) - this.curResizedCell.colStart;
                    }

                    if (curCell.colSpan <= 0) {
                        // If the current cell span is <= 0 it should be removed.
                        this.collection[curRowIndex].splice(j, 1);
                    }
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
        } else if (this.rowSpanIncrease < 0) {
            this.rowSpanIncrease = -1 * Math.min(-1 * this.rowSpanIncrease, this.curResizedCell.rowSpan);
            const startIndex = this.curResizedCell.rowStart + this.curResizedCell.rowSpan - 2;
            for (let i = startIndex; i > startIndex + this.rowSpanIncrease; i--) {
                let startCellIndex = 0;

                // Get first cell after current resized multirow cell
                for (let j = 0; j < this.collection[i].length; j++) {
                    if (this.collection[i][j].colStart > this.curResizedCell.colStart) {
                        startCellIndex = j - 1;
                        break;
                    }
                }

                for (let j = 0; j < this.curResizedCell.colSpan; j++) {
                    this.collection[i].splice(startCellIndex + 1 + j, 0, {
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + j,
                        hovered: false,
                        key: "",
                        rowSpan: 1,
                        rowStart: i + 1,
                        selected: false,
                        width: ""
                    });
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
            if (this.curResizedCell.rowSpan === 0) {
                this.collection[rowIndex].splice(this.curResizedCell.colStart - 1 + this.curResizedCell.colSpan, 1);
            }
        }

        this.rowSpanIncrease = 0;
    }

    public onCellKey(event, rowIndex, colIndex) {
        if (event.key === "Delete") {
            for (let i = rowIndex; i < rowIndex + this.cellSelected.rowSpan; i++) {
                const rowFirstHalf = [];
                for (const record of this.collection[i]) {
                    if (record.colStart < this.cellSelected.colStart) {
                        rowFirstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const rowSecondHalf = this.collection[i].slice(rowFirstHalf.length + (i === rowIndex ? 1 : 0));
                for (let j = 0; j < this.cellSelected.colSpan; j++) {
                    rowFirstHalf.push({
                        colSpan: 1,
                        colStart: this.cellSelected.colStart + j,
                        key: "",
                        rowSpan: 1,
                        rowStart: i + 1,
                        selected: false,
                        width: ""
                    });
                }
                this.collection[i] = rowFirstHalf.concat(rowSecondHalf);
            }

            this.cellSelected = null;
            this.resizeVisible = false;
        }
    }
}

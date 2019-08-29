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
    IDropBaseEventArgs,
    IDropDroppedEventArgs,
    IgxDialogComponent,
    IgxGridComponent
} from "igniteui-angular";

interface IColumnConfig {
    key: string;
    width: string;
    colStart: number;
    rowStart: number;
    colSpan: number;
    rowSpan: number;
    selected: boolean;
    hovered: boolean;
}

interface IBlockConfig {
    key: string;
    colsCount: number;
    colsWidth: number;
    collection: IColumnConfig[][];
}

enum DialogType {
    Template = 0,
    JSON = 1
}

// tslint:disable:object-literal-sort-keys
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-multi-row-layout-configuration-sample",
    styleUrls: ["./grid-multi-row-layout-configuration.component.scss"],
    templateUrl: "./grid-multi-row-layout-configuration.component.html"
})
export class GridMultiRowLayoutConfigurationComponent {

    @ViewChild("resultDialog", { read: IgxDialogComponent, static : true })
    public resultDialog: IgxDialogComponent;

    @ViewChild("textArea", { read: ElementRef, static : true })
    public textArea: ElementRef;

    @ViewChild("grid", { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;

    @ViewChildren("gridCell", { read: ElementRef })
    public gridCells: QueryList<ElementRef>;

    @ViewChild("resizeIndicator", { read: ElementRef, static : true })
    public resizeIndicator: ElementRef;

    @ViewChild("layoutContainer", { read: ElementRef, static : true })
    public layoutContainer: ElementRef;

    public get layoutScrollTop() {
        if (this.layoutContainer) {
            return this.layoutContainer.nativeElement.scrollTop;
        }
        return 0;
    }

    public get layoutScrollLeft() {
        if (this.layoutContainer) {
            return this.layoutContainer.nativeElement.scrollLeft;
        }
        return 0;
    }

    public collection: IColumnConfig[][] = [];
    public gridCollection = [];
    public jsonCollection = "";
    public cellSelected;
    public resizeVisible = false;
    public resizeTop;
    public resizeLeft;
    public resizeWidth = 0;
    public resizeHeight = 0;

    public dialogType = DialogType.JSON;
    public rowsCount = 2;
    public rowsHeight = 40;
    public selectedBlock;
    public blocks: IBlockConfig[] = [];

    public columnsList = [
        { field: "Company Name", key: "CompanyName" },
        { field: "Contact Name", key: "ContactName" },
        { field: "Contact Title", key: "ContactTitle" },
        { field: "City", key: "City" },
        { field: "Country", key: "Country" },
        { field: "Address", key: "Address" },
        { field: "Region", key: "Region" },
        { field: "Postal Code", key: "PostalCode" }
    ];
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

    constructor(public cdr: ChangeDetectorRef) {
        const newCollection1 = [
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "ID", rowSpan: 2, rowStart: 1, selected: false,
                  width: "" }
            ],
            []
        ];
        this.blocks.push({
            collection: newCollection1,
            colsCount: 1,
            colsWidth: 136,
            key: "ID"
        });

        const newCollection2 = [
            [
                { colSpan: 2, colStart: 1, hovered: false, key: "CompanyName", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" }
            ],
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "ContactName", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" },
                { colSpan: 1, colStart: 2, hovered: false, key: "ContactTitle", rowSpan: 1, rowStart: 2,
                  selected: false, width: "" }
            ]
        ];
        this.blocks.push({
            collection: newCollection2,
            colsCount: 2,
            colsWidth: 136,
            key: "Contact Details"
        });

        const newCollection3 = [
            [
                { colSpan: 2, colStart: 1, hovered: false, key: "Country", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" },
                { colSpan: 2, colStart: 3, hovered: false, key: "Region", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" },
                { colSpan: 2, colStart: 5, hovered: false, key: "PostalCode", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" }
            ],
            [
                { colSpan: 3, colStart: 1, hovered: false, key: "City", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" },
                { colSpan: 3, colStart: 4, hovered: false, key: "Address", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" }
            ]
        ];
        this.blocks.push({
            collection: newCollection3,
            colsCount: 6,
            colsWidth: 136,
            key: "Address Details"
        });

        const newCollection4 = [
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "Phone", rowSpan: 1, rowStart: 1, selected: false,
                  width: "" }
            ],
            [
                { colSpan: 1, colStart: 1, hovered: false, key: "Fax", rowSpan: 1, rowStart: 2, selected: false,
                  width: "" }
            ]
        ];
        this.blocks.push({
            collection: newCollection4,
            colsCount: 1,
            colsWidth: 136,
            key: "Phone Details"
        });

        this.selectedBlock = this.blocks[0];
    }

    public getLayoutRowStyle(blockIndex) {
        let style = "";
        this.blocks[blockIndex].collection.forEach(() => {
                style += " " + this.rowsHeight + "px";
        });
        return style;
    }

    public getLayoutColsStyle(blockIndex) {
        let style = "";
        this.blocks[blockIndex].collection[0].forEach((col) => {
            for (let i = 0; i < col.colSpan; i++) {
                style += " " + this.blocks[blockIndex].colsWidth + "px";
            }
        });
        return style;
    }

    public resetCollections() {
        const newCollection = [];
        for (let rowIndex = 0; rowIndex < this.rowsCount; rowIndex++) {
            const row = [];
            for (let colIndex = 0; colIndex < this.selectedBlock.colsCount; colIndex++) {
                row.push({
                    colSpan: 1,
                    colStart: colIndex + 1,
                    key: "",
                    rowSpan: 1,
                    rowStart: rowIndex + 1,
                    width: ""
                });
            }

            newCollection.push(row);
        }
        this.selectedBlock.collection = newCollection;
    }

    public updateCollectionLayout(blockIndex = 0) {
        for (const record of this.blocks[blockIndex].collection) {
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
        const newRowsCount = parseInt(event.target.value, 10);
        if (newRowsCount <= 0 || !newRowsCount) {
            return;
        }

        if (newRowsCount > this.rowsCount) {
            const rowStart = this.rowsCount + 1;
            this.blocks.forEach((block) => {
                for (let i = 0; i < newRowsCount - this.rowsCount; i++) {
                    const row = [];

                    for (let colIndex = 0; colIndex < block.colsCount; colIndex++) {
                        row.push({
                            colSpan: 1,
                            colStart: colIndex + 1,
                            key: "",
                            rowSpan: 1,
                            rowStart: rowStart + i,
                            width: ""
                        });
                    }

                    block.collection.push(row);
                }
            });
        } else if (newRowsCount < this.rowsCount) {
            this.blocks.forEach((block) => {
                let rowsToRemove = this.rowsCount - newRowsCount;
                for (let rowIndex = block.collection.length - 1; rowIndex >= 0; rowIndex--) {
                    if (rowsToRemove > 0) {
                        block.collection.pop();
                        rowsToRemove--;
                    } else {
                        block.collection[rowIndex].forEach((col) => {
                            col.rowSpan = Math.min(
                                col.rowSpan,
                                (block.collection.length + 1) - col.rowStart
                            );
                        });
                    }
                }
            });
        }

        this.rowsCount = newRowsCount;
    }

    public rowHeightChanged(event) {
        this.rowsHeight = event.target.value;
        this.cdr.detectChanges();
    }

    public colCountChanged(event) {
        const newColsCount = parseInt(event.target.value, 10);
        if (newColsCount <= 0 || !newColsCount) {
            return;
        }

        if (newColsCount > this.selectedBlock.colsCount) {
            this.selectedBlock.collection.map((rowContainer, rowIndex) => {
                const colStart = this.selectedBlock.colsCount + 1;
                for (let i = 0; i < newColsCount - this.selectedBlock.colsCount; i++) {
                    rowContainer.push({
                        colSpan: 1,
                        colStart: colStart + i,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowIndex + 1,
                        width: "",
                        selected: false,
                        hovered: false
                    });
                }
            });
        } else if (newColsCount < this.selectedBlock.colsCount) {
            this.selectedBlock.collection.map((rowContainer) => {
                let colsToRemove = this.selectedBlock.colsCount - newColsCount;
                while (colsToRemove > 0) {
                    if (rowContainer[rowContainer.length - 1].colSpan <= colsToRemove) {
                        colsToRemove -= rowContainer[rowContainer.length - 1].colSpan;
                        rowContainer.pop();
                    } else {
                        rowContainer[rowContainer.length - 1].colSpan -= colsToRemove;
                        colsToRemove = 0;
                    }
                }
            });
        }

        this.selectedBlock.colsCount = newColsCount;
    }

    public colWidthChanged(event) {
        this.selectedBlock.colsWidth = event.target.value;
    }

    public onColEnter(event: IDropBaseEventArgs, blockIndex, rowIndex, colIndex) {
        this.blocks[blockIndex].collection[rowIndex][colIndex].hovered = true;
    }

    public onColLeave(event: IDropBaseEventArgs, blockIndex, rowIndex, colIndex) {
        this.blocks[blockIndex].collection[rowIndex][colIndex].hovered = false;
    }

    public onColDropped(event: IDropDroppedEventArgs, blockIndex, rowIndex, colIndex) {
        event.cancel = true;
        this.blocks[blockIndex].collection[rowIndex][colIndex].key = event.drag.data.chip.data.key;
        this.updateCollectionLayout(blockIndex);
    }

    public flattenCollection(block: IBlockConfig) {
        const result = [];
        block.collection.forEach((row) => {
            row.forEach((col) => {
                const newCol = { ...col };
                delete newCol.hovered;
                delete newCol.selected;
                newCol.width = block.colsWidth + "px";

                result.push(newCol);
            });
        });

        return result;
    }

    public getColumnLayoutTemplate() {
        let columnLayout = "";
        this.blocks.forEach((block) => {
            const flatCollection = this.flattenCollection(block);
            columnLayout += `<igx-column-layout [header]="'${block.key}'">`;
            flatCollection.map((row) => {
                const column =
                    '\n    <igx-column [rowStart]="' + row.rowStart + '"' +
                    ' [rowEnd]="' + (row.rowStart + row.rowSpan) + '"' +
                    ' [colStart]="' + row.colStart + '"' +
                    ' [colEnd]="' + (row.colStart + row.colSpan) + '"' +
                    ' [field]="\'' + row.key + '\'"' +
                    ' [width]="\'' + row.width + '\'">' +
                    "\n    </igx-column>";
                columnLayout += column;
            });

            columnLayout += "\n</igx-column-layout>\n";
        });

        this.dialogType = DialogType.Template;
        this.jsonCollection = columnLayout;
        this.resultDialog.open();
    }

    public renderJson() {
        const fullCollection = [];
        this.blocks.forEach((block) => {
            const flatCollection = this.flattenCollection(block);
            const mappedCollection = flatCollection.map((row) => {
                return {
                    key: row.key,
                    rowStart: row.rowStart,
                    rowEnd: row.rowStart + row.rowSpan,
                    colStart: row.colStart,
                    colEnd: row.colStart + row.colSpan
                };
            });

            const fullBlock = {
                layout: block.key,
                columns: mappedCollection
            };
            fullCollection.push(fullBlock);
        });
        this.dialogType = DialogType.JSON;
        this.jsonCollection = JSON.stringify(fullCollection)
            .replace(new RegExp(`{`, "g"), `\n\t{`) // newline for beginning of each object
            .replace(new RegExp(`":`, "g"), `": `) // interval after each :
            .replace(new RegExp(`{"layout":`, "g"), `{\n\t\t"layout":`) // new line and indent for layout
            .replace(new RegExp(`,"columns":`, "g"), `,\n\t\t"columns":`) // new line and indent for columns list
            .replace(new RegExp(`]},`, "g"), `\n\t\t]\n\t},`) // new line and indent for end columns list
            .replace(new RegExp(`{"key"`, "g"), `\t\t{"key"`) // indent for each column
            .replace(new RegExp(`}]}]`, "g"), `}\n\t\t]\n\t}\n]`); // new lines and indents at the end
        this.resultDialog.open();
    }

    public copyToClipboard() {
        this.textArea.nativeElement.select();
        document.execCommand("copy");
    }

    public clickCell(cellRef, blockIndex, rowIndex, colIndex) {
        this.selectedBlock = this.blocks[blockIndex];
        this.cellSelected = this.blocks[blockIndex].collection[rowIndex][colIndex];
        this.cellSelected.selected = true;

        this.resizeTop = cellRef.offsetTop;
        this.resizeLeft = cellRef.offsetLeft;
        this.resizeHeight = cellRef.offsetHeight;
        this.resizeWidth = cellRef.offsetWidth;
        this.resizeInitialHeight = this.resizeHeight;
        this.resizeInitialWidth = this.resizeWidth;
        this.resizeVisible = true;
    }

    public onBlur(event, blockIndex, rowIndex, colIndex) {
        this.cellSelected = null;
        this.blocks[blockIndex].collection[rowIndex][colIndex].selected = false;
        this.resizeVisible = false;
    }

    public pointerDownResize(event, blockIndex, rowIndex, colIndex) {
        this.dragStarted = true;
        this.dragStartX = event.pageX;
        this.dragStartY = event.pageY;
        this.curResizedCell = this.blocks[blockIndex].collection[rowIndex][colIndex];

        event.target.setPointerCapture(event.pointerId);
    }

    public pointerMoveResizeLeft(event, cellRef, blockIndex) {
        if (this.dragStarted) {
            const curBlock = this.blocks[blockIndex];
            const curDistance = this.dragStartX - event.pageX;
            const minIncrease = -this.curResizedCell.colSpan;
            const maxIncrease = this.curResizedCell.colStart - 1;
            this.colSpanIncrease = Math.min(Math.round(curDistance / curBlock.colsWidth), maxIncrease);
            this.colSpanIncrease = Math.max(this.colSpanIncrease, minIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * curBlock.colsWidth;
            this.resizeLeft = cellRef.offsetLeft - this.colSpanIncrease * curBlock.colsWidth;
        }
    }

    public pointerMoveResizeRight(event, cellRef, blockIndex) {
        if (this.dragStarted) {
            const curBlock = this.blocks[blockIndex];
            const curDistance = event.pageX - this.dragStartX;
            const maxIncrease = curBlock.colsCount - (this.curResizedCell.colStart + this.curResizedCell.colSpan - 1);
            this.colSpanIncrease = Math.min(Math.round(curDistance / curBlock.colsWidth), maxIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * curBlock.colsWidth;
        }
    }

    public pointerUpResizeRight(event, cellRef, blockIndex, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;
        const curBlock = this.blocks[blockIndex];

        if (this.colSpanIncrease > 0) {
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const nextCell = curBlock.collection[rowIndex][colIndex + 1];
                if (!nextCell || (this.curResizedCell.colStart + this.curResizedCell.colSpan + i) !==
                        (nextCell.colStart || nextCell.rowSpan > 1)) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (nextCell.colSpan > 1) {
                    nextCell.colStart++;
                    nextCell.colSpan--;

                    for (let nextCellRowIndex = nextCell.rowStart;
                        nextCellRowIndex < nextCell.rowStart + nextCell.rowSpan - 1;
                        nextCellRowIndex++) {

                        let nextCellEndIndex = 0;
                        for (let j = 0; j < curBlock.collection[nextCellRowIndex].length; j++) {
                            if ((curBlock.collection[nextCellRowIndex][j].colStart +
                                curBlock.collection[nextCellRowIndex][j].colSpan) >= nextCell.colStart) {
                                break;
                            } else {
                            nextCellEndIndex = j;
                            }
                        }

                        curBlock.collection[nextCellRowIndex].splice(nextCellEndIndex + 1, 0 , {
                            colSpan: 1,
                            colStart: nextCell.colStart - 1,
                            hovered: false,
                            key: "",
                            rowSpan: 1,
                            rowStart: nextCellRowIndex + 1,
                            selected: false,
                            width: ""
                        });
                   }
                } else {
                    curBlock.collection[rowIndex].splice(colIndex + 1, 1);
                }
            }

            if (this.curResizedCell.rowSpan > 1) {
                for (let row = this.curResizedCell.rowStart;
                        row < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        row++) {
                    for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                        let nextCellIndex = 0;
                        const nextCell = curBlock.collection[row].find((cell, index) => {
                            nextCellIndex = index;
                            return cell.colStart === this.curResizedCell.colStart +
                                this.curResizedCell.colSpan + spanIndex;
                        });
                        if (nextCell) {
                            if (nextCell.colSpan > 1) {
                                nextCell.colStart++;
                                nextCell.colSpan--;
                            } else {
                                curBlock.collection[row].splice(nextCellIndex, 1);
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
                for (const record of curBlock.collection[rowUpdateIndex]) {
                    if (record.colStart <
                            this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = curBlock.collection[rowUpdateIndex].slice(firstHalf.length);
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

                curBlock.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);

            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            if (this.curResizedCell.colSpan === 0) {
                curBlock.collection[rowIndex].splice(colIndex + this.curResizedCell.colSpan, 1);
            }
        }
        this.colSpanIncrease = 0;
    }

    public pointerUpResizeLeft(event, cellRef, blockIndex, targetRowIndex, targetColIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;
        const curBlock = this.blocks[blockIndex];

        const curIndexFromEnd = curBlock.collection[targetRowIndex].length - targetColIndex - 1;
        if (this.colSpanIncrease > 0) {
            // Handle first row
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const curIndexFromStart = curBlock.collection[targetRowIndex].length - curIndexFromEnd - 1;
                const prevCell = curBlock.collection[targetRowIndex][curIndexFromStart - 1];
                if (!prevCell ||
                    prevCell.colStart + prevCell.colSpan + i !==
                    curBlock.collection[targetRowIndex][curIndexFromStart].colStart ||
                    (prevCell.rowSpan > 1 && prevCell.rowStart !== this.curResizedCell.rowStart)) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (prevCell.colSpan > 1) {
                    prevCell.colSpan--;

                    for (let prevCellRowIndex = prevCell.rowStart;
                         prevCellRowIndex < prevCell.rowStart + prevCell.rowSpan - 1;
                         prevCellRowIndex++) {

                            const prevCellEndIndex = this.getRightInsertIndex(curBlock.collection[prevCellRowIndex],
                                    prevCell.colStart, prevCell.colSpan);
                            curBlock.collection[prevCellRowIndex].splice(prevCellEndIndex, 0 , {
                                colSpan: 1,
                                colStart: prevCell.colStart + prevCell.colSpan,
                                hovered: false,
                                key: "",
                                rowSpan: 1,
                                rowStart: prevCellRowIndex + 1,
                                selected: false,
                                width: ""
                            });
                    }
                } else {
                    curBlock.collection[targetRowIndex].splice(curIndexFromStart - 1, 1);
                }
            }

            // Handle the rest if it spans more than one row
            if (this.curResizedCell.rowSpan > 1) {
                for (let rowIndex = this.curResizedCell.rowStart;
                        rowIndex < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        rowIndex++) {
                    let leftSibling;
                    let leftSiblingIndex = 0;
                    for (let m = 0; m < curBlock.collection[rowIndex].length; m++) {
                        if (curBlock.collection[rowIndex][m].colStart >=
                            this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                            break;
                        }
                        leftSiblingIndex = m;
                        leftSibling = curBlock.collection[rowIndex][m];
                    }

                    if (leftSibling) {
                        for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                            if (leftSibling.colSpan > 1) {
                                leftSibling.colSpan--;
                            } else {
                                curBlock.collection[rowIndex].splice(leftSiblingIndex - spanIndex, 1);
                            }
                            leftSibling = curBlock.collection[rowIndex][leftSiblingIndex - spanIndex - 1];
                        }
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
                for (const record of curBlock.collection[rowUpdateIndex]) {
                    if (record.colStart < this.curResizedCell.colStart) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = curBlock.collection[rowUpdateIndex].slice(firstHalf.length);
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

                curBlock.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);
            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            this.curResizedCell.colStart += -1 * this.colSpanIncrease;
            curBlock.collection[targetRowIndex] =
                curBlock.collection[targetRowIndex].filter((cell) => cell.colSpan > 0);
        }
        this.colSpanIncrease = 0;
    }

    public pointerMoveResizeBottom(event, cellRef, blockIndex, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = event.pageY - this.dragStartY;
            const maxIncrease = this.rowsCount - rowIndex - this.curResizedCell.rowSpan;
            this.rowSpanIncrease = Math.min(Math.round(curDistance / this.rowsHeight), maxIncrease);
            this.resizeHeight = this.resizeInitialHeight + this.rowSpanIncrease * this.rowsHeight;
        }
    }

    public getRightInsertIndex(rowCollection, cellColStart, cellColSpan) {
        let rightCellIndex = 0;
        for (let cellIndex = 0; cellIndex < rowCollection.length; cellIndex++) {
            if (rowCollection[cellIndex].colStart >= cellColStart + cellColSpan) {
                break;
            } else {
                rightCellIndex = cellIndex;
            }
        }
        return rightCellIndex;
    }

    public getLeftInsertIndex(rowCollection, cellColStart) {
        let leftCellIndex = 0;
        let index = 0;
        for (index = 0; index < rowCollection.length; index++) {
            leftCellIndex = index;
            if (rowCollection[index].colStart >= cellColStart) {
                break;
            }
        }
        return index === rowCollection.length ? index : leftCellIndex;
    }

    public pointerUpResizeBottom(event, cellRef, blockIndex, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;
        const curBlock = this.blocks[blockIndex];

        if (this.rowSpanIncrease > 0) {
            for (let increaseIndex = 1; increaseIndex <= this.rowSpanIncrease; increaseIndex++) {
                // Cycle how many rows should the size of the cell increase, and edit them accordingly.
                const curRowIndex = rowIndex + (this.curResizedCell.rowSpan - 1) + increaseIndex;

                for (let j = curBlock.collection[curRowIndex].length - 1; j >= 0; j--) {
                    // Cycle all cells backwards because when cell spans in
                    // the way it should be cut and cells on the right should be added.
                    const curCell = curBlock.collection[curRowIndex][j];
                    let curCellStart = curCell.colStart;
                    let curCellEnd = curCell.colStart + curCell.colSpan;
                    const resizedCellStart = this.curResizedCell.colStart;
                    const resizedCellEnd = this.curResizedCell.colStart + this.curResizedCell.colSpan;

                    if (curCellStart < resizedCellEnd && curCellStart < resizedCellStart &&
                         curCellEnd >= resizedCellEnd && curCell.rowSpan === 1) {
                        // If current cell spans the way of the resized
                        // down cell and the end is spanning more to the right,
                        // cut the current cell and add the needed cells after the resized cell ends.
                        const numNewCells = curCellEnd - resizedCellEnd;
                        for (let i = 0; i < numNewCells; i++) {
                            curCell.colSpan--;
                            curCellEnd--;
                            curBlock.collection[curRowIndex].splice(j + 1, 0, {
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
                        curCell.colSpan -= this.curResizedCell.colSpan;
                    } else if (resizedCellStart <= curCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd > resizedCellEnd && curCell.rowSpan === 1) {
                        const numNewCells = resizedCellEnd - curCellStart;
                        curCell.colSpan -= numNewCells;
                        curCell.colStart += numNewCells;
                        curCellStart += numNewCells;
                    } else if (resizedCellStart <= curCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd > resizedCellEnd && curCell.rowSpan > 1) {
                        const numNewCells = resizedCellEnd - curCellStart;
                        for (let curCellRowIndex = curCell.rowStart;
                                curCellRowIndex < (curCell.rowStart + curCell.rowSpan - 1);
                                curCellRowIndex++) {

                            const prevCellIndex = this.getRightInsertIndex(curBlock.collection[curCellRowIndex],
                                curCell.colStart, curCell.colSpan);
                            for (let i = 0 ; i < numNewCells; i++) {
                                // We add them anyway, even if they shouldn't be added to be sure.
                                // On the next pass in the loop they will be removed.
                                curBlock.collection[curCellRowIndex].splice(prevCellIndex + i, 0, {
                                    colSpan: 1,
                                    colStart: curCellStart + i,
                                    hovered: false,
                                    key: "",
                                    rowSpan: 1,
                                    rowStart: curCellRowIndex + 1,
                                    selected: false,
                                    width: ""
                                });
                            }
                        }
                        curCell.colSpan -= numNewCells;
                        curCell.colStart += numNewCells;
                    } else if (resizedCellStart <= curCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd <= resizedCellEnd && curCell.rowSpan > 1) {
                        const prevCellIndex = this.getLeftInsertIndex(curBlock.collection[curRowIndex], curCellStart);
                        curCell.rowStart++;
                        curCell.rowSpan--;
                        curBlock.collection[curRowIndex + 1].splice(prevCellIndex, 0, curCell);
                        curBlock.collection[curRowIndex].splice(prevCellIndex, 1);
                    } else if (curCellStart <= resizedCellEnd &&
                            curCellEnd >= resizedCellStart && curCellEnd <= resizedCellEnd) {
                        // If current cell is in the way of resized down cell decrease the size of the current cell.
                        // To do: this case probably can be combined with the first one.
                        const cellsToFill = curCellEnd - resizedCellStart;
                        curCell.colSpan -= cellsToFill;
                        for (let curCellRowIndex = curCell.rowStart;
                                curCellRowIndex < (curCell.rowStart + curCell.rowSpan - 1);
                                curCellRowIndex++) {

                            const nextCellIndex = this.getRightInsertIndex(curBlock.collection[curCellRowIndex],
                                curCell.colStart, curCell.colSpan);
                            for (let i = 0 ; i < cellsToFill; i++) {
                                // We add them anyway, even if they shouldn't be added to be sure.
                                // On the next pass in the loop they will be removed.
                                curBlock.collection[curCellRowIndex].splice(nextCellIndex - i, 0, {
                                    colSpan: 1,
                                    colStart: curCellEnd - i - 1,
                                    hovered: false,
                                    key: "",
                                    rowSpan: 1,
                                    rowStart: curCellRowIndex + 1,
                                    selected: false,
                                    width: ""
                                });
                            }
                        }
                    } else if (curCellStart < resizedCellStart && curCellStart < resizedCellEnd &&
                            curCellEnd > resizedCellStart && resizedCellEnd < curCellEnd  && curCell.rowSpan > 1) {
                        this.rowSpanIncrease = increaseIndex - 1;
                        break;
                    }

                    if (curCell.colSpan <= 0) {
                        // If the current cell span is <= 0 it should be removed.
                        curBlock.collection[curRowIndex] =
                            curBlock.collection[curRowIndex].filter((cell) => cell.colSpan > 0);
                    }
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
        } else if (this.rowSpanIncrease < 0) {
            this.rowSpanIncrease = -1 * Math.min(-1 * this.rowSpanIncrease, this.curResizedCell.rowSpan);
            const startIndex = this.curResizedCell.rowStart + this.curResizedCell.rowSpan - 2;
            let startCellIndex = 0;
            for (let i = startIndex; i > startIndex + this.rowSpanIncrease; i--) {
                startCellIndex = this.getLeftInsertIndex(curBlock.collection[i], this.curResizedCell.colStart);
                for (let j = 0; j < this.curResizedCell.colSpan; j++) {
                    curBlock.collection[i].splice(startCellIndex + j, 0, {
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
                // We use the last cell index since when rowSpan reaches 0 it will point to the column index of
                // the top row of the cell. This is where the cell information is saved when it spans more rows.
                curBlock.collection[this.curResizedCell.rowStart - 1] =
                    curBlock.collection[this.curResizedCell.rowStart - 1].filter((cell) => cell.rowSpan > 0);
            }
        }

        this.rowSpanIncrease = 0;
    }

    public onCellKey(event, blockIndex, rowIndex, colIndex) {
        const curBlock = this.blocks[blockIndex];
        if (event.key === "Delete" || event.key === "Del") {
            for (let i = rowIndex; i < rowIndex + this.cellSelected.rowSpan; i++) {
                const rowFirstHalf = [];
                for (const record of curBlock.collection[i]) {
                    if (record.colStart < this.cellSelected.colStart) {
                        rowFirstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const rowSecondHalf = curBlock.collection[i].slice(rowFirstHalf.length + (i === rowIndex ? 1 : 0));
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
                curBlock.collection[i] = rowFirstHalf.concat(rowSecondHalf);
            }

            this.cellSelected = null;
            this.resizeVisible = false;
        }
    }

    public onChipMoved(event) {
        event.owner.dragDir.dragGhost.children[2].remove();
    }

    public onRemovePointerDown(event) {
        event.stopPropagation();
    }

    public onRemoveClickBlock(index) {
        if (this.blocks.length === 1) {
            return;
        }

        const removedBlock = this.blocks.splice(index, 1)[0];
        if (removedBlock === this.selectedBlock) {
            const newSelectIndex = index === 0 ? 0 : (index - 1);
            this.selectedBlock = this.blocks[newSelectIndex];
        }
    }

    public onRemoveClickColumn(index) {
        this.columnsList.splice(index, 1);
    }

    public onPointerOver(chip) {
        chip.data.hovered = true;
    }

    public onPointerLeave(chip) {
        chip.data.hovered = false;
    }

    public onAddBlockClick(chip) {
        chip.data.clicked = true;
        requestAnimationFrame(() => {
            const input = chip.elementRef.nativeElement.querySelector("input");
            input.focus();
        });
    }

    public onAddChipClick(chip) {
        chip.data.clicked = true;
        requestAnimationFrame(() => {
            const input = chip.elementRef.nativeElement.querySelector("input");
            input.focus();
        });
    }

    public inputKeyDownBlock(event, chip) {
        event.stopPropagation();

        if (event.key === "Escape") {
            chip.data.clicked = false;
        } else if (event.key === "Enter") {
            const newCollection = [];
            for (let i = 0; i < this.rowsCount; i++) {
                newCollection.push([{
                    colSpan: 1,
                    colStart: 1,
                    key: "",
                    rowSpan: 1,
                    rowStart: i + 1,
                    width: "",
                    selected: false,
                    hovered: false
                }]);
            }

            const newBlock = {
                collection: newCollection,
                colsCount: 1,
                colsWidth: 136,
                key: event.target.value
            };
            this.blocks.push(newBlock);
            event.target.value = "";
            this.selectedBlock = newBlock;

            requestAnimationFrame(() => {
                this.layoutContainer.nativeElement.scrollLeft = 9999999;
            });
        }
    }

    public inputKeyDown(event, chip) {
        event.stopPropagation();

        if (event.key === "Escape") {
            chip.data.clicked = false;
        } else if (event.key === "Enter") {
            this.columnsList.push({
                field: event.target.value,
                key: event.target.value
            });
            event.target.value = "";
        }
    }

    public inputBlur(event, addChip) {
        if (event.relatedTarget === addChip.elementRef.nativeElement ||
            event.relatedTarget === addChip.elementRef.nativeElement.children[0]) {
            // Clicked on the same chip, so we don't close it.
            return;
        }
        addChip.data.clicked = false;
    }

    public onContainerScroll() {
        this.resizeVisible = false;
    }

    public blocksOrderChanged(event) {
        const newBlocksList = [];
        event.chipsArray.forEach((chip) => {
            const foundBlock = this.blocks.find((block) => {
                return block.key === chip.id;
            });
            if (foundBlock) {
                newBlocksList.push(foundBlock);
            }
        });
        this.blocks = newBlocksList;
    }
}

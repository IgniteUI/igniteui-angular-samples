import { Component, Directive, HostListener, ViewChild, ViewEncapsulation} from "@angular/core";
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    IgxExcelExporterOptions,
    IgxExcelExporterService,
    IgxGridComponent,
    IgxGridTransaction,
    IgxTransactionService,
    VerticalAlignment
} from "igniteui-angular";

import { PasteHandler} from "./paste-handler.directive";

import { EXCEL_DATA, LOCAL_DATA } from "./data";

import { take } from "rxjs/operators";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-grid-paste-sample",
    styleUrls: ["./grid-paste-sample.component.scss"],
    templateUrl: "./grid-paste-sample.component.html"
})
export class GridPasteSampleComponent {
    @ViewChild("grid1", { read: IgxGridComponent, static: true }) public grid1: IgxGridComponent;
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    public data;
    public comboData = [
        "Paste data as new records",
        "Paste starting from active cell"
   ];
    public pasteMode = this.comboData[0];
    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    constructor(private excelExportService: IgxExcelExporterService) {
        this.data = LOCAL_DATA;
    }

    public ngOnInit() {
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

    public selectionChange(eventArgs) {
        this.pasteMode = eventArgs.newSelection.elementRef.nativeElement.textContent.trim();
    }

    public dataPasted(processedData) {
        if (this.pasteMode === "Paste data as new records") {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        const addedData = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] = this.grid1.data.length + this.grid1.transactions.getAggregatedChanges(false).length + 1;
            this.grid1.addRow(rowData);
            addedData.push(rowData);
            this.grid1.cdr.detectChanges();
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.scrollTo(this.grid1.data.length +
            this.grid1.transactions.getAggregatedChanges(false).length - 1);

    }

    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) { return; }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.rowData[pk];
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec ? dataRec[pk] : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] = currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }

        for (const pkVal of updatedRecsPK) {
            const row = this.grid1.getRowByKey(pkVal);
            if (row) {
            row.nativeElement.style["font-style"] = "italic";
            row.nativeElement.style.color = "gray";
            }
        }
    }

    public downloadExcel(eventArgs) {
        this.excelExportService.exportData(EXCEL_DATA, new IgxExcelExporterOptions("sample-data"));
    }

    public undo() {
        this.grid1.transactions.undo();
    }

    public redo() {
        this.grid1.transactions.redo();
        this.grid1.verticalScrollContainer.scrollTo(this.grid1.data.length +
            this.grid1.transactions.getAggregatedChanges(false).length - 1);
    }

    public commit() {
        this.grid1.transactions.commit(this.data);
    }
    public get undoEnabled(): boolean {
        return this.grid1.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.grid1.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.grid1.transactions.getAggregatedChanges(false).length > 0;
    }

}

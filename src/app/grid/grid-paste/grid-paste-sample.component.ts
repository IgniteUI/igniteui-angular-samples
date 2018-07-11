import { Component, Directive, HostListener, ViewChild, ViewEncapsulation} from "@angular/core";
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    IgxGridComponent,
    VerticalAlignment
} from "igniteui-angular";

import { PasteHandler} from "./paste-handler.directive";

import { LOCAL_DATA } from "./data";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-paste-sample",
    styleUrls: ["./grid-paste-sample.component.scss"],
    templateUrl: "./grid-paste-sample.component.html"
})
export class GridPasteSampleComponent {
    @ViewChild("grid1", { read: IgxGridComponent }) public grid1: IgxGridComponent;
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
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

    constructor() {
        this.data = LOCAL_DATA;
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
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] = this.grid1.data.length + 1;
            this.grid1.addRow(rowData);
        }
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
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec ? dataRec[pk] : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length - cellIndex; j++) {
                const currentCell = curentDataRow[j];
                const colKey = columns[j + cellIndex].field;
                rowData[columns[j + cellIndex].field] = currentCell;
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            index++;
        }
    }
}

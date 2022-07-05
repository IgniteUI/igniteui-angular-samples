import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  IgxDialogComponent,
  IgxGridComponent,
  Transaction
} from 'igniteui-angular';
import { DATA } from './../../data/nwindData';

@Component({
  selector: 'app-grid-excel-style-editing-sample',
  styleUrls: [`grid-editing-excel-style.component.scss`],
  templateUrl: 'grid-editing-excel-style.component.html'
})
export class GridExcelStyleEditingComponent implements OnInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    public data: any[];

    public ngOnInit(): void {
      this.data = DATA;
    }

    constructor(private cdr:ChangeDetectorRef){}

    public keydownHandler(event) {
      const key = event.keyCode;
      const grid = this.grid;
      const activeElem = grid.navigation.activeNode;

      if (
        (key >= 48 && key <= 57) ||
        (key >= 65 && key <= 90) ||
        (key >= 97 && key <= 122)
      ) {
        // Number or Alphabet upper case or Alphabet lower case

        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !grid.crudService.cellInEditMode) {
          grid.crudService.enterEditMode(cell);
          cell.editValue = event.key;
        }
      }

      if (key == 13) {
        let thisRow = activeElem.row;
        const column = activeElem.column;
        const rowInfo = grid.dataView;

        let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

        this.grid.navigateTo(nextRow, column, (obj) => {
          obj.target.activate();
          this.grid.clearCellSelection();
          this.cdr.detectChanges();
          });
      }
      }

    public activeNodeChange() {
      this.grid.clearCellSelection();
      this.grid.endEdit();
    }

    public getNextEditableRowIndex(currentRowIndex, dataView, previous){
      if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
          return currentRowIndex;
      }
      if(previous){
        return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
      }
      return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
    }

    private isEditableDataRecordAtIndex(dataViewIndex, dataView) {
      const rec = dataView[dataViewIndex];
      return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData
    }
}

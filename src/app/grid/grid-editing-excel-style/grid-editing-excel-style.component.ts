import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IgxDialogComponent,
  IgxGridComponent,
  Transaction
} from 'igniteui-angular';
import { DATA } from './data';

@Component({
  selector: 'app-grid-excel-style-editing-sample',
  styleUrls: [`grid-editing-excel-style.component.scss`],
  templateUrl: 'grid-editing-excel-style.component.html'
})
export class GridExcelStyleEditingComponent implements OnInit {
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  @ViewChild(IgxDialogComponent, { static: true })
  public dialog: IgxDialogComponent;

  public data: any[];
  public transactionsData: Transaction[] = [];
  private addProductId: number;

  public ngOnInit(): void {
    this.data = DATA;
    this.addProductId = this.data.length + 1;
  }

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
      this.grid.endEdit();
      this.grid.clearCellSelection();
      let thisRow = activeElem.row;
      let nextRow = thisRow + 1;
      const column = activeElem.column;
      const rowInfo = grid.dataView;
      const maxRows = rowInfo.length;

      if (rowInfo[thisRow + 1]) {
        while ('expression' in rowInfo[thisRow + 1]) {
          ++thisRow;
          ++nextRow;
        }
      }
      if (nextRow < maxRows) {
        requestAnimationFrame(() => {
            this.grid.navigateTo(nextRow, column);
            this.grid.tbody.nativeElement.focus();
            this.grid.navigation.setActiveNode({
            gridID:grid.id,
            row: nextRow,
            column: column
        });
        this.grid.selectRange({
          rowStart: nextRow,
          rowEnd: nextRow,
          columnStart: column,
          columnEnd: column
        });
        })
      }
    }
  }

  public activeNodeChange(event) {
    this.grid.endEdit();
  }
}

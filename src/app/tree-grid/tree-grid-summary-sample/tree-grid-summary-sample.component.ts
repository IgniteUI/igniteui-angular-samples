import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxTreeGridComponent } from '@infragistics/igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
  selector: 'app-tree-grid-summary-sample',
  styleUrls: ['./tree-grid-summary-sample.component.scss'],
  templateUrl: './tree-grid-summary-sample.component.html'
})
export class TreeGridSummarySampleComponent {

  @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
  public grid1: IgxTreeGridComponent;
  public data;

  constructor() {
    this.data = FOODS_DATA();
  }

  public toggleSummary(column: ColumnType) {
    column.hasSummary = !column.hasSummary;
  }
}

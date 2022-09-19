import { Component, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxTreeGridComponent } from 'igniteui-angular';
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

  public toggleSummary(column: IgxColumnComponent) {
    column.hasSummary = !column.hasSummary;
  }
}

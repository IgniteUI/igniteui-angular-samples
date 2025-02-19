import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxTreeGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-tree-grid-summary-sample',
    styleUrls: ['./tree-grid-summary-sample.component.scss'],
    templateUrl: './tree-grid-summary-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent, DatePipe]
})
export class TreeGridSummarySampleComponent {

  @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
  public grid1: IgxTreeGridComponent;
  public data;

  constructor() {
    this.data = ORDERS_DATA;
  }

  public toggleSummary(column: ColumnType) {
    column.hasSummary = !column.hasSummary;
  }
}

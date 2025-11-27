import { Component, ViewChild, inject } from '@angular/core';
import { ColumnType, IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-tree-grid-summary-export',
    styleUrls: ['./tree-grid-summary-export.component.scss'],
    templateUrl: './tree-grid-summary-export.component.html',
    imports: [IgxButtonDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent, DatePipe]
})
export class TreeGridSummaryExportComponent {
  private excelExportService = inject(IgxExcelExporterService);


  @ViewChild('tGrid', { read: IgxTreeGridComponent, static: true })
  public tGrid: IgxTreeGridComponent;
  public data;

  constructor() {
    this.data = ORDERS_DATA;
  }

  public toggleSummary(column: ColumnType) {
    column.hasSummary = !column.hasSummary;
  }

  public exportButtonHandler() {
    this.excelExportService.export(this.tGrid, new IgxExcelExporterOptions('ExportedFile'));
  }
}

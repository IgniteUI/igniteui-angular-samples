import { Component, ViewChild } from '@angular/core';
import { ColumnType, IgxExcelExporterOptions, IgxExcelExporterService, IgxTreeGridComponent, IgxButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-tree-grid-summary-export',
    styleUrls: ['./tree-grid-summary-export.component.scss'],
    templateUrl: './tree-grid-summary-export.component.html',
    imports: [IgxButtonDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellHeaderTemplateDirective, IgxIconComponent, NgIf, DatePipe]
})
export class TreeGridSummaryExportComponent {

  @ViewChild('tGrid', { read: IgxTreeGridComponent, static: true })
  public tGrid: IgxTreeGridComponent;
  public data;

  constructor(private excelExportService: IgxExcelExporterService) {
    this.data = ORDERS_DATA;
  }

  public toggleSummary(column: ColumnType) {
    column.hasSummary = !column.hasSummary;
  }

  public exportButtonHandler() {
    this.excelExportService.export(this.tGrid, new IgxExcelExporterOptions('ExportedFile'));
  }
}

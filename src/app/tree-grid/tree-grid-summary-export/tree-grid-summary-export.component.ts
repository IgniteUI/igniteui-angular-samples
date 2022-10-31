import { Component, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxExcelExporterOptions, IgxExcelExporterService, IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
  selector: 'app-tree-grid-summary-export',
  styleUrls: ['./tree-grid-summary-export.component.scss'],
  templateUrl: './tree-grid-summary-export.component.html'
})
export class TreeGridSummaryExportComponent {

  @ViewChild('tGrid', { read: IgxTreeGridComponent, static: true })
  public tGrid: IgxTreeGridComponent;
  public data;

  constructor(private excelExportService: IgxExcelExporterService) {
    this.data = FOODS_DATA();
  }

  public toggleSummary(column: IgxColumnComponent) {
    column.hasSummary = !column.hasSummary;
  }

  public exportButtonHandler() {
    this.excelExportService.export(this.tGrid, new IgxExcelExporterOptions('ExportedFile'));
}
}

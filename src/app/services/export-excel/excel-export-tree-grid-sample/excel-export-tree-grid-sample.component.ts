import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { ORDERS_DATA } from '../../../tree-grid/data/orders';
import { IgxPreventDocumentScrollDirective } from '../../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-excel-export-tree-grid-sample',
    styleUrls: ['./excel-export-tree-grid-sample.component.scss'],
    templateUrl: './excel-export-tree-grid-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, NgIf]
})
export class TreeGridExcelExportSample1Component implements OnInit {

  @ViewChild('igxTreeGrid1', { static: true })
  public igxTreeGrid1: IgxTreeGridComponent;

  public data: any[];

  public options = {
    digitsInfo: '1.2-2',
    currencyCode: 'USD'
  };
  public formatOptions = this.options;


  constructor() { }

  public ngOnInit(): void {
    this.data = ORDERS_DATA;
  }
    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
      if (args.header == 'Age' && args.columnIndex == 1) {
        args.cancel = true;
      }
    });
    this.excelExportService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
    });
    this.excelExportService.exportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
    });
    */

}

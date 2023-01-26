import { Component, OnInit, ViewChild } from '@angular/core';
import {
    GridColumnDataType,
    IgxExcelExporterService,
    IgxGridComponent,
    ISortingExpression,
    SortingDirection
} from '@infragistics/igniteui-angular';
import { INVOICE_DATA } from '../data/invoiceData';

@Component({
  selector: 'app-excel-export-sample-1',
  styleUrls: ['./excel-export-sample-1.component.scss'],
  templateUrl: './excel-export-sample-1.component.html'
})
export class ExcelExportSample1Component implements OnInit {
  @ViewChild('igxGrid1', { static: true }) public igxGrid1: IgxGridComponent;

  public data = [];
  public groupExpressions: ISortingExpression[];
  public columns: { dataType: GridColumnDataType, field: string, width: string, groupable: boolean, hidden?: boolean }[] = [
    { dataType: GridColumnDataType.String, field: 'ShipCountry', width: '150', groupable: true },
    { dataType: GridColumnDataType.String, field: 'ShipCity', width: '150', groupable: true },
    { dataType: GridColumnDataType.String, field: 'ShipAddress', width: '150', groupable: true},
    { dataType: GridColumnDataType.String, field: 'PostalCode', width: '150', groupable: true },
    { dataType: GridColumnDataType.Date, field: 'OrderDate', width: '150', groupable: true },
    { dataType: GridColumnDataType.Number, field: 'Quantity', width: '150', groupable: true }
  ];

  constructor(private excelExportService: IgxExcelExporterService) {
  }

  public ngOnInit(): void {
    this.data = INVOICE_DATA;
    this.groupExpressions  = [
        { dir: SortingDirection.Asc, fieldName: 'ShipCountry' },
        { dir: SortingDirection.Asc, fieldName: 'ShipCity' }
    ];
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


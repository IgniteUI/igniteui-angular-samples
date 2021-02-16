import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxExcelExporterOptions,
         IgxExcelExporterService,
         IgxGridComponent } from "igniteui-angular";
import { INVOICE_DATA } from "../data/invoiceData";

@Component({
  selector: "app-excel-export-sample-1",
  styleUrls: ["./excel-export-sample-1.component.scss"],
  templateUrl: "./excel-export-sample-1.component.html"
})
export class ExcelExportSample1Component implements OnInit {
  @ViewChild("igxGrid1", { static: true }) public igxGrid1: IgxGridComponent;

  public data = [];
  public columns = [
    { dataType: 'string', field: 'ShipCountry', width: 150, groupable: true },
    { dataType: 'string', field: 'ShipCity', width: 150, groupable: true },
    { dataType: 'string', field: 'ShipAddress', width: 150, groupable: true},
    { dataType: 'string', field: 'PostalCode', width: 150, groupable: true },
    { dataType: 'date', field: 'OrderDate', width: 150, groupable: true },
    { dataType: 'number', field: 'Quantity', width: 150, groupable: true }
  ];

  constructor(private excelExportService: IgxExcelExporterService) {
  }

  public ngOnInit(): void {
    this.data = INVOICE_DATA;
  }

  public exportButtonHandler() {
    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
      if (args.header == "Age" && args.columnIndex == 1) {
        args.cancel = true;
      }
    });
    this.excelExportService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
    });
    this.excelExportService.onExportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
    });
    */
    this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportFileFromGrid"));
  }
}


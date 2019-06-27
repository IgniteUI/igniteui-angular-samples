import { Component, ViewChild } from "@angular/core";

import { IgxExcelExporterOptions,
         IgxExcelExporterService,
         IgxGridComponent } from "igniteui-angular";

@Component({
  selector: "app-excel-export-sample-1",
  styleUrls: ["./excel-export-sample-1.component.scss"],
  templateUrl: "./excel-export-sample-1.component.html"
})
export class ExcelExportSample1Component {

  @ViewChild("igxGrid1", { static: true }) public igxGrid1: IgxGridComponent;
  public localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];

  constructor(private excelExportService: IgxExcelExporterService) {
  }

  public exportButtonHandler() {
    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
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

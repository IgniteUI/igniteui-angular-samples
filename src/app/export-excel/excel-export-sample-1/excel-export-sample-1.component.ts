import { Component, ViewChild } from "@angular/core";

import { IgxExcelExporterService,
         IgxExcelExporterOptions,
         IColumnExportingEventArgs,
         IRowExportingEventArgs,
         IExcelExportEndedEventArgs } from "igniteui-angular/services/index";

import { IgxGridComponent } from "igniteui-angular/grid/grid.component";

@Component({
  selector: "app-excel-export-sample-1",
  templateUrl: "./excel-export-sample-1.component.html",
  styleUrls: ["./excel-export-sample-1.component.scss"]
})
export class ExcelExportSample1Component {

  @ViewChild("igxGrid1") igxGrid1: IgxGridComponent;
  localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];

  constructor() {
  }

  exportButtonHandler() {
    let ees: IgxExcelExporterService = new IgxExcelExporterService();
    //ees.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
    //  if (args.header == "Age" && args.columnIndex == 1) {
    //    args.cancel = true;
    //  }
    //});
    //ees.onRowExport.subscribe((args: IRowExportingEventArgs) => {
    //});
    //ees.onExportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
    //});
    ees.export(this.igxGrid1, new IgxExcelExporterOptions("ExportFileFromGrid"));
  }

}

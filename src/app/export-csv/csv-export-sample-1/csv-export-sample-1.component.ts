import { Component, ViewChild } from "@angular/core";

import { CsvFileTypes,
         IColumnExportingEventArgs,
         ICsvExportEndedEventArgs,
         IgxCsvExporterService,
         IgxCsvExporterOptions,
         IRowExportingEventArgs } from "igniteui-angular/services/index";

import { IgxGridComponent } from "igniteui-angular/grid/grid.component";

@Component({
  selector: "app-csv-export-sample-1",
  styleUrls: ["./csv-export-sample-1.component.scss"],
  templateUrl: "./csv-export-sample-1.component.html"
})
export class CsvExportSample1Component {

  @ViewChild("igxGrid1") public igxGrid1: IgxGridComponent;
  public localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];

  constructor(private csvExportService: IgxCsvExporterService) {
  }

  public exportButtonHandler() {
    // this.csvExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
    //   if (args.header == "Age" && args.columnIndex == 1) {
    //     args.cancel = true;
    //   }
    // });
    // this.csvExportService.onRowExport.subscribe((args: IRowExportingEventArgs) => {
    // });
    // this.csvExportService.onExportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
    // });
    this.csvExportService.export(this.igxGrid1, new IgxCsvExporterOptions("ExportFileFromGrid", CsvFileTypes.CSV));
  }

}

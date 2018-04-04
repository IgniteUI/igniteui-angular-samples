import { Component, ViewChild } from '@angular/core';

import { IgxCsvExporterService,
         IgxCsvExporterOptions,
         IColumnExportingEventArgs,
         IRowExportingEventArgs,
         ICsvExportEndedEventArgs,
         CsvFileTypes } from "igniteui-angular/services/index";

import { IgxGridComponent } from "igniteui-angular/grid/grid.component";

@Component({
  selector: 'app-csv-export-sample-1',
  templateUrl: './csv-export-sample-1.component.html',
  styleUrls: ['./csv-export-sample-1.component.scss']
})
export class CsvExportSample1Component {

  @ViewChild("igxGrid1") igxGrid1: IgxGridComponent;
  localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];

  constructor() {
  }

  exportButtonHandler() {
    let ees: IgxCsvExporterService = new IgxCsvExporterService();
    //ees.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
    //  if (args.header == "Age" && args.columnIndex == 1) {
    //    args.cancel = true;
    //  }
    //});
    //ees.onRowExport.subscribe((args: IRowExportingEventArgs) => {
    //});
    //ees.onExportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
    //});
    ees.export(this.igxGrid1, new IgxCsvExporterOptions("ExportFileFromGrid", CsvFileTypes.CSV));
  }

}

import { Component } from "@angular/core";

import { CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService } from "igniteui-angular/services/index";

@Component({
  selector: "app-csv-export",
  styleUrls: ["./csv-export.component.scss"],
  templateUrl: "./csv-export.component.html"
})
export class CsvExportComponent {

  public localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];

  constructor() {
  }

  public exportCsvButtonHandler() {
    let ces: IgxCsvExporterService = new IgxCsvExporterService();
    let opt: IgxCsvExporterOptions = new IgxCsvExporterOptions("CSVExportFileFromData", CsvFileTypes.CSV);
    ces.exportData(this.localData, opt);
  }

  public exportTsvButtonHandler() {
    let ces: IgxCsvExporterService = new IgxCsvExporterService();
    let opt: IgxCsvExporterOptions = new IgxCsvExporterOptions("CSVExportFileFromData", CsvFileTypes.TSV);
    ces.exportData(this.localData, opt);
  }

}

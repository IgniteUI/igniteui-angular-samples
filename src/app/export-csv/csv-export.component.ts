import { Component } from "@angular/core";

import { IgxCsvExporterService, IgxCsvExporterOptions, CsvFileTypes } from "igniteui-angular/services/index";

@Component({
  selector: 'app-csv-export',
  templateUrl: './csv-export.component.html',
  styleUrls: ['./csv-export.component.scss']
})
export class CsvExportComponent {

  localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];

  constructor() {
  }

  exportCsvButtonHandler() {
    let ces: IgxCsvExporterService = new IgxCsvExporterService();
    let opt: IgxCsvExporterOptions = new IgxCsvExporterOptions("CSVExportFileFromData", CsvFileTypes.CSV);
    ces.exportData(this.localData, opt);
  }

  exportTsvButtonHandler() {
    let ces: IgxCsvExporterService = new IgxCsvExporterService();
    let opt: IgxCsvExporterOptions = new IgxCsvExporterOptions("CSVExportFileFromData", CsvFileTypes.TSV);
    ces.exportData(this.localData, opt);
  }

}

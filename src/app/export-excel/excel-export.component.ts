import { Component } from "@angular/core";

import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";

@Component({
  selector: "app-excel-export",
  templateUrl: "./excel-export.component.html",
  styleUrls: ["./excel-export.component.scss"]
})
export class ExcelExportComponent {

  localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];
  
  constructor() {
  }

  exportButtonHandler() {
    let ees: IgxExcelExporterService = new IgxExcelExporterService();
    ees.exportData(this.localData, new IgxExcelExporterOptions("ExportFileFromData"));
  }

}

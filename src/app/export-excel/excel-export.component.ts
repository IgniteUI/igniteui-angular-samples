import { Component } from "@angular/core";

import { IgxExcelExporterOptions, IgxExcelExporterService } from "igniteui-angular/services/index";

@Component({
  selector: "app-excel-export",
  styleUrls: ["./excel-export.component.scss"],
  templateUrl: "./excel-export.component.html"
})
export class ExcelExportComponent {

  public localData = [
    { Name: "Eric Ridley", Age: "26" },
    { Name: "Alanis Brook", Age: "22" },
    { Name: "Jonathan Morris", Age: "23" }
  ];
  
  constructor() {
  }

  public exportButtonHandler() {
    let ees: IgxExcelExporterService = new IgxExcelExporterService();
    ees.exportData(this.localData, new IgxExcelExporterOptions("ExportFileFromData"));
  }

}

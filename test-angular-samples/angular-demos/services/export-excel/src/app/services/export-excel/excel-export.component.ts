import { Component } from "@angular/core";

import { IgxExcelExporterOptions, IgxExcelExporterService } from "igniteui-angular";

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

  constructor(private excelExportService: IgxExcelExporterService) {
  }

  public exportButtonHandler() {
    this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("ExportFileFromData"));
  }

}

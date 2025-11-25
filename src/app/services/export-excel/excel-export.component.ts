/* eslint-disable @typescript-eslint/naming-convention */
import { Component, inject } from '@angular/core';

import { IgxExcelExporterOptions, IgxExcelExporterService } from 'igniteui-angular/core';

@Component({
    selector: 'app-excel-export',
    styleUrls: ['./excel-export.component.scss'],
    templateUrl: './excel-export.component.html'
})
export class ExcelExportComponent {
  private excelExportService = inject(IgxExcelExporterService);


  public localData = [
    { Name: 'Eric Ridley', Age: '26' },
    { Name: 'Alanis Brook', Age: '22' },
    { Name: 'Jonathan Morris', Age: '23' }
  ];

  public exportButtonHandler() {
    this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportFileFromData'));
  }

}

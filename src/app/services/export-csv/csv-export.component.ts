/* eslint-disable @typescript-eslint/naming-convention */
import { Component, inject } from '@angular/core';

import { CsvFileTypes, IgxCsvExporterOptions, IgxCsvExporterService } from 'igniteui-angular';

@Component({
    selector: 'app-csv-export',
    styleUrls: ['./csv-export.component.scss'],
    templateUrl: './csv-export.component.html'
})
export class CsvExportComponent {
  private csvExportService = inject(IgxCsvExporterService);


  public localData = [
    { Name: 'Eric Ridley', Age: '26' },
    { Name: 'Alanis Brook', Age: '22' },
    { Name: 'Jonathan Morris', Age: '23' }
  ];

  public exportCsvButtonHandler() {
    const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions('CSVExportFileFromData', CsvFileTypes.CSV);
    this.csvExportService.exportData(this.localData, opt);
  }

  public exportTsvButtonHandler() {
    const opt: IgxCsvExporterOptions = new IgxCsvExporterOptions('CSVExportFileFromData', CsvFileTypes.TSV);
    this.csvExportService.exportData(this.localData, opt);
  }

}

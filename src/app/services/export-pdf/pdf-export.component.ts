import { Component, inject, signal } from '@angular/core';
import { IgxPdfExporterOptions, IgxPdfExporterService } from 'igniteui-angular';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-pdf-export',
    styleUrls: ['./pdf-export.component.scss'],
    templateUrl: './pdf-export.component.html',
    imports: [IgxButtonDirective]
})
export class PdfExportComponent {
  private pdfExportService = inject(IgxPdfExporterService);

  public localData = signal([
    { Name: 'Eric Ridley', Age: '26' },
    { Name: 'Alanis Brook', Age: '22' },
    { Name: 'Jonathan Morris', Age: '23' }
  ]);

  public exportButtonHandler() {
    this.pdfExportService.exportData(this.localData(), new IgxPdfExporterOptions('ExportFileFromData'));
  }
}

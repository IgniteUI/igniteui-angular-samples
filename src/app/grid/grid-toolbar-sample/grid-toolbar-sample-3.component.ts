import { Component } from '@angular/core';
import { CsvFileTypes, IColumnExportingEventArgs, IGridToolbarExportEventArgs, IgxCsvExporterOptions, IgxExcelExporterOptions, IgxExporterOptionsBase, IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent } from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-toolbar-sample-3',
    styleUrls: ['./grid-toolbar-sample-3.component.scss'],
    templateUrl: './grid-toolbar-sample-3.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class GridToolbarSample3Component {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }

    public configureExport(args: IGridToolbarExportEventArgs) {
        // You can customize the exporting from this event
        const options: IgxExporterOptionsBase = args.options ;
        
        options.fileName = `Report_${new Date().toDateString()}`;

        if (options instanceof IgxExcelExporterOptions) {
            const excelOptions = options as IgxExcelExporterOptions;
            excelOptions.columnWidth = 10;
        } else {
            const csvOptions = options as IgxCsvExporterOptions;
            csvOptions.fileType = CsvFileTypes.TSV;
            csvOptions.valueDelimiter = '\t';
        }

        args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
            // Don't export image fields
            columnArgs.cancel = columnArgs.header === 'Athlete' ||
                                columnArgs.header === 'Country';
        });
    }
}

import { Component } from '@angular/core';
import { CsvFileTypes, IColumnExportingEventArgs, IgxCsvExporterOptions, IgxExcelExporterOptions, IgxExporterOptionsBase } from 'igniteui-angular/grids/core';
import { IGridToolbarExportEventArgs, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-toolbar-sample-2',
    styleUrls: ['./tree-grid-toolbar-sample-2.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-2.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarSample2Component {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }

    public configureExport(args: IGridToolbarExportEventArgs) {
        // You can customize the exporting from this event
        const options: IgxExporterOptionsBase = args.options;
        
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
            // Don't export image field
            columnArgs.cancel = columnArgs.header === 'Name';
        });
    }
}

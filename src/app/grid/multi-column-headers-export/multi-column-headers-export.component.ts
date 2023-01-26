import { Component, ViewChild } from '@angular/core';
import { IgxExporterEvent, IgxGridComponent } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-multi-column-headers-export',
    styleUrls: [ 'multi-column-headers-export.component.scss' ],
    templateUrl: 'multi-column-headers-export.component.html'
})
export class GridMultiColumnHeadersExportComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
    public exportHeaders = true;

    public exportStarted(args: IgxExporterEvent) {
        args.options.ignoreMultiColumnHeaders = !this.exportHeaders;
    }
}

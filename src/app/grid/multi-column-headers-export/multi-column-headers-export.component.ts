import { Component, ViewChild } from '@angular/core';
import { IgxExporterEvent, IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-multi-column-headers-export',
    styleUrls: ['multi-column-headers-export.component.scss'],
    templateUrl: 'multi-column-headers-export.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, FormsModule, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxColumnGroupComponent]
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

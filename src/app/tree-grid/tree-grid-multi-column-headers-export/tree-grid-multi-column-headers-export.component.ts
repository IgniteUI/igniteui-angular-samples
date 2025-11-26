import { Component } from '@angular/core';
import { GridSelectionMode, IgxExporterEvent, IgxTreeGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tree-grid-multi-column-headers-export-sample',
    styleUrls: ['./tree-grid-multi-column-headers-export.component.scss'],
    templateUrl: './tree-grid-multi-column-headers-export.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, FormsModule, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxColumnGroupComponent]
})
export class TreeGridMultiColumnHeadersExportComponent {
    public data = generateEmployeeDetailedFlatData();
    public selectionMode: GridSelectionMode = 'none';
    public exportHeaders = true;

    public exportStarted(args: IgxExporterEvent) {
        args.options.ignoreMultiColumnHeaders = !this.exportHeaders;
    }
}

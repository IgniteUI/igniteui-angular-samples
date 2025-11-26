import { Component, OnInit } from '@angular/core';
import { IgxExporterEvent, IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnGroupComponent, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { HIERARCHICAL_DATA } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-multi-column-export',
    styleUrls: ['./hierarchical-grid-multi-column-export.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-export.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxSwitchComponent, FormsModule, IgxGridToolbarPinningComponent, IgxGridToolbarHidingComponent, IgxGridToolbarExporterComponent, IgxColumnGroupComponent, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridMultiColumnHeadersExportComponent implements OnInit {
    public localdata = [];
    public exportHeaders = true;

    public exportStarted(args: IgxExporterEvent) {
        args.options.ignoreMultiColumnHeaders = !this.exportHeaders;
    }

    public ngOnInit(): void {
        this.localdata = HIERARCHICAL_DATA;
    }
}

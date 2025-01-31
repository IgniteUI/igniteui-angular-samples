import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSwitchComponent, IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-hierarchical-grid-toolbar-options',
    styleUrls: ['./hierarchical-grid-toolbar-options.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-options.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, NgIf, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridToolbarOptionsSampleComponent {
    public data: any[];
    toolbarTitle = 'Singers';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;
    enableFiltering = true;

    constructor() {
        this.data = SINGERS;
    }
}

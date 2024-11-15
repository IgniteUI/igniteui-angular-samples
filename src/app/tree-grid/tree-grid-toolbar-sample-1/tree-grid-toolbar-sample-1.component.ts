import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSwitchComponent, IgxTreeGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-tree-grid-toolbar-sample-1',
    styleUrls: ['./tree-grid-toolbar-sample-1.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-1.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, NgIf, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent]
})
export class TreeGridToolbarSample1Component {

    data: any[];
    toolbarTitle = 'Tree grid toolbar';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;
    enableFiltering = true;

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}

import { Component, OnInit } from '@angular/core';
import { GridSelectionMode, IgxTreeGridComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxCSVTextDirective, IgxColumnComponent } from 'igniteui-angular';
import { FULL_EMPLOYEE_DATA } from '../data/employees';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-employees-sample',
    styleUrls: ['./tree-grid-employees-sample.component.scss'],
    templateUrl: './tree-grid-employees-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxCSVTextDirective, IgxColumnComponent]
})
export class TreeGridEmployeesSampleComponent implements OnInit {
    public localData: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() { }

    public ngOnInit() {
        this.localData = FULL_EMPLOYEE_DATA();
    }
}

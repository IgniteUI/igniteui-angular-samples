import { Component, OnInit } from '@angular/core';
import { GridSelectionMode, IgxCSVTextDirective, IgxColumnComponent, IgxExcelTextDirective, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
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

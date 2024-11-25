import { AfterViewInit, Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxTreeGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-hiding-toolbar-sample',
    styleUrls: ['./tree-grid-column-hiding-toolbar-sample.component.scss'],
    templateUrl: './tree-grid-column-hiding-toolbar-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxColumnComponent]
})
export class TreeGridColumnHidingToolbarSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}

import { Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxTreeGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-column-hiding-sample',
    styleUrls: ['./tree-grid-column-hiding-sample.component.scss'],
    templateUrl: './tree-grid-column-hiding-sample.component.html',
    imports: [IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridColumnHidingSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}

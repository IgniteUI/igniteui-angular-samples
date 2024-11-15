import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxActionStripComponent, IgxTreeGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, IgxGridEditingActionsComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-add-row-sample',
    styleUrls: ['./tree-grid-add-row-sample.component.scss'],
    templateUrl: './tree-grid-add-row-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, IgxActionStripComponent, IgxGridEditingActionsComponent]
})
export class TreeGridAddRowSampleComponent implements OnInit {
    @ViewChild('actionstrip') actionStrip: IgxActionStripComponent;
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxActionStripComponent } from 'igniteui-angular/action-strip';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridEditingActionsComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
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

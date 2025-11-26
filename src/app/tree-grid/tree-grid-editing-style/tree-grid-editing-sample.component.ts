import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-editing-sample',
    styleUrls: ['./tree-grid-editing-sample.component.scss'],
    templateUrl: './tree-grid-editing-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent]
})
export class TreeGridEditingStyleComponent implements OnInit {
    @ViewChild(IgxTreeGridComponent, { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}

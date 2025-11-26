import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, IgxGridToolbarComponent, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-advanced-filtering-style',
    styleUrls: ['./tree-grid-advanced-filtering-style.component.scss'],
    templateUrl: './tree-grid-advanced-filtering-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent]
})
export class TreeGridAdvancedFilteringStyleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}

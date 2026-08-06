import { Component, OnInit } from '@angular/core';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-selection-template-numbers',
    styleUrls: ['./tree-grid-selection-template-numbers.component.scss'],
    templateUrl: './tree-grid-selection-template-numbers.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent]
})
export class TreeGridSelectionTemplateNumbersSampleComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}

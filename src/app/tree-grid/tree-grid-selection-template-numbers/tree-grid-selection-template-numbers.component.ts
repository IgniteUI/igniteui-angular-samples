import { Component, OnInit } from '@angular/core';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxTreeGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent } from 'igniteui-angular';
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

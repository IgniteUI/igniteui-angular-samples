import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-selection-template-numbers',
    styleUrls: ['./hierarchical-grid-selection-template-numbers.component.scss'],
    templateUrl: 'hierarchical-grid-selection-template-numbers.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowIslandComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class HGridSelectionTemplateNumbersSampleComponent {
    public localData;

    constructor() {
        this.localData = SINGERS;
    }
}

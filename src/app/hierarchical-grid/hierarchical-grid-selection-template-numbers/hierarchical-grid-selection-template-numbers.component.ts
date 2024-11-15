import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxRowIslandComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent } from 'igniteui-angular';
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

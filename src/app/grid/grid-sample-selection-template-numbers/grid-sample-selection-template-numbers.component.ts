import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-selection-template-numbers',
    styleUrls: ['./grid-sample-selection-template-numbers.component.scss'],
    templateUrl: 'grid-sample-selection-template-numbers.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = [...DATA];
    }
}

import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
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

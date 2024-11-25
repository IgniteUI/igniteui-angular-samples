import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'grid-column-autosizing-sample',
    styleUrls: ['./grid-column-autosizing.component.scss'],
    templateUrl: 'grid-column-autosizing.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class GridColumnAutosizingComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}


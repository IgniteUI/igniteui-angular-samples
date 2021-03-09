import { Component } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-selection-template-numbers',
    styleUrls: ['./grid-sample-selection-template-numbers.component.scss'],
    templateUrl: 'grid-sample-selection-template-numbers.component.html'
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = [...DATA];
    }
}

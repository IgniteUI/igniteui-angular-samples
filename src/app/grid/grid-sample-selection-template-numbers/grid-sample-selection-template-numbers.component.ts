import { Component } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-selection-template-numbers',
    styleUrls: ['./grid-sample-selection-template-numbers.component.scss'],
    templateUrl: 'grid-sample-selection-template-numbers.component.html',
    standalone: false
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = [...DATA];
    }
}

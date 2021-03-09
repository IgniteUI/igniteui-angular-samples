import { Component } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-selection-template-excel',
    styleUrls: ['./grid-sample-selection-template-excel.component.scss'],
    templateUrl: 'grid-sample-selection-template-excel.component.html'
})

export class GridSelectionTemplateExcelComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

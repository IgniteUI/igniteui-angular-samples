import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-external-advanced-filtering',
    templateUrl: './tree-grid-external-advanced-filtering.component.html',
    styleUrls: ['./tree-grid-external-advanced-filtering.component.scss']
})
export class TreeGridExternalAdvancedFilteringComponent {

    public data: any[];
    constructor() {
        this.data = FOODS_DATA();
    }
}

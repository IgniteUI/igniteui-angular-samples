import { Component } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'grid-column-autosizing-sample',
    styleUrls: ['./grid-column-autosizing.component.scss'],
    templateUrl: 'grid-column-autosizing.component.html',
    standalone: false
})

export class GridColumnAutosizingComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}


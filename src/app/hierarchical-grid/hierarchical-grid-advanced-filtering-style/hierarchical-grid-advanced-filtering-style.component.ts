import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering-style',
    styleUrls: ['./hierarchical-grid-advanced-filtering-style.component.scss'],
    templateUrl: 'hierarchical-grid-advanced-filtering-style.component.html',
    standalone: false
})

export class HGridAdvancedFilteringStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

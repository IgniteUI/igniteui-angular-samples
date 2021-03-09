import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging-style.component.scss'],
    templateUrl: 'hierarchical-grid-paging-style.component.html'
})

export class HGridPagingStyleSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

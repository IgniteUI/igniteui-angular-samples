import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-toolbar-title',
    styleUrls: ['./hierarchical-grid-toolbar-title.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-title.component.html'
})

export class HGridToolbarTitleSampleComponent {

    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}

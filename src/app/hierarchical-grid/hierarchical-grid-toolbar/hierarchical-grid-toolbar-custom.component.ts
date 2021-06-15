import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-toolbar-custom',
    styleUrls: ['./hierarchical-grid-toolbar-custom.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-custom.component.html'
})

export class HGridToolbarCustomSampleComponent {
    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}

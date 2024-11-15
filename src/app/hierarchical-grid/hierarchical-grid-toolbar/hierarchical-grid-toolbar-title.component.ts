import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-toolbar-title',
    styleUrls: ['./hierarchical-grid-toolbar-title.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-title.component.html',
    standalone: false
})

export class HGridToolbarTitleSampleComponent {

    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}

import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'hierarchical-grid-column-autosizing',
    styleUrls: ['./hgrid-column-autosizing.component.scss'],
    templateUrl: './hgrid-column-autosizing.component.html',
})

export class HGridColumnAutoSizingSampleComponent {
    public localData;
    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}

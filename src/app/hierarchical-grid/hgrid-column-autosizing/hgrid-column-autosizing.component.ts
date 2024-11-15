import { Component } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
@Component({
    selector: 'hierarchical-grid-column-autosizing',
    styleUrls: ['./hgrid-column-autosizing.component.scss'],
    templateUrl: './hgrid-column-autosizing.component.html',
    standalone: false
})

export class HGridColumnAutoSizingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }
}

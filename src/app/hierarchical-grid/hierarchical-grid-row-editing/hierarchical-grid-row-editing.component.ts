import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-row-editing',
    styleUrls: ['./hierarchical-grid-row-editing.component.scss'],
    templateUrl: 'hierarchical-grid-row-editing.component.html'
})
export class HGridRowEditingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

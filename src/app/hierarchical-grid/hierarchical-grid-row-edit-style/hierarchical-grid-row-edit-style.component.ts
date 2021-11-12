import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-row-edit-style',
    styleUrls: ['./hierarchical-grid-row-edit-style.component.scss'],
    templateUrl: 'hierarchical-grid-row-edit-style.component.html'
})

export class HGridRowEditStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
}

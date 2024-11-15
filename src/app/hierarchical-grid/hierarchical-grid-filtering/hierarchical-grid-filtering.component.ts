import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-filtering',
    styleUrls: ['./hierarchical-grid-filtering.component.scss'],
    templateUrl: 'hierarchical-grid-filtering.component.html',
    standalone: false
})

export class HGridFilteringSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

import { Component } from '@angular/core';
import { athletesData } from '../../data/athletesData';

@Component({
    selector: 'app-grid-toolbar-sample-4',
    styleUrls: ['./grid-toolbar-sample-4.component.scss'],
    templateUrl: './grid-toolbar-sample-4.component.html',
    standalone: false
})
export class GridToolbarSample4Component {
    public data: any[];

    constructor() {
        this.data = athletesData;
    }

}

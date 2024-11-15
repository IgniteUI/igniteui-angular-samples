import { Component } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-2',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-2.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-2.component.html',
    standalone: false
})

export class HGridExcelStyleFilteringSample2Component {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-style',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-style.component.scss'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-style.component.html',
    standalone: false
})
export class HGridExcelStyleFilteringStyleComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
}

import { Component } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';

@Component({
    selector: 'app-tree-grid-export-visualization',
    templateUrl: './tree-grid-export-visualization.component.html',
    styleUrls: ['./tree-grid-export-visualization.component.scss']
})
export class TreeGridExportVisualizationComponent {
    public localData = [];
    private data = ORDERS_DATA;

    constructor() {
        for (let i = 0; i < 15000; i += 3) {
            for (let c = 0; c < this.data.length; c++) {
                this.localData.push(this.data[c]);
            }
        }
    }

    longRunning(toolbar: any) {
        toolbar.showProgress = true;
        setTimeout(() => toolbar.showProgress = false, 5000);
    }
}

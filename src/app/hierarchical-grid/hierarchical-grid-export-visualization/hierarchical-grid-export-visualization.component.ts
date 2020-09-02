import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-export-visualization',
    templateUrl: './hierarchical-grid-export-visualization.component.html',
    styleUrls: ['./hierarchical-grid-export-visualization.component.scss']
})
export class HierarchicalGridExportVisualizationComponent {
    public localData = [];
    constructor() {
        for (let i = 0; i < 5000; i++) {
            for (let c = 0; c < SINGERS.length; c++)
                this.localData.push(SINGERS[c]);
        }
    }

    formatter = (a) => a;
}

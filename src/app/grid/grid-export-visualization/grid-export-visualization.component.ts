import { Component, OnInit } from '@angular/core';
import { data } from '../../data/athletesData';

@Component({
    selector: 'app-grid-export-visualization',
    templateUrl: './grid-export-visualization.component.html',
    styleUrls: ['./grid-export-visualization.component.scss']
})
export class GridExportVisualizationComponent implements OnInit {
    public localData = [];
    constructor() {
    }

    ngOnInit(): void {
        for (let i = 0; i < 25; i++) {
            for (let c = 0; c < data.length; c++) {
                this.localData.push(data[c]);
            }
        }
    }
}

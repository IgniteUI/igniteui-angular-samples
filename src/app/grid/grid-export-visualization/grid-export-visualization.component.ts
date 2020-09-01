import { Component, OnInit } from '@angular/core';
import { INVOICE_DATA } from '../../data/invoiceData';

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
        for (let i = 0; i < 50; i++) {
            for (let c = 0; c < INVOICE_DATA.length; c++) {
                this.localData.push(INVOICE_DATA[c]);
            }
        }
    }
}

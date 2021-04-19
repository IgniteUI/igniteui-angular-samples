import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { Singer, SINGERS } from '../../data/artistData';

@Component({
    selector: 'app-hierarchical-grid-excel-export-sample',
    styleUrls: ['hierarchical-grid-excel-export.sample.scss'],
    templateUrl: 'hierarchical-grid-excel-export.sample.html'
})
export class HGridExcelExportSampleComponent {
    public data: Singer[];
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.data = SINGERS;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public formatter = (a) => a;
}

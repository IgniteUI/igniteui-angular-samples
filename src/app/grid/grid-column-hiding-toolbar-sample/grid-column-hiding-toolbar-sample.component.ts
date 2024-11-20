import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-column-hiding-toolbar-sample',
    styleUrls: ['./grid-column-hiding-toolbar-sample.component.scss'],
    templateUrl: './grid-column-hiding-toolbar-sample.component.html',
    standalone: false
})
export class GridColumnHidingToolbarSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}

import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-composite-data',
    styleUrls: ['./grid-composite-data.component.scss'],
    templateUrl: './grid-composite-data.component.html',
    standalone: false
})
export class GridCompositeDataComponent implements OnInit {

    public data;
    constructor() {}

    public ngOnInit() {
        this.data = DATA;
    }
}

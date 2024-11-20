import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-column-hiding-toolbar-style',
    styleUrls: ['./grid-column-hiding-toolbar-style.component.scss'],
    templateUrl: './grid-column-hiding-toolbar-style.component.html',
    standalone: false
})
export class GridColumnHidingToolbarStyleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}

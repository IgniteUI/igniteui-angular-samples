import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-hierarchical-grid-multi-column-styling',
    styleUrls: ['./hierarchical-grid-multi-column-styling.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-styling.component.html'
})

export class HGridMultiHeadersStylingComponent implements OnInit {
    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = DATA;
    }
}

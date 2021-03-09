import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-external-outlet',
    styleUrls: ['./hierarchical-grid-external-outlet-sample.component.scss'],
    templateUrl: 'hierarchical-grid-external-outlet-sample.component.html'
})

export class HierarchicalGridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = SINGERS;

    }
}

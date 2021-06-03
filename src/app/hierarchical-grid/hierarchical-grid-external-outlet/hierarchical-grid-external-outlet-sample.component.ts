import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-external-outlet',
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

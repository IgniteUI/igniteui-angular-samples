import { AfterViewInit, Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    selector: 'app-tree-grid-column-hiding-toolbar-sample',
    styleUrls: ['./tree-grid-column-hiding-toolbar-sample.component.scss'],
    templateUrl: './tree-grid-column-hiding-toolbar-sample.component.html',
    standalone: false
})
export class TreeGridColumnHidingToolbarSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}

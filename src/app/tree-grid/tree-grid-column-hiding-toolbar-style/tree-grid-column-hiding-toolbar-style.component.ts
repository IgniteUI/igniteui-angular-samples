import { AfterViewInit, Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    selector: 'app-tree-grid-column-hiding-toolbar-style',
    styleUrls: ['./tree-grid-column-hiding-toolbar-style.component.scss'],
    templateUrl: './tree-grid-column-hiding-toolbar-style.component.html',
    standalone: false
})
export class TreeGridColumnHidingToolbarStyleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}

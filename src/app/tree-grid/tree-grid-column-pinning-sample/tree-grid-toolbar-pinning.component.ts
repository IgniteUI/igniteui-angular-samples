import { Component, ViewChild, OnInit } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { ActivatedRoute } from '@angular/router';

@Component({
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['tree-grid-toolbar-pinning.component.scss'],
    templateUrl: 'tree-grid-toolbar-pinning.component.html'

})

export class TreeGridPinningToolbarSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public dark: boolean = false;

    constructor(private activatedRoute: ActivatedRoute) {
        this.data = generateEmployeeDetailedFlatData();
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.dark = params.dark === 'true' ? true : false;
        });
    }
}

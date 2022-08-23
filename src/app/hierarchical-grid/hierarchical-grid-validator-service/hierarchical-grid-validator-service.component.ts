import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';

@Component({
    selector: 'app-hierarchical-grid-validator-service',
    styleUrls: ['./hierarchical-grid-validator-service.component.scss'],
    templateUrl: './hierarchical-grid-validator-service.component.html'
})
export class HierarchicalGridValidatorServiceComponent implements OnInit {
    @ViewChild('childGrid', { static: true })
    private childGrid: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public data: Singer[];

    public rowEdit: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public formatter = a => a;

}
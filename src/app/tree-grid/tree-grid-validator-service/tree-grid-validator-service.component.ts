/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IgxTreeGridComponent
} from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-validator-service-component',
    styleUrls: ['tree-grid-validator-service.component.scss'],
    templateUrl: 'tree-grid-validator-service.component.html'
})
export class TreeGridValidatorServiceComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}

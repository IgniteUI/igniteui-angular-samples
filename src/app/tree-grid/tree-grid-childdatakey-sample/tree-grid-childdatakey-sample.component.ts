import { Component, OnInit } from '@angular/core';
import { EMPLOYEE_DATA } from './data';
import { IgxColumnComponent } from 'igniteui-angular';

@Component({
    selector: "app-tree-grid-childdatakey-sample",
    styleUrls: ["./tree-grid-childdatakey-sample.component.scss"],
    templateUrl: "./tree-grid-childdatakey-sample.component.html"
})
export class TreeGridChilddatakeySampleComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = EMPLOYEE_DATA;
    }

    public initColumn(column: IgxColumnComponent) {
        column.filterable = true;
        column.sortable = true;
        column.editable = true;
        column.movable = true;
        column.resizable = true;
    }
}

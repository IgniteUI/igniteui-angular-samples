/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, RowType } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
@Component({
    selector: 'app-hgrid-row-row-styles',
    styleUrls: ['./hgrid-rowStyles.component.scss'],
    templateUrl: 'hgrid-rowStyles.component.html',
    standalone: false
})

export class HGridRowStylesSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public  rowStyles = {
        background:(row: RowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
        'border-left': (row: RowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
    };

    public  childRowStyles = {
        'border-left': (row: RowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
    };
    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

}

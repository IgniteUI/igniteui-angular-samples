import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxNumberSummaryOperand, IgxSummaryResult, IgxPaginatorComponent, IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

class DiscontinuedSummary {
    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'products',
            label: 'Products',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Products',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) =>  rec).length
            });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: IgxNumberSummaryOperand.sum(allData.filter((rec) =>  rec['Discontinued']).map(r => r[fieldName]))
        });
        return result;
    }
}
@Component({
    selector: 'app-grid-all-data-summary',
    styleUrls: ['./grid-allData-summary.component.scss'],
    templateUrl: './grid-allData-summary.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, NgIf, IgxPaginatorComponent, IgxColumnComponent]
})
export class GridAllDataSummaryComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public discontinuedSummary = DiscontinuedSummary;
    public data;

    constructor() {
        this.data = DATA;
    }
}

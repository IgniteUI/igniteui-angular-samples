import { Component, ViewChild } from '@angular/core';
import {
    IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryOperand,
    IgxSummaryResult
} from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';

class MySummary extends IgxSummaryOperand {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        },
        {
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        },
        {
          key: 'avg',
          label: 'Avg',
          summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    }
}
class MyChildSummary extends IgxSummaryOperand {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'count',
            label: 'Count',
            summaryResult: IgxNumberSummaryOperand.count(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-summary',
    styleUrls: ['./hierarchical-grid-summary.component.scss'],
    templateUrl: 'hierarchical-grid-summary.component.html'
})

export class HGridSummarySampleComponent {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

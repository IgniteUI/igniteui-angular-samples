import { Component, ViewChild } from '@angular/core';
import {
    IgxColumnComponent,
    IgxGridComponent,
    IgxNumberSummaryOperand, IgxSummaryOperand,
    IgxSummaryResult
} from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

class MySummary extends IgxSummaryOperand {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter((rec) => rec > 10 && rec < 30).length
        });

        return result;
    }
}
@Component({
  selector: 'app-grid-sample-3',
  styleUrls: ['./grid-sample-3.component.scss'],
  templateUrl: './grid-sample-3.component.html'
})
export class GridSample3Component {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public mySummary = MySummary;
    public data;
    public productId = 0;

    constructor() {
        this.data = DATA;
        this.productId = DATA.length;
    }

    public toggleSummary(column: IgxColumnComponent) {
        column.hasSummary = !column.hasSummary;
    }
}

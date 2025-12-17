import { Component } from '@angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary {

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
class MyChildSummary {

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
    selector: 'app-hierarchical-grid-summary-styling',
    styleUrls: ['./hierarchical-grid-summary-styling.component.scss'],
    templateUrl: 'hierarchical-grid-summary-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummaryStylingComponent {
    public localdata;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

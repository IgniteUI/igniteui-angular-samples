import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IgxDateSummaryOperand, IgxHierarchicalGridComponent, IgxSummaryOperand, IgxSummaryResult, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-summary-formatter',
    styleUrls: ['./hierarchical-grid-summary-formatter.component.scss'],
    templateUrl: 'hierarchical-grid-summary-formatter.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridSummaryFormatterComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public decadeFormatter = (value: number) => Math.floor(value / 10) * 10 + 's';

    public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
        const result = summary.summaryResult;
        if (summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
            && result !== null && result !== undefined) {
            const pipe = new DatePipe('en-US');
            return pipe.transform(result, 'MMM YYYY');
        }
        return result;
    }
}

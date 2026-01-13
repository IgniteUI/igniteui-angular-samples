import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxDateSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-summary-formatter',
    styleUrls: ['./grid-summary-formatter.component.scss'],
    templateUrl: './grid-summary-formatter.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})

  export class GridSummaryFormatterComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    public ngOnInit(): void {
        this.data = DATA;
    }

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

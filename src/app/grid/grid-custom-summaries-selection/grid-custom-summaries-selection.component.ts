import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ViewChild, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { IgxDateSummaryOperand, IgxGridComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxColumnComponent, IgxCellTemplateDirective, IgxGridFooterComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary {

    public operate(data: any[] = []): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        if (data.length < 1) { return result; }
        const numberData = data.filter(rec => typeof rec === 'number');
        const boolData = data.filter(rec => typeof rec === 'boolean');
        const dates = data.filter(rec => isDate(rec));
        if (numberData.length) {
            result.push({ key: 'min', label: 'Min', summaryResult: IgxNumberSummaryOperand.min(numberData)});
            result.push({ key: 'max', label: 'Max', summaryResult: IgxNumberSummaryOperand.max(numberData)});
            result.push({ key: 'avg', label: 'Avg', summaryResult: IgxNumberSummaryOperand.average(numberData)});
            result.push({ key: 'sum', label: 'Sum', summaryResult: IgxNumberSummaryOperand.sum(numberData)});
        }
        if (boolData.length) {
            result.push({
                key: 'test', label: 'Discounted',
                summaryResult: boolData.filter(rec => rec).length  + ' of ' + boolData.length });
        }
        if (dates.length) {
            result.push({ key: 'earliest', label: 'Earliest', summaryResult: IgxDateSummaryOperand.earliest(dates)});
            result.push({ key: 'latest', label: 'Latest', summaryResult: IgxDateSummaryOperand.latest(dates)});
        }
        return result;
    }
}
@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-custom-summaries-selection.component.scss'],
    templateUrl: 'grid-custom-summaries-selection.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxGridFooterComponent]
})

export class GridCustomSummariesSelectionComponent implements AfterViewInit, OnInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];
    public selectionSummaries = [];
    private customSummary =  new MySummary();

    public ngOnInit(): void {
        this.data = DATA;
    }
    public ngAfterViewInit(): void {
        this.grid1.setSelection({
            rowStart: 2, rowEnd: 4,
            columnStart: 1, columnEnd: 4
        });
        this.calculateSummary();
        this.cdr.detectChanges();
    }
    public format(value: any) {
        if (typeof value === 'number') {
           return value.toFixed(2);
        } else if (isDate(value)) {
            return formatDate(value, 'mediumDate', 'en');
        }
        return value;
    }
    public formatCurrency(value: number) {
        if (!value) { return; }
        return '$' + value.toFixed(2);
    }

    public calculateSummary() {
        this.selectionSummaries = this.customSummary.operate(this.toArray(this.grid1.getSelectedData()));
    }

    public toArray(data) {
        let result = [];
        data.forEach(rec => result = result.concat(Object.values(rec)));
        return result;
    }
}

function isDate(value: any) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

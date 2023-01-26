import { Component, OnInit } from '@angular/core';
import { DisplayDensity, IgxNumberSummaryOperand, IgxSummaryResult } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/nwindData';

class DiscontinuedSummary {
    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'products',
            label: 'Producs',
            summaryResult: data.length
        });
        result.push({
            key: 'total',
            label: 'Total Items',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });
        result.push({
            key: 'discontinued',
            label: 'Discontinued Producs',
            summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
        });
        result.push({
            key: 'totalDiscontinued',
            label: 'Total Discontinued Items',
            summaryResult: IgxNumberSummaryOperand.sum(allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]))
        });
        return result;
    }
}
@Component({
    selector: 'app-grid-summary-template',
    styleUrls: ['./grid-summary-template.component.scss'],
    templateUrl: './grid-summary-template.component.html'
})
export class GridSummaryTemplateComponent implements OnInit {
    public discontinuedSummary = DiscontinuedSummary;
    public data;
    public summaryHeight = 135;
    public displayDensity: DisplayDensity = 'cosy';
    public displayDensities;
    public hasSummary = true;

    constructor() {
        this.data = DATA;
    }

    public ngOnInit(): void {
        this.displayDensities = [
            { label: 'compact', selected: this.displayDensity === 'compact', togglable: true },
            { label: 'cosy', selected: this.displayDensity === 'cosy', togglable: true },
            { label: 'comfortable', selected: this.displayDensity === 'comfortable', togglable: true }
        ];
    }

    public selectDensity(event): void {
        this.displayDensity = this.displayDensities[event.index].label;
    }
}

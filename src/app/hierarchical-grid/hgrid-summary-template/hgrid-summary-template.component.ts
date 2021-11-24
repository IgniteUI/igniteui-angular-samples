import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IgxHierarchicalGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult
} from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.pop();
        result.pop();
        return result;
    }
}

class GrammySummary {

    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'nominatedSingers',
            label: 'Nominated Singers',
            summaryResult: allData.filter((rec) => rec['GrammyNominations'] > 0).length
        });
        result.push({
            key: 'singersWithAwards',
            label: 'Singers with Awards',
            summaryResult: allData.filter((rec) => rec['GrammyAwards'] > 0).length
        });
        result.push({
            key: 'nominations',
            label: 'Total Nominations',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyNominations']))
        });
        result.push({
            key: 'awards',
            label: 'Total Awards',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyAwards']))
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-all-data-summary',
    styleUrls: ['./hgrid-summary-template.component.scss'],
    templateUrl: 'hgrid-summary-template.component.html'
})

export class HGridSummaryTemplateComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;
    public grammySummary = GrammySummary;
    public numberSummary = CustomNumberSummary;
    public summaryHeight = 150;
    public displayDensity = 'cosy';
    public displayDensities;
    public hasSummary = true;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.displayDensities = [
            { label: 'compact', selected: this.displayDensity === 'compact', togglable: true },
            { label: 'cosy', selected: this.displayDensity === 'cosy', togglable: true },
            { label: 'comfortable', selected: this.displayDensity === 'comfortable', togglable: true }
        ];
    }

    public selectDensity(event) {
        this.displayDensity = this.displayDensities[event.index].label;
    }
}

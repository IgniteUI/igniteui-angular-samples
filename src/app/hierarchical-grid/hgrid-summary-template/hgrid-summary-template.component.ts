import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxNumberSummaryOperand, IgxSummaryResult, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSwitchComponent, IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSummaryTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

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
    templateUrl: 'hgrid-summary-template.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxButtonGroupComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSummaryTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummaryTemplateComponent implements OnInit {
    public localdata;
    public grammySummary = GrammySummary;
    public numberSummary = CustomNumberSummary;
    public summaryHeight = 120;
    public size = 'medium';
    public sizes;
    public hasSummary = true;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event): void {
        this.size = this.sizes[event.index].label;
    }
}

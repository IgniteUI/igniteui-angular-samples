import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxNumberSummaryOperand, IgxSummaryResult, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSwitchComponent, IgxButtonGroupComponent, IgxGridComponent, IgxColumnComponent, IgxSummaryTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

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
    templateUrl: './grid-summary-template.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSwitchComponent, IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxSummaryTemplateDirective]
})
export class GridSummaryTemplateComponent implements OnInit {
    public discontinuedSummary = DiscontinuedSummary;
    public data;
    public summaryHeight = 135;
    public size = 'medium';
    public sizes;
    public hasSummary = true;

    constructor() {
        this.data = DATA;
    }

    public ngOnInit(): void {
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    public selectSize(event): void {
        this.size = this.sizes[event.index].label;
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }
}

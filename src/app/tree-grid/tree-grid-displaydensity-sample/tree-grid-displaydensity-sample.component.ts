import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import {
    IgxButtonGroupComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxTreeGridComponent
} from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

class CustomNumberSummary {
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        result.push({
            key: 'Min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-tree-grid-displaydensity-sample',
    styleUrls: ['./tree-grid-displaydensity-sample.component.scss'],
    templateUrl: './tree-grid-displaydensity-sample.component.html'
})
export class TreeGridDisplaydensitySampleComponent implements OnInit {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    public data;
    public size = 'small';
    public sizes;
    public numberSummaries = CustomNumberSummary;

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
        this.treeGrid.reflow();
    }
}

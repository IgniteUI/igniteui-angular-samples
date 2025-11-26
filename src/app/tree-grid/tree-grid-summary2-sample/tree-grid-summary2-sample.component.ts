import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, GridSummaryCalculationMode, GridSummaryPosition, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxTreeGridComponent, ISortingExpression, SortingDirection, IgxButtonGroupComponent, IgxSwitchComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


class AvgSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        const avg = IgxNumberSummaryOperand.average(data);
        result.push({
            key: 'avg',
            label: 'Average',
            summaryResult: data.length ? '$' + avg.toFixed(2) : ''
        });
        return result;
    }
}

@Component({
    selector: 'app-tree-grid-summary2-sample',
    styleUrls: ['./tree-grid-summary2-sample.component.scss'],
    templateUrl: './tree-grid-summary2-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxSwitchComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective]
})
export class TreeGridSummary2SampleComponent implements OnInit {

    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;
    public data;

    public expr: ISortingExpression[];
    public avgSummary = AvgSummary;
    public summaryPositions;
    public summaryPosition: GridSummaryPosition = GridSummaryPosition.bottom;
    public summaryCalcModes;
    public summaryCalculationMode: GridSummaryCalculationMode = GridSummaryCalculationMode.rootAndChildLevels;

    constructor() {
        this.data = ORDERS_DATA;
        this.expr = [
            {
                dir: SortingDirection.Asc,
                fieldName: 'ShipCountry',
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
        ];

        this.summaryPositions = [
            {
                label: GridSummaryPosition.top,
                selected: this.summaryPosition === GridSummaryPosition.top,
                togglable: true
            },
            {
                label: GridSummaryPosition.bottom,
                selected: this.summaryPosition === GridSummaryPosition.bottom,
                togglable: true
            }
        ];

        this.summaryCalcModes = [
            {
                label: 'Root Level Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly,
                togglable: true,
                value: GridSummaryCalculationMode.rootLevelOnly
            },
            {
                label: 'Child Levels Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.childLevelsOnly,
                togglable: true,
                value: GridSummaryCalculationMode.childLevelsOnly
            },
            {
                label: 'Root And Child Levels',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootAndChildLevels,
                togglable: true,
                value: GridSummaryCalculationMode.rootAndChildLevels
            }
        ];
    }

    public ngOnInit() {
        this.grid1.sortingExpressions = [
            { dir: SortingDirection.Desc, fieldName: 'ID',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public selectSummaryPosition(event) {
        this.summaryPosition = this.summaryPositions[event.index].label;
        this.grid1.summaryPosition = this.summaryPosition;
    }

    public selectSummaryCalcMode(event) {
        this.summaryCalculationMode = this.summaryCalcModes[event.index].value;
        this.grid1.summaryCalculationMode = this.summaryCalculationMode;
    }

    public toggle(event) {
        this.grid1.showSummaryOnCollapse = !this.grid1.showSummaryOnCollapse;
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}

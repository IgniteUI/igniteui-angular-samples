import { Component, OnInit } from '@angular/core';
import { IgRect } from 'igniteui-angular-core';
import { StockData, updatedStockData } from '../../../data/stocks-data';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

import { IgxFinancialChartCoreModule, IgxFinancialChartModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-simple-combo-main',
    templateUrl: 'simple-combo-main.component.html',
    styleUrls: ['simple-combo-main.component.scss'],
    imports: [IgxSimpleComboComponent, FormsModule, IgxButtonGroupComponent, IgxButtonDirective, IgxFinancialChartModule, IgxFinancialChartCoreModule]
})
export class SimpleComboMainComponent implements OnInit {
    public data: StockData[] = updatedStockData;
    public selectedRange: string;
    public trendLineType: string;
    public trendLineTypes: string[] = [
        'CubicFit',
        'LinearFit',
        'QuinticFit',
        'QuarticFit',
        'ExponentialFit',
        'PowerLawFit',
        'LogarithmicFit',
        'CumulativeAverage',
        'ExponentialAverage',
        'SimpleAverage',
        'ModifiedAverage',
        'WeightedAverage',
        'None'
    ];
    public windowRect: IgRect = { top: 0, left: 0, width: 1, height: 1 };
    public ranges: string[] = ['1M', '3M', '6M', 'YTD', '1Y', 'ALL'];

    public rangeButtonClick(range: string) {
        this.selectedRange = range;
        let startDate = new Date(Date.now());
        switch (range) {
            case '1M':
                startDate.setMonth(startDate.getMonth() - 1);
                break;
            case '3M':
                startDate.setMonth(startDate.getMonth() - 3);
                break;
            case '6M':
                startDate.setMonth(startDate.getMonth() - 6);
                break;
            case 'YTD':
                startDate = new Date(startDate.getFullYear(), 0, 1);
                break;
            case '1Y':
                startDate.setFullYear(startDate.getFullYear() - 1);
                break;
            case 'ALL':
                startDate = this.data[0].time;
                break;
        }
        this.windowRect = this.getWindowRect(startDate);
    }

    public ngOnInit(): void {
        this.selectedRange = this.ranges[0];
        this.trendLineType = this.trendLineTypes[0];
        this.rangeButtonClick(this.selectedRange);
    }

    private getWindowRect(startDate: Date): IgRect {
        const startDateIndex = this.data.findIndex(d => d.time > startDate);
        return {
            top: 0,
            left: startDateIndex / this.data.length,
            width: 1 - startDateIndex / this.data.length,
            height: 1
        };
    }
}

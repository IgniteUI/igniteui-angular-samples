import * as core from '@angular/core';
import { IgRect } from 'igniteui-angular-core';
import { stockData, StockData } from '../../../data/stocks-data';

@core.Component({
    selector: 'app-simple-combo-main',
    templateUrl: 'simple-combo-main.component.html',
    styleUrls: ['simple-combo-main.component.scss']
})
export class SimpleComboMainComponent {
    public data: StockData[] = stockData;
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
        let startDate: Date;
        switch (range) {
            case '1M':
                startDate = new Date('2017/12/31');
                break;
            case '3M':
                startDate = new Date('2017/10/31');
                break;
            case '6M':
                startDate = new Date('2017/7/31');
                break;
            case 'YTD':
                startDate = new Date('2017/1/31');
                break;
            case '1Y':
                startDate = new Date('2017/1/31');
                break;
            case 'ALL':
                startDate = new Date('2013/1/31');
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

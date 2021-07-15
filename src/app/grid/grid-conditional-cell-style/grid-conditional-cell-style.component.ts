import { Component, OnInit } from '@angular/core';
import { athletesData } from '../../data/athletesData';

@Component({
    selector: 'app-grid-conditional-cell-style',
    styleUrls: ['./grid-conditional-cell-style.component.scss'],
    templateUrl: './grid-conditional-cell-style.component.html'
})
export class GridConditionalCellStyleComponent implements OnInit {
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }

    private upFontCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 95;

    private downFontCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 95;

    private top100Condition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 100;

    private belowTop100Condition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 100;

    private speedCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5;


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public beatsPerMinuteClasses = {
        downFont: this.downFontCondition,
        upFont: this.upFontCondition

    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rankClasses = {
        belowTop100: this.belowTop100Condition,
        top100: this.top100Condition
    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public speedClasses = {
        'topSpeed topSpeedFont': this.speedCondition
    };
}

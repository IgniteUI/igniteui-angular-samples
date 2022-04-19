/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, IgxSelectComponent, ISortingExpression, ISortingOptions, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/localData';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-sorting-sample.component.scss'],
    templateUrl: 'grid-sorting-sample.component.html'
})

export class SortingSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;

    public data: any[];
    public sortingTypes = ['SINGLE', 'MULTIPLE'];
    public expr: ISortingExpression[];
    public sortingOptions: ISortingOptions = {mode: 'multiple'};

    constructor() { }

    public ngOnInit(): void {
        this.data = DATA;
        this.grid1.sortingExpressions = [
            {
                dir: SortingDirection.Asc, fieldName: 'CategoryName',
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }
}

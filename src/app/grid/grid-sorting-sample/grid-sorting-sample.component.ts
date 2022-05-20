/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, ISimpleComboSelectionChangingEventArgs, ISortingOptions, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/localData';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-sorting-sample.component.scss'],
    templateUrl: 'grid-sorting-sample.component.html'
})

export class SortingSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data: any[];
    public sortingOptions: ISortingOptions = {mode: 'multiple'};
    public sortingTypes = [
        {
            mode: "SINGLE"
        }, {
            mode: "MULTIPLE"
        }
    ];

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

    handleDropDownSelection(event: ISimpleComboSelectionChangingEventArgs) {
        return this.sortingOptions = event.displayText.toLocaleLowerCase()  === "single" ? {mode: 'single'} : {mode: 'multiple'};
    }
}

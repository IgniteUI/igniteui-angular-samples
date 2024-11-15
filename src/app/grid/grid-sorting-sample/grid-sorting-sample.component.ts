/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, ISortingOptions, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/localData';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-sorting-sample.component.scss'],
    templateUrl: 'grid-sorting-sample.component.html',
    standalone: false
})

export class SortingSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data: any[];
    public sortingTypes: ISortingOptions[] = [
        {
            mode: 'single'
        }, {
            mode: 'multiple'
        }
    ];
    public sortingOptions: ISortingOptions = this.sortingTypes[1];

    constructor() { }

    public ngOnInit(): void {
        this.data = DATA;
    }
    
    public ngAfterViewInit(): void {
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

    handleSearchResults(event: KeyboardEvent) {
        event.preventDefault();
    }
}

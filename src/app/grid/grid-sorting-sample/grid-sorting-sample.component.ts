/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, ISortingOptions, SortingDirection, IgxGridToolbarComponent, IgxButtonDirective, IgxGridToolbarActionsComponent, IgxSimpleComboComponent, IgxComboClearIconDirective, IgxComboItemDirective, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/localData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-sorting-sample.component.scss'],
    templateUrl: 'grid-sorting-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxButtonDirective, IgxGridToolbarActionsComponent, IgxSimpleComboComponent, FormsModule, IgxComboClearIconDirective, IgxComboItemDirective, IgxColumnComponent, IgxCellTemplateDirective, UpperCasePipe]
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

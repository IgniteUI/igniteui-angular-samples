/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { DATA } from '../../data/localData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';


// eslint-disable-next-line no-shadow
enum TYPE {
    SINGLE = 'single',
    MULTI = 'multiple'
}
@Component({
    selector: 'app-grid-sorting-styling',
    styleUrls: ['./grid-sorting-styling.component.scss'],
    templateUrl: 'grid-sorting-styling.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent, IgxCellTemplateDirective]
})

export class SortingStylingComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;

    public data: any[];
    public sortingTypes = [{ name: 'Multiple Sort', value: TYPE.MULTI }, { name: 'Single Sort', value: TYPE.SINGLE }];
    public currentSortingType: TYPE = TYPE.SINGLE;

    constructor() {
    }
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

    public removeSorting($event) {
        if (this.currentSortingType === TYPE.SINGLE) {
            this.grid1.columns.forEach((col) => {
                if (!(col.field === $event.fieldName)) {
                    this.grid1.clearSort(col.field);
                }
            });
        }
    }

    public sortTypeSelection(event) {
            this.grid1.clearSort();
    }
}

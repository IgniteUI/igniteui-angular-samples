import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-grid-adf-style-sample',
    styleUrls: ['./grid-advanced-filtering-style.component.scss'],
    templateUrl: 'grid-advanced-filtering-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, NgIf]
})
export class GridAdvancedFilteringStyleComponent implements OnInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatCurrency(val: string) {
        return '$' + parseInt(val, 10).toFixed(2);
    }
}

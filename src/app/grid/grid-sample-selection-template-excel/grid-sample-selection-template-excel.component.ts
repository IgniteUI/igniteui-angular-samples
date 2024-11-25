import { Component } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, IgxRowSelectorDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-grid-selection-template-excel',
    styleUrls: ['./grid-sample-selection-template-excel.component.scss'],
    templateUrl: 'grid-sample-selection-template-excel.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxHeadSelectorDirective, NgClass, IgxRowSelectorDirective]
})

export class GridSelectionTemplateExcelComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

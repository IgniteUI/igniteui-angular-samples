import { Component, OnInit, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { IPaginatorResourceStrings, IgxPaginatorComponent, IgxTreeGridComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent } from 'igniteui-angular';
import { ORDERS_DATA } from '../data/orders';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-tree-grid-pager-sample',
    styleUrls: ['./tree-grid-pager-sample.component.scss'],
    templateUrl: './tree-grid-pager-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent, FormsModule]
})
export class TreeGridPagerSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public densityOptions: string[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    public options = {
        digitsInfo: '1.2-2',
        currencyCode: 'USD'
    };
    public formatOptions = this.options;

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    constructor(@Inject(PLATFORM_ID) private platformId: any) { }

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
        this.densityOptions = ['compact', 'cosy', 'comfortable'];
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this.paginator.resourceStrings = this.paginatorResourceStrings;
            });
        }
    }
}

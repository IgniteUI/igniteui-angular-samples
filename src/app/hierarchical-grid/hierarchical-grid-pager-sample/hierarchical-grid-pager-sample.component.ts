import { Component, OnInit, ViewChild, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { IPaginatorResourceStrings, IgxPaginatorComponent, IgxHierarchicalGridComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective, IgxSwitchComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-hierarchical-grid-pager-sample',
    styleUrls: ['./hierarchical-grid-pager-sample.component.scss'],
    templateUrl: './hierarchical-grid-pager-sample.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxPaginatorDirective, IgxSwitchComponent, FormsModule]
})
export class HierarchicalGridPagerSampleComponent implements OnInit, AfterViewInit {
    private platformId = inject(PLATFORM_ID);

    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public densityOptions: string[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    public ngOnInit(): void {
        this.data = SINGERS;
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

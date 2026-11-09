import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, PLATFORM_ID, inject } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IPaginatorResourceStrings } from 'igniteui-angular/core';
import { IgxPageNavigationComponent, IgxPageSizeSelectorComponent, IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-pager-sample',
    styleUrls: ['./grid-pager-sample.component.scss'],
    templateUrl: './grid-pager-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent, FormsModule, DecimalPipe]
})
export class GridPagerSampleComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);
    private platformId = inject(PLATFORM_ID);

    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this.paginator.resourceStrings = this.paginatorResourceStrings;
            });
            this.cdr.detectChanges();
        }
    }
}

import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IPaginatorResourceStrings, IgxPaginatorComponent } from 'igniteui-angular';

@Component({
    selector: 'app-grid-pager-sample',
    styleUrls: ['./grid-pager-sample.component.scss'],
    templateUrl: './grid-pager-sample.component.html'
})
export class GridPagerSampleComponent implements OnInit, AfterViewInit {
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

    constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            this.paginator.resourceStrings = this.paginatorResourceStrings;
        });
        this.cdr.detectChanges();
    }
}

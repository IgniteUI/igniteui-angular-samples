import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IPaginatorResourceStrings, IgxPaginatorComponent, IgxGridComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-pager-sample',
    styleUrls: ['./grid-pager-sample.component.scss'],
    templateUrl: './grid-pager-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, NgIf, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxSwitchComponent, FormsModule, DecimalPipe]
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

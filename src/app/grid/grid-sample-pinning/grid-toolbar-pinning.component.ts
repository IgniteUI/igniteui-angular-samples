import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-toolbar-pinning.component.scss'],
    templateUrl: 'grid-toolbar-pinning.component.html',
    imports: [NgClass, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, NgFor, IgxColumnComponent]
})

export class PinningToolbarSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public useDarkTheme: boolean = false;
    public data: any[];
    public columns: any[];

    constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.columns = [
            { field: 'CompanyName', header: 'Company Name', width: 300 },
            { field: 'ContactName', header: 'Contact Name', width: 200, pinned: true },
            { field: 'ContactTitle', header: 'Contact Title', width: 200, pinned: true },
            { field: 'Address', header: 'Address', width: 300 },
            { field: 'City', header: 'City', width: 120 },
            { field: 'Region', header: 'Region', width: 120 },
            { field: 'PostalCode', header: 'Postal Code', width: 150 },
            { field: 'Phone', header: 'Phone', width: 150 },
            { field: 'Fax', header: 'Fax', width: 150 }
        ];
        this.data = DATA;

        this.activatedRoute.queryParams.subscribe(params => {
            this.useDarkTheme = params.dark === 'true';
        });
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}

import { Component, ViewChild, ViewEncapsulation, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { IPinningConfig, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-toolbar-pinning-both-sides.component.scss'],
    templateUrl: 'grid-toolbar-pinning-both-sides.component.html',
    imports: [
        NgClass,
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxGridToolbarComponent,
        IgxGridToolbarActionsComponent,
        IgxColumnComponent,
        IgxButtonDirective
    ]
})

export class GridBothSideToolbarPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public useDarkTheme: boolean = false;
    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    public ngOnInit(): void {
        this.columns = [
            { field: 'CompanyName', header: 'Company Name', width: 300 },
            { field: 'ContactName', header: 'Contact Name', width: 200, pinned: true, pinningPosition: ColumnPinningPosition.Start },
            { field: 'ContactTitle', header: 'Contact Title', width: 200, pinned: true, pinningPosition: ColumnPinningPosition.End },
            { field: 'Address', header: 'Address', width: 300 },
            { field: 'City', header: 'City', width: 120 },
            { field: 'Region', header: 'Region', width: 120 },
            { field: 'PostalCode', header: 'Postal Code', width: 150 },
            { field: 'Phone', header: 'Phone', width: 150 },
            { field: 'Fax', header: 'Fax', width: 150 }
        ];
        this.data = DATA;
    }

    public pinLeft() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinned = false;
            col.pinningPosition = ColumnPinningPosition.Start;
            col.pinned = true;
        });
    }
    public pinRight() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinned = false;
            col.pinningPosition = ColumnPinningPosition.End;
            col.pinned = true;
        });
    }

    public unpinColumn() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinned = false;
        });
    }
}

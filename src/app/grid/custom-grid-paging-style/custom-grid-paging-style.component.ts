import { Component, ViewChild, OnInit} from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { athletesData } from '../../data/athletesData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DecimalPipe } from '@angular/common';

@Component({
    selector: 'app-custom-grid-paging-style-sample',
    styleUrls: ['custom-grid-paging-style.component.scss'],
    templateUrl: 'custom-grid-paging-style.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, DecimalPipe]
})

export class CustomGridPagingStyleSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }

    public removeRow(rowIndex) {
        const row = this.grid1.getRowByIndex(rowIndex);
        row.delete();
    }
}

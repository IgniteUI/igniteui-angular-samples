import { Component, ViewChild, inject } from '@angular/core';
import { IgxGridComponent, RowType, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-row-styles-sample',
    styleUrls: ['./grid-rowStyles.component.scss'],
    templateUrl: 'grid-rowStyles.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class GridRowStylesComponent {
    private localService = inject(FinancialDataService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;

    public  rowStyles = {
        background: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000088' : '#00000000',
        border: (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row: RowType) => (+row.data['Change'] < 0  && +row.data['Change On Year(%)'] < 0) ? '#FF000099' : '#E9E9E9'
    };

    constructor() {
        this.localService.getData(1000);
        this.data = this.localService.records;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

}

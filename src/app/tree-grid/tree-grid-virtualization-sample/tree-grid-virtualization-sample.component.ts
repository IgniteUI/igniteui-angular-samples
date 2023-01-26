import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from '@infragistics/igniteui-angular';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';

@Component({
    providers: [FinancialDataService],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-virtualization-sample',
    styleUrls: ['./tree-grid-virtualization-sample.component.scss'],
    templateUrl: 'tree-grid-virtualization-sample.component.html'
})

export class TreeGridVirtualizationSampleComponent {
    @ViewChild('grid1', { static: true }) public grid1: IgxTreeGridComponent;

    public data: Observable<any[]>;
    public volume = 10000;

    constructor(private localService: FinancialDataService) {
        this.localService.getHierarchicalData(this.volume);
        this.data = this.localService.records;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}

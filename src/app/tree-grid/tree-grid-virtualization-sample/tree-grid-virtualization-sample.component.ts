import { Component, ViewChild, inject } from '@angular/core';
import { IgxTreeGridComponent, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    providers: [FinancialDataService],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-virtualization-sample',
    styleUrls: ['./tree-grid-virtualization-sample.component.scss'],
    templateUrl: 'tree-grid-virtualization-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxBadgeComponent, AsyncPipe]
})

export class TreeGridVirtualizationSampleComponent {
    private localService = inject(FinancialDataService);

    @ViewChild('grid1', { static: true }) public grid1: IgxTreeGridComponent;

    public data: Observable<any[]>;
    public volume = 10000;

    constructor() {
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

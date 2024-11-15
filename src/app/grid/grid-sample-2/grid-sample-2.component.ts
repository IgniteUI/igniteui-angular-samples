import { Component, Injectable, ViewChild, OnInit } from '@angular/core';

import { IgxGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-sample',
    styleUrls: ['./grid-sample-2.component.scss'],
    templateUrl: 'grid-sample-2.component.html',
    standalone: false
})

export class FinancialSampleComponent {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;
    constructor(private localService: FinancialDataService) {
        this.localService.getData(100000);
        this.data = this.localService.records;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}

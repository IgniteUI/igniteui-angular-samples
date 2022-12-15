import { Component, ViewChild } from '@angular/core';

import { IGridStateOptions, IgxGridStateDirective, IgxGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FinancialDataService } from '../../services/financial.service';

@Component({
    providers: [FinancialDataService],
    selector: 'app-grid-state-persistance-sample',
    styleUrls: ['./grid-state-persistance-sample.component.scss'],
    templateUrl: 'grid-state-persistance-sample.component.html'
})

export class GridStatePersistenceSampleComponent {
    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;
    @ViewChild(IgxGridStateDirective, { static: true })
    public state!: IgxGridStateDirective;
    public data: Observable<any[]>;
    public options: IGridStateOptions = {
        rowSelection: true,
        filtering: true,
        sorting: true,
        columnSelection: true
    };

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

    public saveState() {
        const state = this.state.getState() as string;
        window.sessionStorage.setItem('grid-state', state);
    }

    public restoreState() {
        const state = window.sessionStorage.getItem('grid-state');
        this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
            parsedState.columns.forEach(column => {
                column.sortable = false;
            });
        });
        this.state.setState(state as string);
    }

    public clearStorage() {
        window.sessionStorage.removeItem('grid-state');
    }
}

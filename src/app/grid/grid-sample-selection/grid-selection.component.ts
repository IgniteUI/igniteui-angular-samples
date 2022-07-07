import { Component, OnInit, ViewChild } from '@angular/core';

import { IgxGridComponent, IgxSnackbarComponent, IRowSelectionEventArgs } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';


@Component({
    providers: [FinancialDataService],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-sample',
    styleUrls: ['./grid-selection.component.scss'],
    templateUrl: 'grid-selection.component.html'
})

export class GridSelectionSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('snackbarRowCount', { static: true }) public snackbarRowCount: IgxSnackbarComponent;
    @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
    //@ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public data: Observable<any[]>;
    public selectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRows = [1, 2, 3];
    public selectedRowsCount;

    constructor(private localService: FinancialDataService) {
        this.localService.getData(100000);
        this.data = this.localService.records;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];

    }
    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
        this.snackbarRowCount.autoHide = true;
        this.snackbarRowCount.close();
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
    public handleRowSelection(event:IRowSelectionEventArgs) {
        this.selectedRowsCount = event.newSelection.length;
        this.snackbarRowCount.open();
        this.snackbar.close();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
        this.snackbarRowCount.close();
        this.selectedRowsCount = undefined;
    }
}

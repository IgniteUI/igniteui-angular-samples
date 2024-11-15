import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { GridSelectionMode, IgxGridComponent, IgxSnackbarComponent, IRowSelectionEventArgs } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { FinancialDataService } from '../../services/financial.service';


@Component({
    providers: [FinancialDataService],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-sample',
    styleUrls: ['./grid-selection.component.scss'],
    templateUrl: 'grid-selection.component.html',
    standalone: false
})

export class GridSelectionSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('snackbarRowCount', { static: true }) public snackbarRowCount: IgxSnackbarComponent;
    @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
    @ViewChild('logger') public logger: ElementRef;
    public data: Observable<any[]>;
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRows = [1, 2, 3];
    public selectedRowsCount;
    public selectedRowIndex;

    constructor(private localService: FinancialDataService,
        private renderer: Renderer2) {
        this.localService.getData(500);
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

    public handleRowSelection(event: IRowSelectionEventArgs) {
        this.selectedRowsCount = event.newSelection.length;
        this.selectedRowIndex = event.newSelection[0];
        this.snackbarRowCount.open();
        this.snackbar.close();
        this.logAnEvent(`=> 'rowSelectionChanging' with value: ` + JSON.stringify(event.newSelection));
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
        this.snackbarRowCount.close();
        this.selectedRowsCount = undefined;
        this.selectedRowIndex = undefined;
    }

    public clearLog() {
        const elements = this.logger.nativeElement.querySelectorAll('p');
        for (let index = 0; index < elements.length; index++) {
            this.renderer.removeChild(this.logger.nativeElement, elements[index]);
        }
    }

    private logAnEvent(msg: string, canceled?: boolean) {
        const createElem = this.renderer.createElement('p');

        if (canceled) {
            msg = msg.concat(': has been canceled ');
        }

        const text = this.renderer.createText(msg);
        this.renderer.appendChild(createElem, text);
        const container = this.logger.nativeElement;
        this.renderer.insertBefore(container, createElem, container.children[0]);
    }
}

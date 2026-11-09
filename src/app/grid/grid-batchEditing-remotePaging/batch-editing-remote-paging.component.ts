/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { Transaction } from 'igniteui-angular/core';
import { IgxPaginatorComponent, IgxPaginatorContentDirective } from 'igniteui-angular/paginator';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { Observable } from 'rxjs';
import { RemotePagingWithBatchEditingService } from '../../services/remotePagingWithBatchEditing.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingWithBatchEditingService],
    selector: 'app-remote-paging-batch-editing',
    styleUrls: ['./batch-editing-remote-paging.component.scss'],
    templateUrl: './batch-editing-remote-paging.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxDialogComponent, AsyncPipe]
})
export class RemotePagingBatchEditingComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingWithBatchEditingService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;

    public page = 0;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];
    public transactionsData: Transaction[] = [];

    private _perPage = 10;
    private _dataLengthSubscriber;
    private _recordsOnServer = 0;
    private _totalPagesOnServer = 0;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this._totalPagesOnServer = Math.floor(this._recordsOnServer / this.perPage);
        this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.data$;
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this._recordsOnServer = data;
            this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
        });
        this.remoteService.getData(0, this.perPage).subscribe(() => {
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
    }

    public paginate(page: number) {
        this.grid1.isLoading = true;
        this.grid1.endEdit(true);
        if (page > this._totalPagesOnServer) {
            if (this.page !== this._totalPagesOnServer) {
                const skipEl = this._totalPagesOnServer * this.perPage;
                this.remoteService.getData(skipEl, skipEl + this.perPage);
            }
            this.grid1.isLoading = false;
            this.grid1.paginator.page = page - this._totalPagesOnServer;
            this.page = page;
            return;
        } else if (this.grid1.paginator) {
            const newPage = page - this._totalPagesOnServer > -1 ? page - this._totalPagesOnServer : 0;
            this.grid1.paginator.page = newPage;
        }
        const skip = page * this.perPage;
        this.remoteService.getData(skip, skip + this.perPage);
        this.page = page;
    }

    public addRow() {
        this.totalCount++;
        const newID = this.generateRandomInteger(this.totalCount, this.totalCount * 100);
        this.grid1.addRow({
            ID: newID, ProductName: 'Product Name', QuantityPerUnit: 'Quantity per Unit',
            SupplierName: 'Supplier Name', UnitsInStock: 1, Rating: 1
        });
    }

    public deleteRow(rowID) {
        const isTransaction = !this.grid1.data.some(d => d.ID === rowID);
        if (isTransaction) {
            this.totalCount--;
        }
        this.grid1.deleteRow(rowID);
        if (isTransaction && this.grid1.dataView.length === 1) {
            this.paginate(this.page - 1);
        }
    }

    public generateRandomInteger(start: number, end: number) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    public undo() {
        this.grid1.transactions.undo();
        this.computeTotalCount();
        this.preventDisplayingEmptyPages();
    }

    public redo() {
        this.grid1.transactions.redo();
        this.computeTotalCount();
        this.preventDisplayingEmptyPages();
    }

    public openCommitDialog() {
        this.transactionsData = this.grid1.transactions.getAggregatedChanges(true);
        this.dialog.open();
    }

    public commit() {
        this.grid1.isLoading = true;
        this.dialog.close();
        const aggregatedChanges = this.grid1.transactions.getAggregatedChanges(true);
        this.remoteService.processBatch(aggregatedChanges).subscribe({
            next: (count: number) => {
                this.totalCount = count;
                this._recordsOnServer = count;
                this.grid1.transactions.commit(this.grid1.data);
                this.preventDisplayingEmptyPages();
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                this.grid1.isLoading = false;
            }
        });
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.grid1.transactions.clear();
        this.totalCount = this._recordsOnServer;
        this.preventDisplayingEmptyPages();
        this.dialog.close();
    }

    public get hasTransactions(): boolean {
        return this.grid1.transactions.getAggregatedChanges(false).length > 0;
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }

    private preventDisplayingEmptyPages() {
        this._totalPagesOnServer = Math.floor(this._recordsOnServer / this.perPage);

        const totalPages = Math.floor(this.totalCount / this.perPage);
        if (this.page > 0 &&
            (this.page > totalPages ||
                (this.page === totalPages &&
                    this.totalCount % this.perPage === 0))) {
            this.paginate(totalPages - 1);
        }
    }

    private computeTotalCount() {
        this.totalCount = this._recordsOnServer + this.grid1.transactions.getAggregatedChanges(true).filter(rec => rec.type === 'add').length;
    }
}

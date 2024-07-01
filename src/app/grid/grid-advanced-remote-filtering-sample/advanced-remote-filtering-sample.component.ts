import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {
    FilteringExpressionsTree,
    FilteringLogic,
    IFilteringExpressionsTree,
    IgxDateFilteringOperand,
    IgxGridComponent,
    IgxNumberFilteringOperand,
    NoopFilteringStrategy,
    NoopSortingStrategy
} from 'igniteui-angular';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { RemoteFilteringService } from '../../services/remoteFiltering.service';

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemoteFilteringService],
    selector: 'app-advanced-remote-filtering-sample',
    styleUrls: ['./advanced-remote-filtering-sample.component.scss'],
    templateUrl: './advanced-remote-filtering-sample.component.html'
})
export class AdvancedRemoteFilteringSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    public remoteData: any;
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();

    private _prevRequest: any;
    private destroy$ = new Subject<void>();

    public gridExpressionsTree: IFilteringExpressionsTree;


    constructor(private _remoteService: RemoteFilteringService, public cdr: ChangeDetectorRef) {
        this._remoteService.entity = "Orders";
    }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.remoteData;
        const freightFE = new FilteringExpressionsTree(FilteringLogic.And, 'Freight');
        freightFE.filteringOperands = [
            {
                condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
                searchVal: 20,
                fieldName: 'Freight'
            },
            {
                condition: IgxNumberFilteringOperand.instance().condition('lessThan'),
                searchVal: 50,
                fieldName: 'Freight'
            }
        ]
        const orderDateFE = new FilteringExpressionsTree(FilteringLogic.And, 'OrderDate');
        orderDateFE.filteringOperands = [
            {
                condition: IgxDateFilteringOperand.instance().condition('after'),
                searchVal: new Date('1996-07-04T00:00:00Z'),
                fieldName: 'OrderDate'
            },
            {
                condition: IgxDateFilteringOperand.instance().condition('before'),
                searchVal: new Date('1996-07-15T00:00:00Z'),
                fieldName: 'OrderDate'
            }
        ]

        this.gridExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        this.gridExpressionsTree.filteringOperands = [
            freightFE,
            orderDateFE
        ]
    }

    public ngAfterViewInit() {
        const sortingExpr = this.grid.sortingExpressions[0];

        this.grid.isLoading = true;

        this._remoteService.getData(
            this.grid.advancedFilteringExpressionsTree,
            sortingExpr,
            () => {
                this.grid.isLoading = false;
            });

        this.grid.sortingExpressionsChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });

        this.grid.advancedFilteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
    }

    public processData() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }

        if (!this.grid.isLoading) {
            this.grid.isLoading = true;
        }

        const filteringExpr = this.grid.advancedFilteringExpressionsTree;
        const sortingExpr = this.grid.sortingExpressions[0];

        this._prevRequest = this._remoteService.getData(
            filteringExpr,
            sortingExpr,
            () => {
                if (this.grid.isLoading) {
                    this.grid.isLoading = false;
                }
            });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}

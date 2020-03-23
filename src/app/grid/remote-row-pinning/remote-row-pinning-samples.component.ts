import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridRowComponent, NoopFilteringStrategy, NoopSortingStrategy } from "igniteui-angular";
import { Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";
import { RemotePinningService } from "../services/remotePinningService";

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemotePinningService],
    selector: "remote-row-pinning-sample",
    styleUrls: ["./remote-row-pinning-sample.component.scss"],
    templateUrl: "./remote-row-pinning-sample.component.html"
})
export class RemoteRowPinningSampleComponent implements OnInit {
    public remoteData: any;
    @ViewChild("grid", { static: true }) public grid: IgxGridComponent;
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();

    private _prevRequest: any;
    private _chunkSize: number;
    private destroy$ = new Subject<boolean>();

    constructor(private _remoteService: RemotePinningService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];
        this._chunkSize = Math.ceil(parseInt(this.grid.height, 10) / this.grid.rowHeight);
        this.grid.isLoading = true;

        this._remoteService.primaryKey = this.grid.primaryKey;

        this._remoteService.getData(
            {
                chunkSize: this._chunkSize,
                startIndex: this.grid.virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr,
            (data) => {
                this.grid.totalItemCount = data["@odata.count"];
                this.grid.isLoading = false;
                const primaryKey = this.grid.primaryKey;
                const firstRec = data.value[0];
                const lastRec = data.value[data.value.length - 1];

                this.grid.pinRow(firstRec[primaryKey]);
                this._remoteService.storePinnedRecord({rowID: firstRec[primaryKey], rowData: firstRec});
                this.grid.pinRow(lastRec[primaryKey]);
                this._remoteService.storePinnedRecord({rowID: lastRec[primaryKey], rowData: lastRec});
            });

        this.grid.onDataPreLoad.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
        this.grid.filteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData("filtering");
        });
        this.grid.sortingExpressionsChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData("sorting");
        });
    }

    public processData(dataAction?: string) {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }

        if (!this.grid.isLoading) {
            this.grid.isLoading = true;
        }

        const virtualizationState = this.grid.virtualizationState;
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];

        if (dataAction === "filtering") {
            virtualizationState.startIndex = 0;
            this._remoteService.updateCaching({
                chunkSize: this._chunkSize,
                startIndex: virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr);
        } else if (dataAction === "sorting") {
            this._remoteService.updateCaching({
                chunkSize: this._chunkSize,
                startIndex: virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr);
        }

        this._prevRequest = this._remoteService.getData(
            {
                chunkSize: this._chunkSize,
                startIndex: virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr,
            (data) => {
                this.grid.totalItemCount = data["@odata.count"];
                if (this.grid.isLoading) {
                    this.grid.isLoading = false;
                }
                if (dataAction === "sorting") {
                    this.reaplyPinning(data.value);
                }
            });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }

    public togglePining(row: IgxGridRowComponent) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
            this._remoteService.removePinnedRecord(row);
        } else {
            row.pin();
            this._remoteService.storePinnedRecord(row);
        }
    }

    public reaplyPinning(data) {
        const primaryKey = this.grid.primaryKey;
        data.forEach(element => {
            if (this.grid.isRecordPinned(element)) {
                this.grid.unpinRow(element[primaryKey]);
                this.grid.pinRow(element[primaryKey]);
            }
        });
        this.grid.cdr.detectChanges();
    }
}

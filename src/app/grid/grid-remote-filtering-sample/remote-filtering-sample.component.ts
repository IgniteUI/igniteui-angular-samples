import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxToastComponent } from "igniteui-angular";
import { RemoteFilteringService } from "../services/remoteFilteringService";

@Component({
    providers: [RemoteFilteringService],
    selector: "app-grid-remote-filtering-sample",
    styleUrls: ["./remote-filtering-sample.component.scss"],
    templateUrl: "./remote-filtering-sample.component.html"
})
export class RemoteFilteringSampleComponent implements OnInit {
    public remoteData: any;
    @ViewChild("grid", { static: true }) public grid: IgxGridComponent;
    @ViewChild("toast", { static: true }) public toast: IgxToastComponent;
    private _prevRequest: any;
    private _chunkSize: number;

    constructor(private _remoteService: RemoteFilteringService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];
        this._chunkSize = Math.ceil(parseInt(this.grid.height, 10) / this.grid.rowHeight);
        this.grid.isLoading = true;

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
            });
    }

    public processData() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }

        this.toast.message = "Loading Remote Data...";
        this.toast.position = 1;
        this.toast.displayTime = 1000;
        this.toast.show();
        this.cdr.detectChanges();

        const virtualizationState = this.grid.virtualizationState;
        const filteringExpr = this.grid.filteringExpressionsTree.filteringOperands;
        const sortingExpr = this.grid.sortingExpressions[0];

        this._prevRequest = this._remoteService.getData(
            {
                chunkSize: this._chunkSize,
                startIndex: virtualizationState.startIndex
            },
            filteringExpr,
            sortingExpr,
            (data) => {
                this.grid.totalItemCount = data["@odata.count"];
                this.toast.hide();
                this.cdr.detectChanges();
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
    }
}

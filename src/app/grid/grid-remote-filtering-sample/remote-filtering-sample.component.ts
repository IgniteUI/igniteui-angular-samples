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
    @ViewChild("grid") public grid: IgxGridComponent;
    @ViewChild("toast") public toast: IgxToastComponent;
    private _prevRequest: any;

    constructor(private _remoteService: RemoteFilteringService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const filteringExpr = this.grid.filteringExpressions[0];
        const sortingExpr = this.grid.sortingExpressions[0];

        this._remoteService.getData(this.grid.virtualizationState, filteringExpr, sortingExpr, (data) => {
            this.grid.totalItemCount = data.Count;
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
        const filteringExpr = this.grid.filteringExpressions[0];
        const sortingExpr = this.grid.sortingExpressions[0];

        this._prevRequest = this._remoteService.getData(virtualizationState, filteringExpr, sortingExpr, (data) => {
            this.grid.totalItemCount = data.filteredCount;
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

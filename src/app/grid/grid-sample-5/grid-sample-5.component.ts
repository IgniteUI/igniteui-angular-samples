import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { RemoteService } from "./remote.service";

@Component({
    providers: [RemoteService],
    selector: "grid-remote-virtualization-sample",
    styleUrls: ["grid-sample-5.component.scss"],
    templateUrl: "grid-sample-5.component.html"
})

export class GridRemoteVirtualizationAddRowSampleComponent implements AfterViewInit {

    @ViewChild("grid", { static: true })
    public grid: IgxGridComponent;

    public remoteData: any;
    private _prevRequest: any;
    private _prevRequestChunk: number;

    constructor(private _remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;
        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            if (data) {
                // increase totalItemCount a little above the visible grid size in order to be able to scroll
                this.grid.totalItemCount = data.value.length + 3;
                this.grid.isLoading = false;
                this._prevRequestChunk = data.value.length;
            }
        });
    }

    public handlePreLoad() {
        this.processData(false);
    }

    public processData(reset) {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        this._prevRequest = this._remoteService.getData(
            this.grid.virtualizationState, this.grid.sortingExpressions[0], reset,
            (data) => {
                const chunkLength = this.grid.virtualizationState.startIndex +
                                    this.grid.virtualizationState.chunkSize + 3;
                if (!data.value) {
                    this.grid.totalItemCount = this._remoteService.cachedData.length;
                    this.cdr.detectChanges();
                } else if (chunkLength >= this.grid.totalItemCount) {
                    this.grid.totalItemCount += data.value.length;
                    this._prevRequestChunk = this.grid.virtualizationState.chunkSize;
                }
                this.grid.cdr.detectChanges();
            }
        );
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

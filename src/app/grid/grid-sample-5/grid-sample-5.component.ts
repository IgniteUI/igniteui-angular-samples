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
    private _prevRequestChunk: number;
    private _endOfData = false;

    constructor(private _remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;
        const loadState = { ...this.grid.virtualizationState };
        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], loadState,
        (request) => {
            if (request.data) {
                // increase totalItemCount a little above the visible grid size in order to be able to scroll
                this.grid.totalItemCount = request.data.length + 3;
                this.grid.isLoading = false;
                this._prevRequestChunk = request.data.length;
            }
        });
    }

    public handlePreLoad() {
        const index = this.grid.virtualizationState.chunkSize +
                                this.grid.virtualizationState.startIndex;
        if (index > this._remoteService.cachedData.length && !this._endOfData) {
            this.grid.isLoading = true;
            const loadState = {
                startIndex: index - 1,
                chunkSize: this.grid.virtualizationState.chunkSize
            };
            this.processData(loadState, () => {
                this.grid.isLoading = false;
                this.grid.cdr.detectChanges();
            });
        } else {
            this.processData(undefined, () => {
                this.grid.isLoading = false;
                this.grid.cdr.detectChanges();
            });
        }
    }

    public processData(state?, callback?: () => void): void {
        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], state,
        (remoteData) => {
                if (remoteData.data) {
                    const chunkLength = this.grid.virtualizationState.startIndex +
                                        this.grid.virtualizationState.chunkSize + 3;
                    if (this._endOfData || remoteData.endOfData) {
                        this.grid.totalItemCount = this._remoteService.cachedData.length;
                        this._endOfData = true;
                        this.grid.cdr.detectChanges();
                    } else if (chunkLength >= this.grid.totalItemCount) {
                        this.grid.totalItemCount += remoteData.data.length;
                        this._prevRequestChunk = this.grid.virtualizationState.chunkSize;
                        this.grid.cdr.detectChanges();
                    }
                    callback();
                }
        });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

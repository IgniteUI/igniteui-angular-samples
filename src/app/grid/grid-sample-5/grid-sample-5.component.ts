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
        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, undefined)
        .then((request) => {
            if (request.data) {
                // increase totalItemCount a little above the visible grid size in order to be able to scroll
                this.grid.totalItemCount = request.data.value.length + 3;
                this.grid.isLoading = false;
                this._prevRequestChunk = request.data.value.length;
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
            this.processData(false, loadState).then(x => {
                if (x) this.grid.isLoading = false;
            });
        } else {
            this.processData(false).then(x => {
                if (x) this.grid.isLoading = false;
            });
        }
    }

    public processData(reset, state?): Promise<boolean> {
        return new Promise((res) => {
            this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], reset, state)
            .then((remoteData) => {
                    if (remoteData.data) {
                        const chunkLength = this.grid.virtualizationState.startIndex +
                                            this.grid.virtualizationState.chunkSize + 5;
                        if (this._endOfData || remoteData.endOfData) {
                            this.grid.totalItemCount = this._remoteService.cachedData.length;
                            this._endOfData = true;
                            this.grid.cdr.detectChanges();
                        } else if (chunkLength >= this.grid.totalItemCount) {
                            this.grid.totalItemCount += remoteData.data.length;
                            this._prevRequestChunk = this.grid.virtualizationState.chunkSize;
                            this.grid.cdr.detectChanges();
                        }
                        res(true);
                    }
                    res(false);
                });
        });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

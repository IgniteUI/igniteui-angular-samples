import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, Injectable, ViewChild } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import {
    DataContainer,
    IForOfState,
    IgxToastComponent
} from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _url: string = "https://www.igniteui.com/api/products";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(virtualizationArgs?: IForOfState, cb?: (any) => void): any {
        return this.http.get(this._url).subscribe((json: any) => {
            json.totalCount = json.length;
            this.http.get(this.buildUrl(virtualizationArgs)).subscribe((data: any) => {
                data.totalCount = json.totalCount;
                this._remoteData.next(data);
                if (cb) {
                    cb(data);
                }
            });
        });
    }

    private buildUrl(dataState: any): string {
        let qS: string = "?";
        let requiredChunkSize: number;
        if (dataState) {
            const skip = dataState.startIndex;

            requiredChunkSize = dataState.chunkSize === 0 ?
                // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
                10 : dataState.chunkSize;
            const top = requiredChunkSize;
            qS += `$skip=${skip}&$top=${top}&$count=true`;
        }
        return `${this._url}${qS}`;
    }
}

@Component({
    providers: [RemoteService],
    selector: "grid-remote-virtualizatiuon-sample",
    styleUrls: ["grid-sample-4.component.scss"],
    templateUrl: "grid-sample-4.component.html"
})

export class GridRemoteVirtualizationSampleComponent {
    public remoteData: any;
    public prevRequest: any;

    @ViewChild("grid") public grid: IgxGridComponent;
    @ViewChild("toast") public toast: IgxToastComponent;
    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }
    public ngOnInit(): void {
        this.remoteData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.grid.virtualizationState, (data) => {
            this.grid.totalItemCount = data.totalCount;
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.toast.message = "Loading Remote Data...";
        this.toast.position = 1;
        this.toast.show();
        this.cdr.detectChanges();
        this.prevRequest = this.remoteService.getData(evt, () => {
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
}

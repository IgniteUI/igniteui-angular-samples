import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, Injectable, ViewChild } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import {
    DataContainer,
    IForOfState,
    IgxToastComponent
} from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs/Rx";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private url: string = "http://services.odata.org/V4/Northwind/Northwind.svc/Products";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, cb?: (any) => void): any {
        const dataState = data;
        return this.http
            .get(this.buildUrl(dataState))
            .subscribe((d: any) => {
                this._remoteData.next(d.value);
                if (cb) {
                    cb(d);
                }
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
        return `${this.url}${qS}`;
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
    public columns: any;

    @ViewChild("grid1") public grid: IgxGridComponent;
    @ViewChild("toast") public toast: IgxToastComponent;
    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }
    public ngOnInit(): void {
        this.columns = [
            { field: "ProductID", width: "100px" },
            { field: "ProductName", width: "200px" },
            { field: "UnitPrice", width: "100px" },
            { field: "UnitsInStock", width: "50px" },
            { field: "QuantityPerUnit", width: "200px" },
            { field: "Discontinued", width: "50px" }
        ];
        this.remoteData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.grid.virtualizationState, (data) => {
            this.grid.totalItemCount = data["@odata.count"];
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.toast.message = "Loading remote data";
        this.toast.position = 1;
        this.toast.show();
        this.cdr.detectChanges();
        this.prevRequest = this.remoteService.getData(evt, () => {
            this.toast.hide();
            this.cdr.detectChanges();
        });
    }
}

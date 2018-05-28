import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, Injectable, ViewChild } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import {
    DataContainer,
    IForOfState,
    IgxToastComponent,
    SortingDirection
} from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs";

const EMPTY_STRING: string = "";
export enum SortOrder {
    ASC = "asc",
    DESC = "desc",
    NONE = ""
}
@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private _url: string = "https://www.igniteui.com/api/products";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(virtualizationArgs?: IForOfState, sortingArgs?: any, cb?: (any) => void): any {
        return this.http.get(this.buildDataUrl(virtualizationArgs, sortingArgs)).subscribe((data: any) => {
            this._remoteData.next(data.Results);
            if (cb) {
                cb(data);
            }
        });
    }

    private buildDataUrl(virtualizationArgs: any, sortingArgs: any): string {
        let baseQueryString = `${this._url}?$inlinecount=allpages`;
        let scrollingQuery = EMPTY_STRING;
        let orderQuery = EMPTY_STRING;
        let query = EMPTY_STRING;

        if (sortingArgs) {
            let sortingDirection: string;
            switch (sortingArgs.dir) {
                case SortingDirection.Asc:
                    sortingDirection = SortOrder.ASC;
                    break;
                case SortingDirection.Desc:
                    sortingDirection = SortOrder.DESC;
                    break;
                default:
                    sortingDirection = SortOrder.NONE;
            }

            orderQuery = `$orderby=${sortingArgs.fieldName} ${sortingDirection}`;
        }

        if (virtualizationArgs) {
            const skip = virtualizationArgs.startIndex;
            // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
            const top = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
            scrollingQuery = `$skip=${skip}&$top=${top}`;
        }

        query += (orderQuery !== EMPTY_STRING) ? `&${orderQuery}` : EMPTY_STRING;
        query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

        baseQueryString += query;

        return baseQueryString;
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
        this.remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], (data) => {
            this.grid.totalItemCount = data.Count;
        });
    }

    public processData() {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        this.toast.message = "Loading Remote Data...";
        this.toast.position = 1;
        this.toast.show();
        this.cdr.detectChanges();

        const virtualizationState = this.grid.virtualizationState;
        const sortingExpr = this.grid.sortingExpressions[0];

        this.prevRequest = this.remoteService.getData(virtualizationState, sortingExpr, () => {
            this.toast.hide();
            this.cdr.detectChanges();
        });
    }

    public ngOnDestroy() {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

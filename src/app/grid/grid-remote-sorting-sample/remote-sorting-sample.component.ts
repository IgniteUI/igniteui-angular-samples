import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, Injectable, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { IForOfState, SortingDirection } from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs/Rx";

const EMPTY_STRING: string = "";
export enum SortOrder {
    ASC = "asc",
    DESC = "desc",
    NONE = ""
}

@Injectable()
export class RemoteSortingService {
    public remoteData: Observable<any[]>;
    private _url: string = "https://www.igniteui.com/api/products";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(virtualizationArgs?: IForOfState, sortingArgs?: any, cb?: (any) => void): any {
        return this.http.get(this._url).subscribe((json: any) => {
            json.totalCount = json.length;
            this.http.get(this.buildDataUrl(virtualizationArgs, sortingArgs)).subscribe((data: any) => {
                data.totalCount = json.totalCount;
                this._remoteData.next(data);
                if (cb) {
                    cb(data);
                }
            });
        });
    }

    private buildDataUrl(virtualizationArgs: any, sortingArgs: any): string {
        let baseQueryString = `${this._url}`;
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
            const top = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
            scrollingQuery = `$skip=${skip}&$top=${top}&$count=true`;
        }

        if (orderQuery !== EMPTY_STRING) {
            query += this.hasNext(query);
            query += `${orderQuery}`;
        }

        if (scrollingQuery !== EMPTY_STRING) {
            query += this.hasNext(query);
            query += `${scrollingQuery}`;
        }

        baseQueryString += query;

        return baseQueryString;
    }

    private hasNext(query) {
        return (query === EMPTY_STRING) ? "?" : "&";
    }
}

@Component({
    providers: [RemoteSortingService],
    selector: "app-grid-remote-sorting-sample",
    styleUrls: ["./remote-sorting-sample.component.scss"],
    templateUrl: "./remote-sorting-sample.component.html"
})
export class RemoteSortingSampleComponent implements OnInit {
    public remoteData: any;
    public prevRequest: any;

    @ViewChild("grid") public grid: IgxGridComponent;
    constructor(private remoteService: RemoteSortingService, public cdr: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.remoteData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], (data) => {
            this.grid.totalItemCount = data.totalCount;
        });
    }

    public processData() {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        const virtualizationState = this.grid.virtualizationState;
        const sortingExpr = this.grid.sortingExpressions[0];

        this.prevRequest = this.remoteService.getData(virtualizationState, sortingExpr, () => {
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

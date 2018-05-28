import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, Injectable, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { IForOfState, STRING_FILTERS } from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs";

const EMPTY_STRING: string = "";
export enum FILTER_OPERATION {
    CONTAINS = "substringof",
    STARTS_WITH = "startswith",
    ENDS_WITH = "endswith",
    EQUALS = "eq",
    DOES_NOT_EQUAL = "ne",
    DOES_NOT_CONTAIN = "not substringof"
}

@Injectable()
export class RemoteFilteringService {
    public remoteData: Observable<any[]>;
    private _url: string = "https://www.igniteui.com/api/products";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(virtualizationArgs?: IForOfState, filteringArgs?: any, cb?: (any) => void): any {
        return this.http.get(this.buildDataUrl("", filteringArgs)).subscribe((filteredData: any) => {
            const filteredCount = filteredData.Results.length;
            this.http.get(this.buildDataUrl(virtualizationArgs, filteringArgs)).subscribe((data: any) => {
                data.filteredCount = filteredCount;
                this._remoteData.next(data.Results);
                if (cb) {
                    cb(data);
                }
            });
        });
    }

    private buildDataUrl(virtualizationArgs: any, filteringArgs: any): string {
        let baseQueryString = `${this._url}?$inlinecount=allpages`;
        let scrollingQuery = EMPTY_STRING;
        let filterQuery = EMPTY_STRING;
        let query = EMPTY_STRING;
        let condition;

        if (filteringArgs) {
            switch (filteringArgs.condition.name) {
                case "contains": {
                    condition = FILTER_OPERATION.CONTAINS;
                    filterQuery = `$filter=${condition}('${filteringArgs.searchVal}',${filteringArgs.fieldName})`;
                    break;
                }
                case "startsWith": {
                    condition = FILTER_OPERATION.STARTS_WITH;
                    filterQuery = `$filter=${condition}(${filteringArgs.fieldName},'${filteringArgs.searchVal}')`;
                    break;
                }
                case "endsWith": {
                    condition = FILTER_OPERATION.ENDS_WITH;
                    filterQuery = `$filter=${condition}(${filteringArgs.fieldName},'${filteringArgs.searchVal}')`;
                    break;
                }
                case "equals": {
                    condition = FILTER_OPERATION.EQUALS;
                    filterQuery = `$filter=${filteringArgs.fieldName} ${condition} '${filteringArgs.searchVal}'`;
                    break;
                }
                case "doesNotEqual": {
                    condition = FILTER_OPERATION.DOES_NOT_EQUAL;
                    filterQuery = `$filter=${filteringArgs.fieldName} ${condition} '${filteringArgs.searchVal}'`;
                    break;
                }
                case "doesNotContain": {
                    condition = FILTER_OPERATION.DOES_NOT_CONTAIN;
                    filterQuery = `$filter=${condition}('${filteringArgs.searchVal}',${filteringArgs.fieldName})`;
                    break;
                }
                case "empty": {
                    filterQuery = `$filter=${filteringArgs.fieldName} ${FILTER_OPERATION.EQUALS} ''`;
                    break;
                }
                case "notEmpty": {
                    filterQuery = `$filter=${filteringArgs.fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} ''`;
                    break;
                }
            }
        }

        if (virtualizationArgs) {
            let requiredChunkSize: number;
            const skip = virtualizationArgs.startIndex;
            requiredChunkSize = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
            const top = requiredChunkSize;
            scrollingQuery = `$skip=${skip}&$top=${top}`;
        }

        query += (filterQuery !== EMPTY_STRING) ? `&${filterQuery}` : EMPTY_STRING;
        query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

        baseQueryString += query;

        return baseQueryString;
    }
}

@Component({
    providers: [RemoteFilteringService],
    selector: "app-grid-remote-filtering-sample",
    styleUrls: ["./remote-filtering-sample.component.scss"],
    templateUrl: "./remote-filtering-sample.component.html"
})
export class RemoteFilteringSampleComponent implements OnInit {
    public remoteData: any;
    public prevRequest: any;

    @ViewChild("grid") public grid: IgxGridComponent;
    constructor(private remoteService: RemoteFilteringService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.grid.virtualizationState, this.grid.filteringExpressions[0], (data) => {
            this.grid.totalItemCount = data.Count;
        });
    }

    public processData(eventArgs) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        const virtualizationState = this.grid.virtualizationState;
        const filteringExpr = this.grid.filteringExpressions[0];

        this.prevRequest = this.remoteService.getData(virtualizationState, filteringExpr, (data) => {
            this.grid.totalItemCount = data.filteredCount;
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

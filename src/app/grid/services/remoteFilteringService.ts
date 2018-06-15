import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SortingDirection } from "igniteui-angular";
import { IForOfState } from "igniteui-angular/lib/directives/for-of/IForOfState";
import { BehaviorSubject, Observable } from "rxjs";

const DATA_URL: string = "https://www.igniteui.com/api/products";
const EMPTY_STRING: string = "";
export enum FILTER_OPERATION {
    CONTAINS = "substringof",
    STARTS_WITH = "startswith",
    ENDS_WITH = "endswith",
    EQUALS = "eq",
    DOES_NOT_EQUAL = "ne",
    DOES_NOT_CONTAIN = "not substringof"
}
export enum SortOrder {
    ASC = "asc",
    DESC = "desc",
    NONE = ""
}

@Injectable()
export class RemoteFilteringService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private _http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(virtualizationArgs?: IForOfState, filteringArgs?: any, sortingArgs?: any, cb?: (any) => void): any {
        return this._http.get(this.buildDataUrl("", filteringArgs, sortingArgs)).subscribe((filteredData: any) => {
            const filteredCount = filteredData.Results.length;
            this._http.get(this.buildDataUrl(virtualizationArgs, filteringArgs, sortingArgs)).subscribe((data: any) => {
                data.filteredCount = filteredCount;
                this._remoteData.next(data.Results);
                if (cb) {
                    cb(data);
                }
            });
        });
    }

    private buildDataUrl(virtualizationArgs: any, filteringArgs: any, sortingArgs: any): string {
        let baseQueryString = `${DATA_URL}?$inlinecount=allpages`;
        let scrollingQuery = EMPTY_STRING;
        let orderQuery = EMPTY_STRING;
        let filterQuery = EMPTY_STRING;
        let query = EMPTY_STRING;
        let condition;

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

        query += (orderQuery !== EMPTY_STRING) ? `&${orderQuery}` : EMPTY_STRING;
        query += (filterQuery !== EMPTY_STRING) ? `&${filterQuery}` : EMPTY_STRING;
        query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

        baseQueryString += query;

        return baseQueryString;
    }
}

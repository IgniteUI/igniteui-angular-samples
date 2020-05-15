import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Injectable } from "@angular/core";
import { IForOfState, SortingDirection } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { take } from "rxjs/operators";

const DATA_URL: string = "https://services.odata.org/V4/Northwind/Northwind.svc/Products";
const EMPTY_STRING: string = "";
export enum SortOrder {
    ASC = "asc",
    DESC = "desc",
    NONE = ""
}

@Injectable()
export class RemoteService {
    public data: Observable<any[]>;
    private _data: BehaviorSubject<any[]>;
    private _cachedData = [];
    private _prevRequestChunk: number;

    constructor(private _http: HttpClient, private cdr: ChangeDetectorRef) {
        this._data = new BehaviorSubject([]);
        this.data = this._data.asObservable();
    }

    public get cachedData() {
        return this._cachedData;
    }

    public hasItemsInCache(virtualizationArgs) {
        const startIndex = virtualizationArgs.startIndex;
        const endIndex = virtualizationArgs.startIndex + virtualizationArgs.chunkSize;
        let hasItems = true;
        if (endIndex > this._cachedData.length) {
            return false;
        }
        for (let i = startIndex; i < endIndex; i++) {
            if (this._cachedData[i] === null) {
                hasItems = false;
                break;
            }
        }
        return hasItems;
    }

    public async getData(virtualizationArgs?: IForOfState, sortingArgs?: any, resetData?: boolean,
                         loadState?: IForOfState): Promise<any> {
        return new Promise((res) => {
            const startIndex = this._cachedData.length ? this._cachedData.length - 1 : 0;
            const endIndex = virtualizationArgs.chunkSize + startIndex;
            let endOfData = false;

            if (resetData) {
                this._http.get(this._buildDataUrl(virtualizationArgs, sortingArgs)).subscribe((data: any) => {
                    this._updateData(data, startIndex);
                    this._data.next(data.value);
                    this._prevRequestChunk = data.value.length;
                    res({data, endOfData});
                });
            } else if (loadState) {
                const diff = loadState.startIndex - (this._cachedData.length);
                if (diff > 0) {
                    loadState.startIndex = this._cachedData.length;
                    loadState.chunkSize += diff;
                }
                this._http.get(this._buildDataUrl(loadState, sortingArgs)).pipe(take(1)).subscribe((data: any) => {
                    this._updateData(data, loadState.startIndex);
                    let returnData = [];
                    if (loadState.startIndex + loadState.chunkSize > this._cachedData.length) {
                        if (this._prevRequestChunk > data.value.length) {
                            endOfData = true;
                        }
                        returnData = this._cachedData.slice(this._cachedData.length - this._prevRequestChunk + 1);
                    } else {
                        returnData = this._cachedData.slice(
                                virtualizationArgs.startIndex,
                                virtualizationArgs.startIndex + virtualizationArgs.chunkSize
                        );
                    }
                    this._data.next(returnData);
                    res({ data: returnData, endOfData });
                });
            } else {
                let data = [];
                if (virtualizationArgs.startIndex + virtualizationArgs.chunkSize > this._cachedData.length) {
                    data = this._cachedData.slice(this._cachedData.length - this._prevRequestChunk + 1);
                } else {
                    data = this._cachedData.slice(virtualizationArgs.startIndex,
                                                  virtualizationArgs.startIndex + virtualizationArgs.chunkSize);
                    this._prevRequestChunk = virtualizationArgs.chunkSize;
                }
                this._data.next(data);
                res({data, endOfData});
            }
        });
    }

    private _updateData(data: any, startIndex: number) {
        for (let i = 0; i < data.value.length; i++) {
            this._cachedData[i + startIndex] = data.value[i];
        }
    }

    private _buildDataUrl(virtualizationArgs: any, sortingArgs: any): string {
        let baseQueryString = `${DATA_URL}?$count=true`;
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
            let requiredChunkSize: number;
            const skip = virtualizationArgs.startIndex;
            requiredChunkSize = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
            const top = requiredChunkSize;
            scrollingQuery = `$skip=${skip}&$top=${top}`;
        }

        query += (orderQuery !== EMPTY_STRING) ? `&${orderQuery}` : EMPTY_STRING;
        query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

        baseQueryString += query;

        return baseQueryString;
    }
}

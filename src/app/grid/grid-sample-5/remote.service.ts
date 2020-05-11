import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Injectable } from "@angular/core";
import { IForOfState, SortingDirection } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { debounceTime } from 'rxjs/operators';

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

    public getData(virtualizationArgs?: IForOfState, sortingArgs?: any, resetData?: boolean, cb?: (any) => void): any {
        const startIndex = virtualizationArgs.startIndex;
        const endIndex = virtualizationArgs.chunkSize + startIndex;

        if (resetData) {
            this._http.get(this._buildDataUrl(virtualizationArgs, sortingArgs)).subscribe((data: any) => {
                this._updateData(data, startIndex);
                this._prevRequestChunk = data.value.length;
                if (cb) {
                    cb(data);
                }
            });

            return;
        }

        if (!this.hasItemsInCache(virtualizationArgs)) {
            this._http.get(this._buildDataUrl(virtualizationArgs, sortingArgs)).pipe(debounceTime(500)).subscribe((data: any) => {
                this._updateData(data, startIndex);
                if (data.value.length < this._prevRequestChunk) {
                    // max data has been reached
                    const newStartIndex = (this._cachedData.length - 1) - this._prevRequestChunk;
                    data = this._cachedData.slice(newStartIndex, this._cachedData.length);
                    this._data.next(data);
                } else {
                    this._prevRequestChunk = data.value.length;
                }
                this.cdr.detectChanges();
                if (cb) {
                    cb(data);
                }
            });
        } else {
            let data = this._cachedData.slice(startIndex, endIndex);
            if (endIndex - startIndex < this._prevRequestChunk) {
                data = this._cachedData.slice(endIndex - this._prevRequestChunk, endIndex);
            }
            this._data.next(data);
            if (cb) {
                cb(data);
            }
        }
    }

    private _updateData(data: any, startIndex: number) {
        this._data.next(data.value);
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

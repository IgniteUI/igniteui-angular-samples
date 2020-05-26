import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Injectable } from "@angular/core";
import { IForOfState, SortingDirection } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";

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

    public loadDataForPage(page: number, pageSize: number,
                           callback?: (any) => void) {
        this._http.get(this._buildDataUrl(page, pageSize))
            .subscribe((data: any) => {
                const startIndex = (page - 1) * pageSize;
                this._updateData(data, startIndex);
                this._data.next(data);
                callback({ data });
            });
    }

    public getCachedData(virtualizationArgs: IForOfState) {
        const virtArgsEndIndex = virtualizationArgs.startIndex + virtualizationArgs.chunkSize;
        let data = [];
        if (virtArgsEndIndex > this._cachedData.length) {
            data = this._cachedData.slice(this._cachedData.length - this._prevRequestChunk + 1);
        } else {
            data = this._cachedData.slice(virtualizationArgs.startIndex, virtArgsEndIndex);
            this._prevRequestChunk = virtualizationArgs.chunkSize;
        }
        return data;
    }

    private _updateData(data: any, startIndex: number) {
        for (let i = 0; i < data.value.length; i++) {
            this._cachedData[i + startIndex] = data.value[i];
        }
    }

    private _buildDataUrl(page: number, pageSize: number): string {
        let baseQueryString = `${DATA_URL}?$count=true&`;
        const skip = (page - 1) * pageSize;
        const pageQuery = `$skip=${skip}&$top=${pageSize}`;
        baseQueryString += pageQuery;
        return baseQueryString;
    }
}

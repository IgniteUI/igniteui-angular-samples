import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular/lib/directives/for-of/IForOfState";
import { BehaviorSubject, Observable } from "rxjs";

const DATA_URL: string = "https://www.igniteui.com/api/products";

@Injectable()
export class RemoteService {
    public data: Observable<any[]>;
    private _data: BehaviorSubject<any[]>;
    private _cachedData: any[];

    constructor(private _http: HttpClient) {
        this._data = new BehaviorSubject([]);
        this.data = this._data.asObservable();
    }

    public getData(virtualizationArgs?: IForOfState, cb?: (any) => void): any {
        const startIndex = virtualizationArgs.startIndex;
        const endIndex = virtualizationArgs.chunkSize + startIndex;
        let areAllItemsInCache = true;

        if (!this._cachedData) {
            this._http.get(this._buildDataUrl(virtualizationArgs)).subscribe((data: any) => {
                this._cachedData = new Array<any>(data.Count).fill(null);
                this._updateData(data, startIndex);
                if (cb) {
                    cb(data);
                }
            });

            return;
        }

        for (let i = startIndex; i < endIndex; i++) {
            if (this._cachedData[i] === null) {
                areAllItemsInCache = false;
                break;
            }
        }

        if (!areAllItemsInCache) {
            this._http.get(this._buildDataUrl(virtualizationArgs)).subscribe((data: any) => {
                this._updateData(data, startIndex);
                if (cb) {
                    cb(data);
                }
            });
        } else {
            const data = this._cachedData.slice(startIndex, endIndex);
            this._data.next(data);
            if (cb) {
                cb(data);
            }
        }
    }

    private _updateData(data: any, startIndex: number) {
        this._data.next(data.Results);
        for (let i = 0; i < data.Results.length; i++) {
            this._cachedData[i + startIndex] = data.Results[i];
        }
    }

    private _buildDataUrl(virtualizationArgs: any): string {
        let baseQueryString = `${DATA_URL}?$inlinecount=allpages`;

        // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
        const top = virtualizationArgs.chunkSize === 0 ? 10 : virtualizationArgs.chunkSize;
        const skip = virtualizationArgs.startIndex;

        baseQueryString += `&$skip=${skip}&$top=${top}`;

        return baseQueryString;
    }
}

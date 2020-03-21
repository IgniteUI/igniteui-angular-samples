import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular";
import { RemoteFilteringService } from "./remoteFilteringService";

@Injectable()
export class RemotePinningService extends RemoteFilteringService {
    public primaryKey: string;
    private _cachedPinningData: Map<number, any> = new Map<number, any>();
    private _currentPinningData: Map<number, any> = new Map<number, any>();

    public getData(
        virtualizationArgs?: IForOfState,
        filteringArgs?: any,
        sortingArgs?: any, cb?: (any) => void): any {
        return this._http.get(this.buildDataUrl(
            virtualizationArgs, filteringArgs, sortingArgs)).subscribe((data: any) => {
                this._remoteData.next(this.addPinnedRows(data.value));
                if (cb) {
                    cb(data);
                }
            });
    }

    public storePinnedRecord(pinnedRow) {
        this._cachedPinningData.set(pinnedRow.rowID, pinnedRow.rowData);
        this._currentPinningData.set(pinnedRow.rowID, pinnedRow.rowData);
    }

    public removePinnedRecord(pinnedRow) {
        this._cachedPinningData.delete(pinnedRow.rowID);
        this._currentPinningData.delete(pinnedRow.rowID);
    }

    public updateCaching(virtualizationArgs, filteringArgs, sortingArgs) {
        const remotePinnedData = new Map<number, any>();
        this.resetCaching();
        this._http.get(this.buildPinnedDataUrl(
            virtualizationArgs, filteringArgs, sortingArgs)).subscribe((data: any) => {
                data.value.forEach(record => {
                    if (this._currentPinningData.has(record[this.primaryKey])) {
                        remotePinnedData.set(record[this.primaryKey], record);
                    }
                });
                this._currentPinningData = remotePinnedData;
            });
    }

    protected buildPinnedDataUrl(virtualizationArgs: any, filteringArgs: any, sortingArgs: any): string {
        const baseQueryString = this.buildDataUrl(virtualizationArgs, filteringArgs, sortingArgs);

        return baseQueryString.replace(`$filter=`, `$filter=${this.buildCachedRecordsUrl()} and `);
    }

    private addPinnedRows(data) {
        const unpinnedData = data.filter(element => {
            let isUnique = true;
            this._currentPinningData.forEach((value, key) => {
                if (element[this.primaryKey] === key) {
                    isUnique = false;
                }
            });
            return isUnique;
        });
        return [...this._currentPinningData.values(), ...unpinnedData];
    }

    private resetCaching() {
        this._currentPinningData = this._cachedPinningData;
    }

    private buildCachedRecordsUrl() {
        let url = "(";
        this._currentPinningData.forEach((value, key) => {
            url += `${this.primaryKey} eq ${key} or `;
        });
        url = url.slice(0, -4) +  ")";

        return url;
    }
}

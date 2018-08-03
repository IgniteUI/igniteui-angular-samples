import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IForOfState } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: BehaviorSubject<any[]>;
    private url: string = "https://www.igniteui.com/api/products";

    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]);
    }

    public getData(data?: IForOfState, searchText?: string, cb?: (any) => void): any {
        const dataState = data;
        return this.http
            .get(this.buildUrl(dataState, searchText))
            .subscribe((d: any) => {
                this.remoteData.next(d.Results ? d.Results : d);
                if (cb) {
                    cb(d);
                }
            });
    }

    private buildUrl(dataState: any, searchText?: string): string {
        let qS: string = "?";
        let requiredChunkSize: number;
        if (dataState) {
            const skip = dataState.startIndex;

            requiredChunkSize = dataState.chunkSize === 0 ?
                // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
                10 : dataState.chunkSize;
            const top = requiredChunkSize;
            qS += `$skip=${skip}&$top=10&$count=true&$inlinecount=allpages`;

            if (searchText) {
                qS += `&$filter=substringof('` + searchText + `',ProductName)` + ` or ` +
                    `substringof('` + searchText.toLowerCase() + `',ProductName)` + ` or ` +
                    `substringof('` + searchText.toUpperCase() + `',ProductName)` + ` or ` +
                    `substringof('` + this.toTitleCase(searchText) + `',ProductName)`;
            }
        }
        return `${this.url}${qS}`;
    }

    private toTitleCase(str) {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

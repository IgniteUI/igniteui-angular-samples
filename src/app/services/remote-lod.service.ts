import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IDataResponse {
    value: any[];
}

export interface IDataState {
    key: string;
    parentID: any;
    parentKey: string;
    rootLevel: boolean;
}

@Injectable()
export class RemoteLoDService {
    public url = `https://data-northwind.indigo.design/`;

    constructor(private http: HttpClient) { }

    public getData(dataState?: IDataState): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response: any[]) => response)
        );
    }

    public buildUrl(dataState: IDataState) {
        let qS = '';
        if (dataState.rootLevel) {
            qS += `${dataState.key}`;
        } else {
            if (!dataState.rootLevel) {
                //if (typeof dataState.parentID === 'string') {
                    qS += `${dataState.parentKey}\/${dataState.parentID}/${dataState.key}`;
               // } else {
               //     qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
               // }
            }
        }
        return `${this.url}${qS}`;
    }
}

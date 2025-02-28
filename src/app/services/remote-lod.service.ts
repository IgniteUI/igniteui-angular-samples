import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';

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
    public url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

    constructor(private http: HttpClient) { }

    public getData(dataState?: IDataState): Observable<any[]> {
        return this.http.get(this.buildUrl(dataState)).pipe(
            map((response: IDataResponse) => response.value)
        );
    }

    public getMetadata(): Observable<object> {
        return this.http.get(`${this.url}$metadata`, { responseType: 'text' }).pipe(
            map((response: string) => {
                let result;
                parseString(response, { explicitArray: false }, (err, parsedResult) => {
                    if (err) {
                        throw new Error('Error parsing XML');
                    }
                    result = parsedResult;
                });
                return result;
            })
        );
    }

    public buildUrl(dataState: IDataState) {
        let qS = '';
        if (dataState) {
            qS += `${dataState.key}?`;

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === 'string') {
                    qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }
}

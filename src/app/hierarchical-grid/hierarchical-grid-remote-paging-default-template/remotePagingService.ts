import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RemotePagingService {
    public url = `https://services.odata.org/V4/Northwind/Northwind.svc/`;
    private key = "value";

    constructor(private http: HttpClient) {
    }

    public buildUrl(dataState, index?: number, perPage?: number) {
        let qS = "";
        if (dataState) {
            qS += `${dataState.key}?`;

            if (dataState.rootLevel && perPage) {
                qS += `$skip=${index}&$top=${perPage}&$count=true`;
            }

            if (!dataState.rootLevel) {
                if (typeof dataState.parentID === "string") {
                    qS += `$filter=${dataState.foreignKey} eq '${dataState.parentID}'`;
                } else {
                    qS += `$filter=${dataState.foreignKey} eq ${dataState.parentID}`;
                }
            }
        }
        return `${this.url}${qS}`;
    }

    public getData(dataState?: any, index?: number, perPage?: number): Observable<any[]> {

        return this.http.get(this.buildUrl(dataState, index, perPage)).pipe(
                map((response) => response[this.key])
            );
    }

    public getDataLength(dataState?: any): any {
        return this.http.get(this.url + `${dataState.key}/` + `$count`).pipe(
            map((response) => {
                return response;
            })
        );
    }
}

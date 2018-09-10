import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserService {
    public remoteData: BehaviorSubject<any[]>;
    public allRemoteData: BehaviorSubject<number>;
    public url = "https://services.odata.org/V4/Northwind/Northwind.svc/Current_Product_Lists";
    constructor(private http: HttpClient) {
        this.remoteData = new BehaviorSubject([]);
        this.allRemoteData = new BehaviorSubject(0);
    }
    public getData(perPage?: number, index?: number): any {
        let qS = "";
        if (perPage) {
        qS = `?$skip=${index}&$top=${perPage}&$count=true`;
        this.url += qS;
        this.http
        .get(this.url)
        .subscribe((result: any) => {
            this.remoteData.next(result.value);
        });
        }
        this.url = this.url.replace(qS, "");
    }

    public getAllData() {
        this.http
        .get(this.url)
        .subscribe((result: any) => {
            console.log(result.value.length);
            this.allRemoteData.next(result.value.length);
        });
        console.log(1);
    }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface IServiceResponse {
    results: any[];
}

@Injectable()
export class DataService {
    private rndUsr: any[];

    constructor(private http: HttpClient) {
    }

    public getData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get("https://randomuser.me/api/?inc=gender,name,picture&results=" + 200)
                .subscribe((data: IServiceResponse) => {
                    resolve(data.results);
                });
        });
    }
}

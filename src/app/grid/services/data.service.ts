import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    private rndUsr: any[];

    constructor(private http: HttpClient) {
    }

    public getData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('https://randomuser.me/api/?inc=gender,name,picture&results=' + 200).subscribe(data => {
                resolve(data['results']);
            });
        });
    }

    // TODO

    // this.dataService.getData().then((json: any) => {
    //     let idx = 0;
    //     const data = [];

    //     for (const i of athletesData) {
    //       i.CountryFlag = i.CountryFlag.toLocaleLowerCase();
    //       i.Avatar = json[idx].picture.large;
    //       i.Name = json[idx].name.first + ' ' + json[idx].name.last;
    //       idx++;
    //       data.push(i);
    //     }

    //     this.localData = data;
    //   });
}

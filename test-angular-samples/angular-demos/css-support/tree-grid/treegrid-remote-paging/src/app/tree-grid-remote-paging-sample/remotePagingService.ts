import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class RemotePagingService {
    public remoteData: BehaviorSubject<any[]>;
    public dataLength: BehaviorSubject<number> = new BehaviorSubject(0);
    private localData = [];

    constructor() {
        this.remoteData = new BehaviorSubject([]);
        this.populateData();
    }

    public getData(index: number, perPage: number) {
        setTimeout(() =>
            this.remoteData.next(this.localData.slice(index, index + perPage)), 300);
    }

    public getDataLength() {
        setTimeout(() =>
            this.dataLength.next(this.localData.length), 300);
    }

    private populateData() {
        const months = 100;
        const picsPerMonth = 3;
        let picturesCount = months * picsPerMonth;

        for (let i = 0; i < months; i++) {
            const date = new Date(2018, 11);
            date.setMonth(date.getMonth() - i);
            const folder = {
                Content: [],
                Name: date.toLocaleString("en-us", { month: "short" }) + " " + date.getFullYear(),
                Size: 0,
                Type: "File folder"
            };

            for (let j = 0; j < picsPerMonth; j++) {
                const file = {
                    Name: "picture_" + picturesCount-- + ".jpg",
                    Size: 2000 + Math.floor(Math.random() * 3000),
                    Type: "JPG File"
                };
                folder.Size += file.Size;
                folder.Content.push(file);
            }
            this.localData.push(folder);
        }
    }

}

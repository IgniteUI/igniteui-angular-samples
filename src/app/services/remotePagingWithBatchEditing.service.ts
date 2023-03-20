import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { DATA } from '../data/foods';

@Injectable()
export class RemotePagingWithBatchEditingService {
    public dataCollection: any[];
    public data$: Observable<any[]>;
    private _data: BehaviorSubject<any[]>;

    constructor() {
        this._data = new BehaviorSubject([]);
        this.data$ = this._data.asObservable();
        this.dataCollection = DATA.slice();
    }

    public getData(skip: number, top: number): Observable<any[]> {
        setTimeout(() => {
            this._data.next(this.dataCollection.slice(skip, top));
        }, 500);

        return this.data$;
    }

    public processBatch(aggregatedChanges: any[]): Observable<number> {
        const data$: Observable<any> = new Observable((observer) => {
            aggregatedChanges.forEach(change => {
                if (change.type === 'add') {
                    this.dataCollection.push(change.newValue);
                } else if (change.type === 'update') {
                    const targetRec = this.dataCollection.find(r => r.ID === change.id);
                    Object.assign(targetRec, change.newValue);
                } else if (change.type === 'delete') {
                    const ind = this.dataCollection.findIndex(rec => rec.ID === change.id);
                    this.dataCollection.splice(ind, 1);
                }
            });
            observer.next(this.dataCollection.length);
            observer.complete();
        }).pipe(delay(500));

        return data$;
    }

    public getDataLength(): Observable<number> {
        const data$: Observable<any> = new Observable((observer) => {
            observer.next(this.dataCollection.length);
            observer.complete();
        }).pipe(delay(500));

        return data$;
    }
}

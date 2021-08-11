import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Invoice, INVOICE_DATA } from '../data/invoiceData';

@Injectable()
export class CRUDService {
    public dataCollection: Invoice[];
    public data$: Observable<Invoice[]>;
    private _data: BehaviorSubject<Invoice[]>;

    constructor(private _http: HttpClient) {
        this._data = new BehaviorSubject([]);
        this.data$ = this._data.asObservable();
        this.dataCollection = INVOICE_DATA.map((rec: Invoice, index) => {
            rec['ID'] = 100 + index;
            return rec;
        }).slice(0);
    }
    public getAllData(): Observable<Invoice[]> {
        setTimeout(() => {
            this._data.next(this.dataCollection);
        }, 300);

        return this.data$;
    }

    public getData(skip: number, top: number): Observable<Invoice[]> {
        setTimeout(() => {
            this._data.next(this.dataCollection.slice(skip, top));
        }, 1000);

        return this.data$;
    }

    public getRecord(id: number): Observable<Invoice> {
        const data$: Observable<any> = new Observable((observer) => {
            const rec = this.dataCollection.find(r => r.ID === id);
            observer.next(rec);
            observer.complete();
        });

        return data$;
    }

    public add(rec: Invoice): Observable<Invoice> {
        const data$: Observable<any> = new Observable((observer) => {
            this.dataCollection.push(rec);
            observer.next(this.dataCollection);
            observer.complete();
        });

        return data$;
    }

    public update(rec: Invoice): Observable<Invoice> {
        const data$: Observable<any> = new Observable((observer) => {
            const targetRec = this.dataCollection.find(r => r.ID === rec.ID);
            Object.assign(targetRec, rec);
            observer.next(rec);
            observer.complete();
        });

        return data$;
    }

    public delete(rec: Invoice): Observable<Invoice> {
        const data$: Observable<any> = new Observable((observer) => {
            const ind = this.dataCollection.indexOf(rec);
            const deletedInstance = this.dataCollection.splice(ind, 1)[0];
            observer.next(deletedInstance);
            observer.complete();
        });

        return data$;
    }

    public getDataLength(): Observable<number> {
        const data$: Observable<any> = new Observable((observer) => {
            observer.next(this.dataCollection.length);
            observer.complete();
        });

        return data$;
    }

}

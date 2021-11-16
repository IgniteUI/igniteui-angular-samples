import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FinancialData, Stock } from '../data/financialData';

@Injectable()
export class FinancialDataService {
    public records: Observable<Stock[]>;
    public _records: BehaviorSubject<Stock[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count: number = 10): void {
        this._records.next(FinancialData.generateData(count));
    }

    public getHierarchicalData(count: number = 10): void {
        this._records.next(FinancialData.generateHierarchicalData(count));
    }
}

import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { FinancialData } from '../data/financialData';

@Injectable()
export class FinancialDataService {
    public records: Observable<any[]>;
    public _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count: number = 10) {
        this._records.next(FinancialData.generateData(count));
    }

    public getHierarchicalData(count: number = 10) {
        this._records.next(FinancialData.generateHierarchicalData(count));
    }
}

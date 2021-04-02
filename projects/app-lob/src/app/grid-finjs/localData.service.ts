import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { FinancialData } from '../services/financialData';

@Injectable()
export class LocalDataService {
    public records: Observable<any[]>;
    public _records: BehaviorSubject<any[]>;
    private financialData: FinancialData = new FinancialData();

    constructor(private zone: NgZone) {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count: number = 10) {
        this._records.next(this.financialData.generateData(count));
    }

    public updateAllPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = this.financialData.updateAllPrices(data);
            this._records.next(newData);
        });
    }

    public updateRandomPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = this.financialData.updateRandomPrices(data);
            this._records.next(newData);
        });
    }
}

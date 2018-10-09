import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, Observable} from "rxjs";
import { FinancialData } from "./financialData";

interface IServiceResponse {
    results: any[];
}

@Injectable()
export class LocalDataService {
    public records: Observable<any[]>;
    public _records: BehaviorSubject<any[]>;
    public updatedRecordsLastSecond: Observable<number[]>;
    public _updatedRecordsLastSecond: BehaviorSubject<number[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
        this._updatedRecordsLastSecond = new BehaviorSubject([]);
        this.updatedRecordsLastSecond = this._updatedRecordsLastSecond.asObservable();
    }

    public getData(count: number = 10) {
        const financialData: FinancialData = new FinancialData();
        this._records.next(financialData.generateData(count));
    }

    public allDataFeed(count: number = 10) {
        const financialData: FinancialData = new FinancialData();
        return interval(100).subscribe(() => {
            return this._records.next(financialData.generateData(count));
        });
    }

    public allPrices(data: any[]) {
        const financialData: FinancialData = new FinancialData();
        return interval(100).subscribe(() => {
            return this._records.next(financialData.updateAllPrices(data));
        });
    }

    public updateRandomData(data: any[]) {
        const financialData: FinancialData = new FinancialData();
        const response = financialData.updateRandomPrices(data);
        this._records.next(response.data);
        this._updatedRecordsLastSecond.next([response.recordsUpdated]);
    }
}

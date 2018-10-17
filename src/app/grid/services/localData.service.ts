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
    private _timer;
    private subscription;

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

    public allPrices(data: any[], frequency: number) {
        const financialData: FinancialData = new FinancialData();
        this.subscription = interval(frequency).subscribe(() => {
            return this._records.next(financialData.updateAllPrices(data));
        });
    }

    public updateRandomData(data: any[], frequency) {
        const financialData: FinancialData = new FinancialData();
        this.subscription =  interval(frequency).subscribe(() => {
            return this._records.next(financialData.updateRandomPrices(data));
        });
    }

    public newUpdateRandomData(data: any[]) {
        const financialData: FinancialData = new FinancialData();
        const response = financialData.updateRandomPrices(data);
        this._records.next(response.data);
    }

    public clearMem() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

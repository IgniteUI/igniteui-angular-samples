import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";
import { FinancialData } from "../services/financialData";

@Injectable()
export class LocalDataService {
    public records: Observable<any[]>;
    public _records: BehaviorSubject<any[]>;
    private financialData: FinancialData = new FinancialData()

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count: number = 10) {
        this._records.next(this.financialData.generateData(count));
    }

    public updateAllPriceValues(data) {
        this._records.next(this.financialData.updateAllPrices(data));
    }

    public updateRandomPriceValues(data) {
        this._records.next(this.financialData.updateRandomPrices(data))
    }
}

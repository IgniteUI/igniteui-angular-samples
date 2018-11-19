import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, Observable} from "rxjs";
import { FinancialData } from "./hierFinancialData";

@Injectable()
export class TreeLocalDataService {
    public records: Observable<any[]>;
    public _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count: number = 10) {
        const financialData: FinancialData = new FinancialData();
        this._records.next(financialData.generateData(count));
    }
}

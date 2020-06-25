import { Component, Injectable, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { FinancialData } from "../services/financialData";

@Injectable()
export class LocalService {
    public records: Observable<any[]>;
    private _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count: number = 100) {
        const financialData: FinancialData = new FinancialData();
        this._records.next(financialData.generateData(count));
    }
}

@Component({
    providers: [LocalService],
    selector: "grid-sample",
    styleUrls: ["./grid-sample-2.component.css"],
    templateUrl: "grid-sample-2.component.html"
})

export class FinancialSampleComponent {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    public data: Observable<any[]>;
    constructor(private localService: LocalService) {
        this.localService.getData(100000);
        this.data = this.localService.records;
    }
    public ngOnInit(): void {
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

import { Component, Injectable, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { DATA } from "./financialData";

@Injectable()
export class LocalService {
    public records: Observable<any[]>;
    private _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count?: number) {
        let financialData = DATA;
        if (count) {
            financialData = this.generateData(count);
        }
        this._records.next(financialData);
    }
    private generateData(count: number): any[] {
        const currData = [];
        for (let i = 0; i < count; i++) {
            const rand = Math.floor(Math.random() * Math.floor(DATA.length));
            const dataObj = Object.assign({}, DATA[rand]);
            this.randomizeObjectData(dataObj);
            currData.push(dataObj);
        }
        return currData;
    }
    private randomizeObjectData(dataObj) {
        const changeP = "Change(%)";
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
    }
    private generateNewPrice(oldPrice): any {
        const rnd = parseFloat(Math.random().toFixed(2));
        const volatility = 2;
        let newPrice = 0;

        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }

        const changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;

        const result = { Price: 0, ChangePercent: 0 };
        result.Price = parseFloat(newPrice.toFixed(2));
        result.ChangePercent = parseFloat(changePercent.toFixed(2));

        return result;
    }
}

@Component({
    providers: [LocalService],
    selector: "grid-sample",
    styleUrls: ["./grid-selection.component.scss"],
    templateUrl: "grid-selection.component.html"
})

export class GridSelectionSampleComponent {
    @ViewChild("grid1", {static: true}) public grid1: IgxGridComponent;
    public data: Observable<any[]>;
    public selection = true;
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
    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.grid1.deselectAllRows();
            this.grid1.selectRows([targetCell.row.rowID]);
        }
    }
}

import { Injectable } from "@angular/core";
import { FilteringStrategy, IFilteringExpressionsTree } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Injectable()
export class RemoteFilteringService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    private _employeeData: any[];
    private _filteringStrategy = new FilteringStrategy();

    constructor() {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
        this._employeeData = generateEmployeeFlatData();
    }

    public getData(filteringArgs?: any, callback?: () => void) {
        setTimeout(() => {
            const processedEmployeeData = this.processData(this._employeeData, filteringArgs);
            this._remoteData.next(processedEmployeeData);
            if (callback) {
                callback();
            }
        }, 500);
    }

    private processData(data: any[], filteringArgs: IFilteringExpressionsTree): any[] {
        let processedData = Object.assign([], data);

        if (filteringArgs && filteringArgs.filteringOperands.length > 0) {
            processedData = this.filterData(processedData, filteringArgs);
        }

        return processedData;
    }

    private filterData(data: any[], filteringArgs: IFilteringExpressionsTree): any[] {
        const filteredData: any[] = [];

        for (const record of data) {
            if (this._filteringStrategy.matchRecord(record, filteringArgs) ||
                this.hasMatchingChild(record, filteringArgs)) {
                // If a record or any of its descendants matches the filtering condition,
                // add the record to the result array.
                filteredData.push(record);
            }
        }

        return filteredData;
    }

    private hasMatchingChild(record, filteringArgs: IFilteringExpressionsTree): boolean {
        const children = this._employeeData.filter((empl) => empl.ParentID === record.ID);

        for (const child of children) {
            if (this._filteringStrategy.matchRecord(child, filteringArgs) ||
                this.hasMatchingChild(child, filteringArgs)) {
                return true;
            }
        }

        return false;
    }
}

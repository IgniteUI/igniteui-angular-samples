import { Injectable } from "@angular/core";
import { FilteringStrategy, IFilteringExpressionsTree } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { EMPLOYEE_FLAT_DATA } from "../data/employees-flat";

@Injectable()
export class RemoteFilteringService {
    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    private _employeeData: any[];
    private _filteringStrategy = new FilteringStrategy();

    constructor() {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
        this._employeeData = EMPLOYEE_FLAT_DATA();
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

        data.forEach((record) => {
            if (this._filteringStrategy.matchRecord(record, filteringArgs)) {
                // If record matches the filtering condition, add it to the result array.
                filteredData.push(record);

                // Add record's parents as well in order to keep them in the display hierarchy.
                const parents = this.getParents(record);
                parents.forEach((parent) => {
                    if (filteredData.indexOf(parent) === -1) {
                        filteredData.push(parent);
                    }
                });
            }
        });

        return filteredData;
    }

    private getParents(record): any[] {
        const parents: any[] = [];

        if (!record || record.ParentID === -1) {
            return parents;
        }

        let currentRecord = record;
        while (currentRecord.ParentID !== -1) {
            const parent = this._employeeData.filter((empl) => empl.ID === currentRecord.ParentID)[0];
            parents.push(parent);

            currentRecord = parent;
        }

        return parents;
    }
}

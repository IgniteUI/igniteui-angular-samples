import { Injectable } from '@angular/core';
import { ColumnType, FilteringStrategy, IFilteringExpressionsTree } from 'igniteui-angular/core';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Injectable()
export class RemoteValuesService {
    private _filteringStrategy = new FilteringStrategy();

    public getRecordsData() {
        return generateEmployeeFlatData();
    }

    public getColumnData(column: ColumnType,
                         columnExprTree: IFilteringExpressionsTree,
                         done: (colVals: any[]) => void) {
        setTimeout(() => {
            const filteredData = this._filteringStrategy.filter(this.getRecordsData(), columnExprTree, null, null);
            const columnValues = filteredData.map(record => record[column.field]);
            done(columnValues);
        }, 1000);
    }
}

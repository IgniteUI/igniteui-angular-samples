import { Injectable } from "@angular/core";
import { FilteringStrategy, IFilteringExpressionsTree, IgxColumnComponent } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Injectable()
export class RemoteValuesService {
    private _filteringStrategy = new FilteringStrategy();

    public getRecordsData() {
        return generateEmployeeFlatData();
    }

    public getColumnData(column: IgxColumnComponent,
                         columnExprTree: IFilteringExpressionsTree,
                         done: (colVals: any[]) => void) {
        setTimeout(() => {
            const filteredData = this._filteringStrategy.filter(this.getRecordsData(), columnExprTree);
            const columnValues = filteredData.map(record => record[column.field]);
            done(columnValues);
        }, 1000);
    }
}

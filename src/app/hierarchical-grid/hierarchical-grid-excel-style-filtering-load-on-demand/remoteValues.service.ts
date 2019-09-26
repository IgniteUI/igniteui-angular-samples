import { Injectable } from "@angular/core";
import { FilteringStrategy, IFilteringExpressionsTree, IgxColumnComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Injectable()
export class RemoteValuesService {
    private _filteringStrategy = new FilteringStrategy();

    public getSingersData() {
        return SINGERS;
    }

    public getColumnData(parentId: any, key: string,
                         column: IgxColumnComponent,
                         columnExprTree: IFilteringExpressionsTree,
                         done: (colVals: any[]) => void) {
        setTimeout(() => {
            let filteredData = [];

            if (!parentId) {
                // Generate unique column values for the singers.
                filteredData = this._filteringStrategy.filter(this.getSingersData(), columnExprTree);
            } else if (key === "Albums") {
                // Generate unique column values for the albums of a specific singer.
                const singer = this.getSingersData().find((rec) => rec.Artist === parentId);
                const albums = singer ? (singer.Albums ? singer.Albums : []) : [];
                filteredData = this._filteringStrategy.filter(albums, columnExprTree);
            }

            const columnValues = filteredData.map(record => record[column.field]);
            done(columnValues);
        }, 1000);
    }
}

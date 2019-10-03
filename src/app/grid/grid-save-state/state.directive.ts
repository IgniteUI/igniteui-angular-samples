// tslint:disable:object-literal-sort-keys
import { AfterViewInit, Directive, Host, OnDestroy, Optional, Self } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import {
    DefaultSortingStrategy, FilteringExpressionsTree,
    IFilteringExpression, IgxGridComponent, ISortingExpression
} from "igniteui-angular";
import { take } from "rxjs/operators";

interface IGridState {
    paging: { index: number, recordsPerPage: number };
    selection: any[];
    filtering: FilteringExpressionsTree;
    advancedFiltering: FilteringExpressionsTree;
    sorting: ISortingExpression[];
    columns: any[];
}

@Directive({
    selector: "[igxState]"
})
export class IgxGridStateDirective implements AfterViewInit {

    public perPage = 15;
    public selection = true;
    public filtering = true;
    public advancedFiltering = true;
    public paging = true;
    public sorting = true;
    public columns = true;
    public shouldSaveState = true;

    public initialState: IGridState = {
        filtering: new FilteringExpressionsTree(0),
        advancedFiltering: undefined,
        paging: { index: 0, recordsPerPage: this.perPage },
        selection: [],
        sorting: [],
        columns: []
    };

    public gridState: IGridState;

    constructor(@Host() @Self() @Optional() public grid: IgxGridComponent, private router: Router) {
    }

    public ngOnInit() {
        this.loadGridState();

        this.router.events.pipe(
            take(1)
        ).subscribe((event: NavigationStart) => {
            this.saveGridState();
        });
    }

    public ngAfterViewInit() {
        this.restoreGridState();
        this.grid.cdr.detectChanges();
    }

    public saveGridState() {
        const pagingState = { paging: this.grid.pagingState };
        this.storeState("paging", pagingState);

        const sortingState = { sorting: this.grid.sortingExpressions };
        this.storeState("sorting", sortingState);

        const filteringState = { filtering: this.grid.filteringExpressionsTree };
        this.storeState("filtering", filteringState, this.stringifyCallback);

        const advancedFilteringState = { advancedFiltering: this.grid.advancedFilteringExpressionsTree };
        this.storeState("advancedFiltering", advancedFilteringState);

        const selectionState = { selection: this.grid.selectedRows() };
        this.storeState("selection", selectionState);

        const columnsState = { columns: this.getColumns() };
        this.storeState("columns", columnsState);
    }

    public loadGridState() {
        this.gridState = Object.assign({}, this.initialState);
        for (const propt in this.gridState) {
            if ((this.gridState as any).hasOwnProperty(propt)) {
                this.gridState[propt] = (propt === "filtering" || propt === "advancedFiltering") ?
                                            this.getStoredState(propt, null, this.parseCallback) :
                                            this.getStoredState(propt);
            }
        }
    }

    public restoreGridState() {
        // this.loadGridState();

        // restore filtering
        if (this.filtering && this.gridState.filtering) {
            const filterTree = this.createExpressionsTreeFromObject(this.gridState.filtering);
            this.grid.filteringExpressionsTree = filterTree;
        }

        // restore advanced filtering
        if (this.advancedFiltering && this.gridState.advancedFiltering) {
            const advFilterTree = this.createExpressionsTreeFromObject(this.gridState.advancedFiltering);
            this.grid.advancedFilteringExpressionsTree = advFilterTree;
        }

        // restore paging
        if (this.paging && this.gridState.paging) {
            if (this.grid.perPage !== this.gridState.paging.recordsPerPage) {
                this.grid.perPage = this.gridState.paging.recordsPerPage;
                this.grid.cdr.detectChanges();
            }
            if (this.grid.page !== this.gridState.paging.index) {
                this.grid.paginate(this.gridState.paging.index);
            }
        }

        // restore sorting
        if (this.sorting && this.gridState.sorting) {
            const strategy = DefaultSortingStrategy.instance();
            this.gridState.sorting.forEach((expr) => expr.strategy = strategy);
            this.grid.sortingExpressions = this.gridState.sorting;
        }

        // restore selection
        if (this.selection && this.gridState.selection) {
            this.grid.selectRows(this.gridState.selection);
        }
    }

    public storeState(action: string, args: any, stringifyCb?: (key, val) => any) {
        if (this[action]) {
            const actionKey = action + "-" + this.grid.id;
            window.localStorage.setItem(actionKey, JSON.stringify(args, stringifyCb));
        }
    }

    public getStoredState(action: string, gridId?: string, parseCb?: (key, val) => any): any {
        gridId = gridId ? gridId : this.grid.id;
        const actionKey = action + "-" + gridId;
        const item = JSON.parse(window.localStorage.getItem(actionKey), parseCb);
        return item ? item[action] : null;
    }

    public toggleAction(checked: boolean, action: string) {
        window.localStorage.removeItem(action);
        // if we want to restore paging, it makes sense to work over the same data set
        // therefore we need to reapply filtering as wel
        if (action === "paging" && checked) {
            this.filtering = true;
        }
    }

    public clearStorageForGrid(gridId: string) {
        for (const propt in this.gridState) {
            if ((this.gridState as any).hasOwnProperty(propt)) {
                const actionKey = propt + "-" + gridId;
                window.localStorage.removeItem(actionKey);
            }
        }

    }

    public getColumnsForGrid(gridId: string): any {
        const action = "columns";
        const columns = this.getStoredState(action, gridId);
        return columns;
    }

    /**
     * This method builds a FilteringExpressionsTree from a provided object.
     */
    private createExpressionsTreeFromObject(exprTreeObject: any): FilteringExpressionsTree {
        if (!exprTreeObject || !exprTreeObject.filteringOperands) {
            return null;
        }

        const expressionsTree = new FilteringExpressionsTree(exprTreeObject.operator, exprTreeObject.fieldName);

        for (const item of exprTreeObject.filteringOperands) {
            // Check if item is an expressions tree or a single expression.
            if (item.filteringOperands) {
                const subTree = this.createExpressionsTreeFromObject((item as FilteringExpressionsTree));
                expressionsTree.filteringOperands.push(subTree);
            } else {
                const expr = item as IFilteringExpression;
                const column = this.grid.getColumnByName(expr.fieldName);
                expr.condition = column.filters.condition(expr.condition.name);
                expr.searchVal = (column.dataType === "date") ? new Date(Date.parse(expr.searchVal)) : expr.searchVal;
                expressionsTree.filteringOperands.push(expr);
            }
        }

        return expressionsTree;
    }

    private getColumns() {
        const gridColumns = this.grid.columns.map((c) => {
            return {
                pinned: c.pinned,
                sortable: c.sortable,
                filterable: c.filterable,
                movable: c.movable,
                hidden: c.hidden,
                dataType: c.dataType,
                field: c.field,
                width: c.width,
                header: c.header
            };
        });
        return gridColumns;
    }

    private stringifyCallback(key: string, val: any) {
        if (key === "searchVal" && val instanceof Set) {
            return Array.from(val);
        }
        return val;
    }

    private parseCallback(key: string, val: any) {
        if (key === "searchVal" && Array.isArray(val)) {
            return new Set(val);
        }
        return val;
    }
}
// tslint:enable:object-literal-sort-keys

// tslint:disable:object-literal-sort-keys
import { AfterViewInit, Directive, Host, OnDestroy, Optional, Self } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { DefaultSortingStrategy, FilteringExpressionsTree,
    IFilteringExpression, IgxGridComponent, ISortingExpression } from "igniteui-angular";
import { take } from "rxjs/operators";

interface IGridState {
    paging: {index: number, recordsPerPage: number};
    selection: any[];
    filtering: FilteringExpressionsTree;
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
    public paging = true;
    public sorting = true;
    public columns = true;
    public shouldSaveState = true;

    public initialState: IGridState = {
        filtering: new FilteringExpressionsTree(0),
        paging: {index: 0, recordsPerPage: this.perPage},
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
        const pagingState = { paging: this.grid.pagingState};
        this.storeState("paging", pagingState);

        const sortingState = { sorting: this.grid.sortingExpressions };
        this.storeState("sorting", sortingState);

        const filteringState = { filtering: this.grid.filteringExpressionsTree};
        this.storeState("filtering", filteringState);

        const selectionState = {selection: this.grid.selectedRows()};
        this.storeState("selection", selectionState);

        const columnsState = {columns: this.getColumns()};
        this.storeState("columns", columnsState);
    }

    public loadGridState() {
        this.gridState = Object.assign({}, this.initialState);
        for (const propt in this.gridState) {
            if ((this.gridState as any).hasOwnProperty(propt)) {
                this.gridState[propt] = this.getStoredState(propt);
            }
        }
    }

    public restoreGridState() {
        // this.loadGridState();

        // restore filtering
        if (this.filtering && this.gridState.filtering) {
            const gridFilteringExpressionsTree = new FilteringExpressionsTree(this.gridState.filtering.operator);

            for (const f of this.gridState.filtering.filteringOperands) {
              const filtOperand = f as FilteringExpressionsTree;
              let columnsFiltOperands: any;

              // We need to make sure that we have a IFilteringExpression[] to pass to the createExpressionsTree method
              // Depending on filtering logic (AND or OR), filtOperand.filteringOperands returns different content,
              // so we have three cases, where to build IFilteringExpression[], see #1, #2 and #3
              if (filtOperand.filteringOperands.length > 1) {
                // #1 filtOperand.filteringOperands is an array of IFilteringExpression objects
                columnsFiltOperands = filtOperand.filteringOperands as IFilteringExpression[];
              } else {
                columnsFiltOperands = filtOperand.filteringOperands[0] as IFilteringExpression;
                if (Array.isArray(columnsFiltOperands.filteringOperands)) {
                  // #2 filtOperand.filteringOperands is an array of just one IFilteringExpression\
                  // containing filteringOperands property, which value is an array of IFilteringExpression objects
                  columnsFiltOperands = columnsFiltOperands.filteringOperands;
                } else {
                  // #3 just an IFilteringExpression object, that we wrap in an array
                  columnsFiltOperands = [columnsFiltOperands];
                }
              }
              // we pass an array of IFilteringExpression to the createExpressionsTree
              const columnFilteringExpressionsTree = this.createExpressionsTree(columnsFiltOperands, filtOperand);
              gridFilteringExpressionsTree.filteringOperands.push(columnFilteringExpressionsTree);
            }

            this.grid.filteringExpressionsTree = gridFilteringExpressionsTree;
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

    public storeState(action: string, args: any) {
        if (this[action]) {
            const actionKey = action + "-" + this.grid.id;
            window.localStorage.setItem(actionKey, JSON.stringify(args));
        }
    }

    public getStoredState(action: string, gridId?: string): any {
        gridId = gridId ?  gridId : this.grid.id;
        const actionKey = action + "-" + gridId;
        const item = JSON.parse(window.localStorage.getItem(actionKey));
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
     * this method takes every IFilteringExpresion from the columnsFiltOperands
     * and adds it to a FilteringExpressionsTree
     */
    private createExpressionsTree(columnsFiltOperands: IFilteringExpression[],
                                  filtOperand: FilteringExpressionsTree): FilteringExpressionsTree {
        const columnFilteringExpressionsTree =
            new FilteringExpressionsTree(filtOperand.operator, filtOperand.fieldName);
        const column = this.grid.columns.filter((col) => col.field === filtOperand.fieldName)[0];
        for (const fo of columnsFiltOperands) {
            const columnFiltOperand = fo as IFilteringExpression;
            columnFiltOperand.condition = column.filters.condition(columnFiltOperand.condition.name);
            if (column.dataType === "date") {
                columnFiltOperand.searchVal = new Date(Date.parse(columnFiltOperand.searchVal));
            }
            columnFilteringExpressionsTree.filteringOperands.push(columnFiltOperand);
        }
        return columnFilteringExpressionsTree;
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
}
// tslint:enable:object-literal-sort-keys

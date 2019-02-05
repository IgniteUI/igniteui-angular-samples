import { AfterViewInit, Directive, Host, HostListener, OnDestroy, Optional, Self } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { DefaultSortingStrategy, FilteringExpressionsTree,
    IFilteringExpression, IgxColumnComponent, IgxGridComponent, ISortingExpression } from "igniteui-angular";
import { take } from "rxjs/operators";

interface IGridState {
    paging: {index: number, recordsPerPage: number};
    selection: any[];
    filtering: FilteringExpressionsTree;
    sorting: ISortingExpression[];
}

@Directive({
    selector: "[igxState]"
})
export class IgxGridStateDirective implements AfterViewInit, OnDestroy {

    public perPage = 15;
    public selection = true;
    public filtering = true;
    public paging = true;
    public sorting = true;
    public shouldSaveState = true;

    public initialState: IGridState = {
        columns: [],
        filtering: new FilteringExpressionsTree(0),
        paging: {index: 0, recordsPerPage: this.perPage},
        selection: [],
        sorting: []
    };

    public gridState: IGridState;

    constructor(@Host() @Self() @Optional() public grid1: IgxGridComponent, private router: Router) {
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
        this.grid1.cdr.detectChanges();
    }

    public saveGridState() {
        const pagingState = { paging: this.grid1.pagingState};
        this.storeState("paging", pagingState);

        const sortingState = { sorting: this.grid1.sortingExpressions };
        this.storeState("sorting", sortingState);

        const filteringState = { filtering: this.grid1.filteringExpressionsTree};
        this.storeState("filtering", filteringState);

        const selectionState = {selection: this.grid1.selectedRows()};
        this.storeState("selection", selectionState);
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
              const column = this.grid1.columns.filter((col) => col.field === filtOperand.fieldName)[0];
              const columnFilteringExpressionsTree =
                  new FilteringExpressionsTree(filtOperand.operator, filtOperand.fieldName);

              let columnsFiltOperands = filtOperand.filteringOperands[0] as any;
              if (Array.isArray(columnsFiltOperands.filteringOperands)) {
                columnsFiltOperands = columnsFiltOperands.filteringOperands;
              } else {
                columnsFiltOperands = [columnsFiltOperands];
              }

              for (const fo of columnsFiltOperands) {
                const columnFiltOperand = fo as IFilteringExpression;
                columnFiltOperand.condition = column.filters.condition(columnFiltOperand.condition.name);
                columnFilteringExpressionsTree.filteringOperands.push(columnFiltOperand);
              }

              gridFilteringExpressionsTree.filteringOperands.push(columnFilteringExpressionsTree);
            }

            this.grid1.filteringExpressionsTree = gridFilteringExpressionsTree;
          }

        // restore paging
        if (this.paging && this.gridState.paging) {
          if (this.grid1.perPage !== this.gridState.paging.recordsPerPage) {
            this.grid1.perPage = this.gridState.paging.recordsPerPage;
            this.grid1.cdr.detectChanges();
          }
          if (this.grid1.page !== this.gridState.paging.index) {
            this.grid1.paginate(this.gridState.paging.index);
          }
        }

        // restore sorting
        if (this.sorting && this.gridState.sorting) {
          const strategy = DefaultSortingStrategy.instance();
          this.gridState.sorting.forEach((expr) => expr.strategy = strategy);
          this.grid1.sortingExpressions = this.gridState.sorting;
        }

        // restore selection
        if (this.selection && this.gridState.selection) {
          this.grid1.selectRows(this.gridState.selection);
        }
    }

    public storeState(action: string, args: any) {
        if (this[action]) {
            window.localStorage.setItem(action, JSON.stringify(args));
        }
    }

    public getStoredState(action: string): any {
        const item = JSON.parse(window.localStorage.getItem(action));
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

    public clearStorage() {
        for (const propt in this.gridState) {
            if ((this.gridState as any).hasOwnProperty(propt)) {
            window.localStorage.removeItem(propt);
            }
        }

    }

    public ngOnDestroy() {
        this.grid1.onRowSelectionChange.unsubscribe();
        this.grid1.onPagingDone.unsubscribe();
        this.grid1.onFilteringDone.unsubscribe();
        this.grid1.onSortingDone.unsubscribe();
    }
}

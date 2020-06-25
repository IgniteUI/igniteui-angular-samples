import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { FilteringExpressionsTree, FilteringLogic, IGridState, IGroupingState,
    IgxGridComponent, IgxGridStateDirective, IgxNumberSummaryOperand, IgxSummaryResult,
    IPagingState,
    ISortingExpression} from "igniteui-angular";
import { take } from "rxjs/operators";
import { employeesData } from "./localData";

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data);
        result.push({
            key: "test",
            label: "Test",
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
  }

// tslint:disable:object-literal-sort-keys
@Component({
  selector: "app-grid",
  styleUrls: ["./grid-state.component.css"],
  templateUrl: "./grid-state.component.html"
})

export class GridSaveStateComponent implements OnInit {
    public localData: any[];
    public columns: any[];
    public gridId = "grid1";
    public stateKey = this.gridId + "-state";
    public gridState: IGridState;
    public serialize = true;

    public options = {
      cellSelection: true,
      rowSelection: true,
      filtering: true,
      advancedFiltering: true,
      paging: true,
      sorting: true,
      groupBy: true,
      columns: true
    };

    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild(IgxGridComponent, { static: true }) public grid: IgxGridComponent;

    public initialColumns: any[] = [
      // tslint:disable:max-line-length
      { field: "FirstName", header: "First Name", width: "150px", dataType: "string", pinned: true, movable: true, sortable: true, filterable: true},
      { field: "LastName", header: "Last Name", width: "150px", dataType: "string", pinned: true, movable: true, sortable: true, filterable: true},
      { field: "Country", header: "Country", width: "140px", dataType: "string", groupable: true, movable: true, sortable: true, filterable: true, resizable: true },
      { field: "Age", header: "Age", width: "110px", dataType: "number", movable: true, sortable: true, filterable: true, hasSummary: true, resizable: true, summaries: MySummary},
      { field: "RegistererDate", header: "Registerer Date", width: "180px", dataType: "date", movable: true, sortable: true, filterable: true, resizable: true },
      { field: "IsActive", header: "Is Active", width: "140px", dataType: "boolean", groupable: true, movable: true, sortable: true, filterable: true }
      // tslint:enable:max-line-length
    ];

    constructor(private router: Router) {}

    public ngOnInit() {
      this.localData = employeesData;
      this.columns = this.initialColumns;
      this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
          this.saveGridState();
      });
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
        // const state = this.state.getState(this.serialize, ['sorting', 'filtering']);
        if (typeof state === "string") {
          window.localStorage.setItem(this.stateKey, state);
        } else {
          window.localStorage.setItem(this.stateKey, JSON.stringify(state));
        }
    }

    public restoreGridState() {
        const state = window.localStorage.getItem(this.stateKey);
        if (state) {
          this.state.setState(state);
        }
    }

    public restoreColumns() {
      const state = this.getColumnsState();
      if (state) {
        this.state.setState({ columns: state });
      }
    }

    public getColumnsState(): any {
      let state = window.localStorage.getItem(this.stateKey);
      state =  state ? JSON.parse(state).columns : null;
      return state;
    }

    public restoreFiltering() {
      const state = window.localStorage.getItem(this.stateKey);
      const filteringState: FilteringExpressionsTree = state ? JSON.parse(state).filtering : null;
      if (filteringState) {
        const gridFilteringState: IGridState = { filtering: filteringState};
        this.state.setState(gridFilteringState);
      }
    }

    public restoreAdvancedFiltering() {
      const state = window.localStorage.getItem(this.stateKey);
      const advFilteringState: FilteringExpressionsTree = state ? JSON.parse(state).advancedFiltering : null;
      if (advFilteringState) {
        const gridAdvancedFilteringState: IGridState = { advancedFiltering: advFilteringState};
        this.state.setState(gridAdvancedFilteringState);
      }
    }

    public restoreSorting() {
      const state = window.localStorage.getItem(this.stateKey);
      const sortingState: ISortingExpression[] =  state ? JSON.parse(state).sorting : null;
      if (sortingState) {
        const gridSortingState: IGridState = { sorting: sortingState};
        this.state.setState(gridSortingState);
      }
    }

    public restoreGroupby() {
      const state = window.localStorage.getItem(this.stateKey);
      const groupByState: IGroupingState = state ? JSON.parse(state).groupBy : null;
      if (groupByState) {
        const gridGroupiByState: IGridState = { groupBy: groupByState};
        this.state.setState(gridGroupiByState);
      }
    }

    public restoreRowSelection() {
      const state = window.localStorage.getItem(this.stateKey);
      const rowSelectionState = state ? JSON.parse(state).rowSelection : null;
      if (rowSelectionState) {
        const gridRowSelectionState: IGridState = { rowSelection: rowSelectionState };
        this.state.setState(gridRowSelectionState);
      }
    }

    public restoreCellSelection() {
      const state = window.localStorage.getItem(this.stateKey);
      const cellSelectionState = state ? JSON.parse(state).cellSelection : null;
      if (state) {
        const gridCellSelectionState: IGridState = { cellSelection: cellSelectionState };
        this.state.setState(gridCellSelectionState);
      }
    }

    public restorePaging() {
      const state = window.localStorage.getItem(this.stateKey);
      const pagingState: IPagingState = state ? JSON.parse(state).paging : null;
      if (state) {
        const gridPagingState: IGridState = { paging: pagingState };
        this.state.setState(gridPagingState);
      }
    }

    public resetGridState() {
      this.grid.filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
      this.grid.advancedFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
      this.grid.sortingExpressions = [];
      this.grid.groupingExpressions = [];
      this.grid.deselectAllRows();
      this.grid.clearCellSelection();
    }

    public onChange(event: any, action: string) {
      this.state.options[action] = event.checked;
    }

    public clearStorage() {
      window.localStorage.removeItem(this.stateKey);
    }

    public reloadPage() {
        window.location.reload();
    }
}

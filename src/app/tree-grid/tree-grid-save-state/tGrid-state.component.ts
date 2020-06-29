import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { FilteringExpressionsTree, FilteringLogic, GridFeatures,
    IGridState, IGridStateOptions, IgxGridStateDirective, 
    IgxTreeGridComponent} from "igniteui-angular";
import { take } from "rxjs/operators";
import { EMPLOYEE_DATA } from "../../../../projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data";

// tslint:disable:object-literal-sort-keys
@Component({
  selector: "app-hGrid",
  styleUrls: ["./tGrid-state.component.scss"],
  templateUrl: "./tGrid-state.component.html"
})

export class TGridSaveStateComponent implements OnInit {
    public localData: any[];
    public columns: any[];
    public treeGridId = "grid1";
    public stateKey = this.treeGridId + "-state";
    public gridState: IGridState;
    public serialize = true;

    public features = [
        { key: GridFeatures.ADVANCED_FILTERING, shortName: "Adv Filt" },
        { key: GridFeatures.CELL_SELECTION, shortName: "Cell Sel" },
        { key: GridFeatures.COLUMNS, shortName: "Columns" } ,
        { key: GridFeatures.COLUMN_SELECTION, shortName: "Cols Sel" },
        { key: GridFeatures.EXPANSION, shortName: "Expansion" },
        { key: GridFeatures.FILTERING, shortName: "Filt" },
        { key: GridFeatures.PAGING, shortName: "Paging" },
        { key: GridFeatures.ROW_PINNING, shortName: "Row Pining" },
        { key: GridFeatures.ROW_SELECTION, shortName: "Row Sel" },
        { key: GridFeatures.SORTING, shortName: "Sorting" }
      ];

    public options: IGridStateOptions = {
      cellSelection: true,
      rowSelection: true,
      filtering: true,
      advancedFiltering: true,
      paging: true,
      sorting: true,
      columns: true,
      expansion: true,
      rowPinning: true,
      columnSelection: true
    };

    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild("treeGrid", { static: true }) public tGrid: IgxTreeGridComponent;

    constructor(private router: Router) {
        this.localData = EMPLOYEE_DATA;
    }

    public ngOnInit() {
      this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
          this.saveGridState();
      });
    }

    public ngAfterViewInit() {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
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

    public restoreFeature(stateDirective: IgxGridStateDirective, feature: string) {
        const state = this.getFeatureState(this.stateKey, feature);
        if (state) {
          const featureState = { } as IGridState;
          featureState[feature] = state;
          stateDirective.setState(featureState);
        }
      }

    public getFeatureState(stateKey: string, feature: string) {
        let state = window.localStorage.getItem(stateKey);
        state =  state ? JSON.parse(state)[feature] : null;
        return state;
    }

    public resetGridState() {
        const tGrid: IgxTreeGridComponent = this.tGrid;
        tGrid.filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        tGrid.advancedFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        tGrid.sortingExpressions = [];
        tGrid.deselectAllRows();
        tGrid.clearCellSelection();
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

    public formatter = (a) => a;
}

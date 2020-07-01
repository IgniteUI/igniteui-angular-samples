import { Component, OnInit, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { FilteringExpressionsTree, FilteringLogic, GridFeatures,
    IGridState, IGridStateOptions, IgxGridStateDirective,
    IgxHierarchicalGridComponent, IgxNumberSummaryOperand,
    IgxSummaryResult, IgxCheckboxComponent} from "igniteui-angular";
import { take } from "rxjs/operators";
import { SINGERS } from "../data";

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
  selector: "app-hGrid",
  styleUrls: ["./hGrid-state.component.scss"],
  templateUrl: "./hGrid-state.component.html"
})

export class HGridSaveStateComponent implements OnInit {
    public localData: any[];
    public columns: any[];
    public gridId = "hGrid1";
    public stateKey = this.gridId + "-state";
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
    @ViewChild("hierarchicalGrid", { static: true }) public hGrid: IgxHierarchicalGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    constructor(private router: Router) {
        this.localData = SINGERS;
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

    public onChange(event: any, action: string) {
        if (action === "toggleAll") {
          this.checkboxes.forEach(cb => {
              cb.checked = event.checked;
          })
          for (const key of Object.keys(this.options)) {
              this.state.options[key] = event.checked;
          }
          return;
        }
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

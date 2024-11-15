import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IPivotConfiguration, IgxPivotNumericAggregate, NoopPivotDimensionsStrategy, IgxPivotGridComponent, NoopSortingStrategy, IGridState, IGridStateOptions, IgxGridStateDirective, IgxButtonDirective, IgxIconComponent } from "igniteui-angular"
import { PivotDataService } from "../../services/pivotRemoteData.service";
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-pivot-grid-noop-persistence-sample',
    styleUrls: ['./pivot-grid-noop-persistence-sample.component.scss'],
    templateUrl: './pivot-grid-noop-persistence-sample.component.html',
    providers: [PivotDataService],
    imports: [IgxButtonDirective, IgxIconComponent, IgxPivotGridComponent, IgxGridStateDirective]
})
export class PivotGridNoopPersistenceSampleComponent implements AfterViewInit {
    @ViewChild('grid', { static: true })
    public grid: IgxPivotGridComponent;

    @ViewChild(IgxGridStateDirective, { static: true })
    public state!: IgxGridStateDirective;

    public customStrategy = NoopSortingStrategy.instance();
    public data: any[];
    public options: IGridStateOptions = {
        cellSelection: true,
        rowSelection: true,
        filtering: true,
        sorting: true,
        expansion: true,
        columnSelection: true,
        pivotConfiguration: true
    };
    public pivotConfigHierarchy: IPivotConfiguration = {
        columnStrategy: NoopPivotDimensionsStrategy.instance(),
        rowStrategy: NoopPivotDimensionsStrategy.instance(),
        columns: [
            {
                memberName: 'Country',
                enabled: true
            }
        ],
        rows: [
            {
                memberFunction: () => 'All',
                memberName: 'AllProducts',
                enabled: true,
                childLevel: {
                    memberFunction: (data) => data.ProductCategory,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            },
            {
                memberName: 'AllSeller',
                memberFunction: () => 'All Sellers',
                enabled: true,
                childLevel: {
                    enabled: true,
                    memberName: 'SellerName'
                }
            }
        ],
        values: [
            {
                member: 'UnitsSold',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true,
                formatter: (value) => value ? value : 0
            }
        ],
        filters: null
    };

    constructor(private _remoteService: PivotDataService) {
    }

    ngAfterViewInit(): void {
        this.grid.isLoading = true;
        this._remoteService.getData().subscribe((data: any) => {
            this.grid.isLoading = false;
            this.data = data;
        });
    }

    public saveState() {
        const state = this.state.getState() as string;
        window.sessionStorage.setItem('grid-state', state);
    }

    public restoreState() {
        const state = window.sessionStorage.getItem('grid-state');
        this.state.stateParsed.pipe(take(1)).subscribe(parsedState => {
            parsedState.sorting.forEach(expression => expression.strategy = NoopSortingStrategy.instance());
            parsedState.pivotConfiguration.rowStrategy = NoopPivotDimensionsStrategy.instance();
            parsedState.pivotConfiguration.columnStrategy = NoopPivotDimensionsStrategy.instance();
        });
        this.state.setState(state as string);
    }

    public clearStorage() {
        window.sessionStorage.removeItem('grid-state');
    }
}

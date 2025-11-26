import { AfterViewInit, Component, ViewChild, inject } from "@angular/core";

import { IPivotConfiguration, IgxPivotNumericAggregate, NoopPivotDimensionsStrategy, IgxPivotGridComponent } from "igniteui-angular"
import { PivotDataService } from "../../services/pivotRemoteData.service";

@Component({
    selector: 'app-pivot-grid-noop-sample',
    styleUrls: ['./pivot-grid-noop-sample.component.scss'],
    templateUrl: './pivot-grid-noop-sample.component.html',
    providers: [PivotDataService],
    imports: [IgxPivotGridComponent]
})
export class PivotGridNoopSampleComponent implements AfterViewInit {
    private _remoteService = inject(PivotDataService);

    @ViewChild('grid', { static: true })
    public grid: IgxPivotGridComponent;

    public data: any[];

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

    ngAfterViewInit(): void {
        this.grid.isLoading = true;
        this._remoteService.getData().subscribe((data: any) => {
            this.grid.isLoading = false;
            this.data = data;
        });
    }
}

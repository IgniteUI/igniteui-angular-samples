import { Component } from "@angular/core";
import { GridColumnDataType, IgxPivotNumericAggregate, IPivotConfiguration } from "igniteui-angular";
import { SALES_DATA_NEW } from '../../data/salesDataNew';
@Component({
    selector: 'app-pivot-datasource-sample',
    styleUrls: ['./pivot-datasource-sample.component.scss'],
    templateUrl: './pivot-datasource-sample.component.html'
})
export class PivotDatasourceSampleComponent {
    public data = SALES_DATA_NEW;
    public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {
                memberName: 'Year',
                enabled: true
            },
            {

                memberName: 'Product',
                enabled: true
            }
        ],
        rows: [
            {
                memberName: 'Country',
                enabled: true,
                childLevel: {
                    memberName: 'Date',
                    enabled: true
                }
            }
        ],
        values: [
            {
                member: 'Sales',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'Sum Of Sales',
                    label: 'Sum'
                },
                enabled: true,
                dataType: GridColumnDataType.Currency
            },
            {
                member: 'Profit',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'Sum Of Profit',
                    label: 'Sum'
                },
                enabled: true,
                dataType: GridColumnDataType.Currency
            }
        ],
        filters: [
            {
                memberName: 'Month Name',
                enabled: true
            }
        ]
    };
}

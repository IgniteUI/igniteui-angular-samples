import { Component } from "@angular/core";
import { IgxPivotDateAggregate, IgxPivotNumericAggregate, IPivotConfiguration } from "igniteui-angular";
import { DATA_TO_ANALYZE } from "../../data/dataToAnalyze";


@Component({
    selector: 'app-pivot-datasource-sample',
    styleUrls: ['./pivot-datasource-sample.component.scss'],
    templateUrl: './pivot-datasource-sample.component.html'
})
export class PivotDatasourceSampleComponent {
    public data = DATA_TO_ANALYZE;
    public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [

            {
                memberName: 'Region',
                enabled: true
            }
        ],
        rows: [
            {

                memberName: 'Item',
                enabled: true
            }
        ],
        values: [
            {
                member: 'Units',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'Amount',
                    label: 'Total'
                },
                enabled: true

            },
            {
                member: 'Date',
                aggregate: {
                    aggregator: IgxPivotDateAggregate.latest,
                    key: 'As Of',
                    label: 'Latest'
                },
                enabled: true

            }
        ],
        filters: [
            {
                memberName: 'Rep',
                enabled: true
            }
        ]
    };
}

import { Component } from "@angular/core";
import { DATA } from '../../data/pivot-data';

import { IPivotConfiguration, IgxPivotNumericAggregate } from "igniteui-angular"

@Component({
  selector: 'app-pivot-datasource-sample',
  styleUrls: ['./pivot-datasource-sample.component.scss'],
  templateUrl: './pivot-datasource-sample.component.html'
})
export class PivotDatasourceSampleComponent {
    public data = DATA;
    public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {

                memberName: 'Product',
                memberFunction: (data) => data.Product.Name,
                enabled: true
            }
            
        ],
        rows: [
            {
                memberName: 'Seller',
                memberFunction: (data) => data.Seller.Name,
                enabled: true
            }
        ],
        values: [
            {
                member: 'NumberOfUnits',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true

            }
        ],
        filters: []
    };
}

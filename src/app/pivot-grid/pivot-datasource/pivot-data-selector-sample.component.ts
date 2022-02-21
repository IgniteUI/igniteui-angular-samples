import { Component } from "@angular/core";
import { GridColumnDataType, IgxPivotNumericAggregate, IPivotConfiguration } from "igniteui-angular";
import { SALES_DATA_NEW } from '../../data/salesDataNew';
@Component({
    selector: 'app-pivot-data-selector-sample',
    styleUrls: ['./pivot-data-selector-sample.component.scss'],
    templateUrl: './pivot-data-selector-sample.component.html'
})
export class PivotDataSelectorSampleComponent {
    public data = SALES_DATA_NEW;

    public pivotConfigHierarchy: IPivotConfiguration;

    constructor() {
        this.pivotConfigHierarchy = {
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
                    enabled: false,
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
                    memberName: 'Month',
                    memberFunction: (data) => data['Month Name'],
                    enabled: false
                }
            ]
        };
    }


}

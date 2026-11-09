import { Component } from "@angular/core";
import { GridColumnDataType } from 'igniteui-angular/core';
import { IPivotConfiguration, IgxPivotDateDimension, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxPivotDataSelectorComponent, IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { SALES_DATA_NEW } from '../../data/salesDataNew';
@Component({
    selector: 'app-pivot-data-selector-sample',
    styleUrls: ['./pivot-data-selector-sample.component.scss'],
    templateUrl: './pivot-data-selector-sample.component.html',
    imports: [IgxPivotGridComponent, IgxPivotDataSelectorComponent]
})
export class PivotDataSelectorSampleComponent {
    public data = SALES_DATA_NEW;
    public pivotConfigHierarchy: IPivotConfiguration;
    public dateDimension: IgxPivotDateDimension;

    constructor() {
        this.dateDimension = new IgxPivotDateDimension({
            memberName: 'Date',
            enabled: true
        }, {
            months: false,
            quarters: true,
            years: true
        });

        this.pivotConfigHierarchy = {
            columns: [

                {
                    memberName: 'Country',
                    enabled: true
                },
                {

                    memberName: 'Product',
                    enabled: true
                }
            ],
            rows: [
                this.dateDimension
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

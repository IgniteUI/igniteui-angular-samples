import { Component, ViewChild } from "@angular/core";

import {
    IPivotConfiguration, PivotAggregation, IgxPivotNumericAggregate,
    IgxPivotDateDimension, FilteringExpressionsTree, FilteringLogic, IgxStringFilteringOperand,
    PivotRowLayoutType,
    IPivotUISettings,
    IChangeCheckboxEventArgs,
    IgxPivotGridComponent,
    PivotSummaryPosition
} from "igniteui-angular"
import { SALES_DATA } from "../../data/dataToAnalyze";

export class IgxTotalSaleAggregate {
    public static totalSale: PivotAggregation = (members, data: any) =>
        data.reduce((accumulator, value) => accumulator + value.Product.UnitPrice * value.NumberOfUnits, 0);

    public static totalMin: PivotAggregation = (members, data: any) => {
        let min = 0;
        if (data.length === 1) {
            min = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    };

    public static totalMax: PivotAggregation = (members, data: any) => {
        let max = 0;
        if (data.length === 1) {
            max = data[0].Product.UnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.Product.UnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    };
}

@Component({
    selector: 'app-pivot-layout-sample',
    styleUrls: ['./pivot-layout.component.scss'],
    templateUrl: './pivot-layout.component.html'
})
export class PivotGridLayoutComponent {
    public data = SALES_DATA;
    public enableSummaries = true;
    public pivotUI: IPivotUISettings = { showRowHeaders: true, rowLayout: PivotRowLayoutType.Horizontal };

    @ViewChild("grid1")
    public grid1: IgxPivotGridComponent;

    public pivotConfig = this.buildPivotConfig();

    public buildPivotConfig(): IPivotConfiguration {
        return {
            columns: [
                new IgxPivotDateDimension(
                    {
                        memberName: 'Date',
                        enabled: true
                    },
                    {
                        months: false,
                        quarters: true,
                        fullDate: false
                    }
                )
            ],
            rows: [
                {
                    memberFunction: () => 'All Products',
                    memberName: 'AllProducts',
                    enabled: true,
                    horizontalSummary: this.enableSummaries,
                    width: "150px",
                    childLevel: {
                        memberFunction: (data) => data.Product.Name,
                        memberName: 'ProductCategory',
                        horizontalSummary: this.enableSummaries,
                        width: "150px",
                        enabled: true,
                        childLevel: {
                            memberName: 'City',
                            width: "150px",
                            memberFunction: (data) => data.Seller.City,
                            enabled: true
                        }
                    }
                }
            ],
            values: [
                {
                    member: 'Value',
                    aggregate: {
                        key: 'SUM',
                        aggregator: IgxPivotNumericAggregate.sum,
                        label: 'Sum'
                    },
                    aggregateList: [{
                        key: 'SUM',
                        aggregator: IgxPivotNumericAggregate.sum,
                        label: 'Sum'
                    }],
                    enabled: true,
                    styles: {
                        downFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150,
                        upFontValue: (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
                    },
                    formatter: (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined
                },
                {
                    member: 'AmountofSale',
                    displayName: 'Amount of Sale',
                    aggregate: {
                        key: 'SUM',
                        aggregator: IgxTotalSaleAggregate.totalSale,
                        label: 'Sum of Sale'
                    },
                    aggregateList: [{
                        key: 'SUM',
                        aggregator: IgxTotalSaleAggregate.totalSale,
                        label: 'Sum of Sale'
                    }, {
                        key: 'MIN',
                        aggregator: IgxTotalSaleAggregate.totalMin,
                        label: 'Minimum of Sale'
                    }, {
                        key: 'MAX',
                        aggregator: IgxTotalSaleAggregate.totalMax,
                        label: 'Maximum of Sale'
                    }],
                    enabled: true,
                    dataType: 'currency'
                }
            ],
            filters: [
                {
                    memberName: 'SellerName',
                    memberFunction: (data) => data.Seller.Name,
                    enabled: true
                }
            ]
        };
    }

    public onShowRowHeaders(event: IChangeCheckboxEventArgs) {
        this.pivotUI.showRowHeaders = event.checked;
        this.grid1.pivotUI = this.pivotUI;
    }

    public onLayoutToggle(event: IChangeCheckboxEventArgs) {
        this.pivotUI.rowLayout = event.checked ? PivotRowLayoutType.Horizontal : PivotRowLayoutType.Vertical;
        this.grid1.pivotUI = this.pivotUI;
    }

    public onSummariesToggle(event: IChangeCheckboxEventArgs) {
        this.enableSummaries = event.checked;
        this.grid1.pivotConfiguration = this.buildPivotConfig();
    }

    public onSummariesPositionToggle(event: IChangeCheckboxEventArgs) {
        this.pivotUI.horizontalSummariesPosition = event.checked ? PivotSummaryPosition.Top : PivotSummaryPosition.Bottom ;
        this.grid1.pivotUI = this.pivotUI;
    }
}

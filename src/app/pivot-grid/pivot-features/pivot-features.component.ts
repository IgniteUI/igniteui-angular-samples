import { Component } from "@angular/core";

import { IPivotConfiguration, PivotAggregation, IgxPivotNumericAggregate, IgxPivotDateDimension, IPivotDimension } from "igniteui-angular"
import { DATA_TO_ANALYZE, SALES_DATA } from "../../data/dataToAnalyze";

export class IgxTotalSaleAggregate {
    public static totalSale: PivotAggregation = (members, data: any) =>
        data.reduce((accumulator, value) => accumulator + value.UnitPrice * value.UnitsSold, 0);

    public static totalMin: PivotAggregation = (members, data: any) => {
        let min = 0;
        if (data.length === 1) {
            min = data[0].UnitPrice * data[0].UnitsSold;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.UnitPrice * x.UnitsSold);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    };

    public static totalMax: PivotAggregation = (members, data: any) => {
        let max = 0;
        if (data.length === 1) {
            max = data[0].UnitPrice * data[0].UnitsSold;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.UnitPrice * x.UnitsSold);
            max = mappedData.reduce((a, b) => Math.max(a,b));
        }
        return max;
    };
}

@Component({
    selector: 'app-pivot-features-sample',
    styleUrls: ['./pivot-features.component.scss'],
    templateUrl: './pivot-features.component.html'
})
export class PivotFeaturesComponent {
    // public data = DATA;
    public data = SALES_DATA;

    public dimensions: IPivotDimension[] = [
        {
            memberName: 'Country',
            enabled: true
        },
        new IgxPivotDateDimension(
            {
                memberName: 'Date',
                enabled: true,
                memberFunction: (data) => new Date(data.Date).toLocaleDateString()
            },
            {
                months: false
            }
        ),
        {
            memberFunction: () => 'All Products',
            memberName: 'AllProducts',
            enabled: true,
            width: '25%',
            childLevel: {
                memberFunction: (data) => data.Product.Name,
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
    ];


    public pivotConfig: IPivotConfiguration = {
        columns: [
            this.dimensions[1]
        ],
        rows: [
            this.dimensions[2],
            {
                memberName: 'City',
                memberFunction: (data) => data.Seller.City,
                enabled: true
            }
        ],
        values: [
            {
                member: 'Total Sales',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                },
                enabled: true,
                styles: {
                    upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 300,
                    downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 300
                },
                // dataType: 'currency',
                formatter: (value) => value ? value + '$' : undefined
            },
            {
                member: 'AmountOfSale',
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
                dataType: 'currency',
                styles: {
                    upFont1: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 50,
                    downFont1: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 50
                }
            }
        ],
        filters: [
            {
                memberName: 'Sales Teritorry City',
                memberFunction: (data) => data.Seller.City,
                enabled: true
                //filter: this.filterExpTree
            }
        ]
    };

    // public pivotConfigHierarchy: IPivotConfiguration = {
    //     columns: [
    //         {

    //             memberName: 'Product',
    //             memberFunction: (data) => data.Product.Name,
    //             enabled: true
    //         }

    //     ],
    //     rows: [
    //         {
    //             memberName: 'Seller',
    //             memberFunction: (data) => data.Seller.Name,
    //             enabled: true
    //         }
    //     ],
    //     values: [
    //         {
    //             member: 'NumberOfUnits',
    //             aggregate: {
    //                 aggregator: IgxPivotNumericAggregate.sum,
    //                 key: 'sum',
    //                 label: 'Sum'
    //             },
    //             enabled: true

    //         }
    //     ],
    //     filters: null
    // };
}

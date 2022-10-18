import { Component, ViewChild } from "@angular/core";

import {
    IPivotConfiguration, PivotAggregation, IgxPivotNumericAggregate, IgxPivotDateDimension,
    IgxExcelExporterService, IgxExcelExporterOptions, IgxPivotGridComponent
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
    selector: 'app-pivot-export-sample',
    styleUrls: ['./pivot-export.component.scss'],
    templateUrl: './pivot-export.component.html'
})
export class PivotExportComponent {
    @ViewChild(IgxPivotGridComponent, { static: true }) public grid: IgxPivotGridComponent;
    
    public data = SALES_DATA;

    public pivotConfig: IPivotConfiguration = {
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
                memberName: 'City',
                width: "150px",
                memberFunction: (data) => data.Seller.City,
                enabled: true
            },
            {
                memberFunction: () => 'All Products',
                memberName: 'AllProducts',
                enabled: true,
                width: "150px",
                childLevel: {
                    memberFunction: (data) => data.Product.Name,
                    memberName: 'ProductCategory',
                    enabled: true
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
        ]
    };

    constructor(private excelExportService: IgxExcelExporterService) {
    }

    public exportButtonHandler() {
        this.excelExportService.export(this.grid, new IgxExcelExporterOptions('ExportedDataFile'));
    }
}

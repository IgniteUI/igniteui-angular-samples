import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";

import {
    IPivotConfiguration, PivotAggregation, IgxPivotNumericAggregate,
    IgxPivotDateDimension, IgxGridStateDirective, IgxPivotGridComponent, IgxCheckboxComponent, GridFeatures, IGridStateOptions, IGridState, IPivotValue, IPivotDimension, IPivotAggregator, GridColumnDataType
} from "igniteui-angular"
import { take } from "rxjs/operators";
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
    selector: 'app-pivot-grid-state-persistence-sample',
    styleUrls: ['./pivot-grid-state-persistence-sample.component.scss'],
    templateUrl: './pivot-grid-state-persistence-sample.component.html',
    standalone: false
})
export class PivotGridStatePersistenceSampleComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild(IgxPivotGridComponent, { static: true }) public grid: IgxPivotGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    public data = SALES_DATA;
    public serialize = true;
    public stateKey = 'grid-state';

    public features: { key: GridFeatures; shortName: string }[] = [
        { key: 'cellSelection', shortName: 'Cell Sel' },
        { key: 'columnSelection', shortName: 'Cols Sel' },
        { key: 'expansion', shortName: 'Expansion' },
        { key: 'filtering', shortName: 'Filt' },
        { key: 'sorting', shortName: 'Sorting' },
        { key: 'pivotConfiguration', shortName: 'Pivot Configuration' }
    ];

    public options: IGridStateOptions = {
        cellSelection: true,
        filtering: true,
        sorting: true,
        expansion: true,
        columnSelection: true,
        pivotConfiguration: true
    };

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
                memberFunction: () => 'All Products',
                memberName: 'AllProducts',
                enabled: true,
                width: "150px",
                childLevel: {
                    memberFunction: (data) => data.Product.Name,
                    memberName: 'ProductCategory',
                    enabled: true
                }
            },
            {
                memberName: 'City',
                width: "150px",
                memberFunction: (data) => data.Seller.City,
                enabled: true
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
                dataType: GridColumnDataType.Number,
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
                dataType: GridColumnDataType.Currency
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

    constructor(private router: Router) { }

    public ngOnInit(): void {
        this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
            this.saveGridState();
        });
    }

    public ngAfterViewInit(): void {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
        if (typeof state === 'string') {
            window.sessionStorage.setItem(this.stateKey, state);
        } else {
            window.sessionStorage.setItem(this.stateKey, JSON.stringify(state));
        }
    }

    public restoreGridState() {
        const state = window.sessionStorage.getItem(this.stateKey);
        if (state) {
            this.state.setState(state);
        }
    }

    public restoreFeature(stateDirective: IgxGridStateDirective, feature: string) {
        const state = this.getFeatureState(this.stateKey, feature);
        if (state) {
            const featureState = {} as IGridState;
            featureState[feature] = state;
            stateDirective.setState(featureState);
        }
    }

    public getFeatureState(stateKey: string, feature: string) {
        let state = window.sessionStorage.getItem(stateKey);
        state = state ? JSON.parse(state)[feature] : null;
        return state;
    }

    public onChange(event: any, action: string) {
        if (action === 'toggleAll') {
            this.checkboxes.forEach(cb => {
                cb.checked = event.checked;
            });
            for (const key of Object.keys(this.options)) {
                this.state.options[key] = event.checked;
            }
            return;
        }
        this.state.options[action] = event.checked;
    }

    public clearStorage() {
        window.sessionStorage.removeItem(this.stateKey);
    }

    public reloadPage() {
        window.location.reload();
    }

    public onValueInit(value: IPivotValue) {
        // Needed only for custom aggregators, formatter or styles.
        if (value.member === 'AmountofSale') {
            value.aggregate.aggregator = IgxTotalSaleAggregate.totalSale;
            value.aggregateList?.forEach((aggr: IPivotAggregator) => {
                switch (aggr.key) {
                    case 'SUM':
                        aggr.aggregator = IgxTotalSaleAggregate.totalSale;
                        break;
                    case 'MIN':
                        aggr.aggregator = IgxTotalSaleAggregate.totalMin;
                        break;
                    case 'MAX':
                        aggr.aggregator = IgxTotalSaleAggregate.totalMax;
                        break;
                }
            });
        } else if (value.member === 'Value') {
            value.formatter = (value) => value ? '$' + parseFloat(value).toFixed(3) : undefined;
            value.styles.upFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150
            value.styles.downFontValue = (rowData: any, columnKey: any): boolean => parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
        }
    }

    public onDimensionInit(dim: IPivotDimension) {
        switch (dim.memberName) {
            case 'AllProducts':
                dim.memberFunction = () => 'All Products';
                break;
            case 'ProductCategory':
                dim.memberFunction = (data) => data.Product.Name;
                break;
            case 'City':
                dim.memberFunction = (data) => data.Seller.City;
                break;
            case 'SellerName':
                dim.memberFunction = (data) => data.Seller.Name;
                break;
        }
    }
}

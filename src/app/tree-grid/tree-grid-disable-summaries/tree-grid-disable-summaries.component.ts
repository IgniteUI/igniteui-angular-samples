import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit,
    ElementRef,
    QueryList,
    ViewChildren
} from "@angular/core";
import {
    IgxTreeGridComponent,
    IgxSummaryResult,
    IgxColumnComponent,
    IgxButtonDirective,
    IgxCheckboxComponent,
    IgxToggleDirective,
    HorizontalAlignment,
    VerticalAlignment,
    OverlaySettings,
    ConnectedPositioningStrategy
} from "igniteui-angular";
import { ORDERS_DATA } from "../data/orders";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";
import { NgFor, NgIf } from "@angular/common";

class UnitsSummary {
    public operate(
        data?: any[],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];

        const values = allData.map(rec => rec[fieldName]).filter(value => value !== undefined && value !== null);
        const totalSum = values.reduce((sum, value) => sum + value, 0);
        const sortedValues = values.slice().sort((a, b) => a - b);
        const deliveredValues = allData
            .filter(rec => rec["Delivered"])
            .map(rec => rec[fieldName])
            .filter(value => value !== undefined && value !== null);

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "min",
            label: "Min",
            summaryResult: values.length > 0 ? Math.min(...values) : "N/A"
        });

        result.push({
            key: "max",
            label: "Max",
            summaryResult: values.length > 0 ? Math.max(...values) : "N/A"
        });

        result.push({
            key: "sum",
            label: "Sum",
            summaryResult: totalSum
        });

        result.push({
            key: "average",
            label: "Average",
            summaryResult: values.length > 0 ? totalSum / values.length : "N/A"
        });

        result.push({
            key: "totalDelivered",
            label: "Total Units Delivered",
            summaryResult: deliveredValues.reduce((sum, value) => sum + value, 0)
        });

        result.push({
            key: "medianUnits",
            label: "Median Units",
            summaryResult: values.length > 0
                ? (() => {
                      const mid = Math.floor(sortedValues.length / 2);
                      return sortedValues.length % 2 !== 0
                          ? sortedValues[mid]
                          : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
                  })()
                : "N/A"
        });

        result.push({
            key: "uniqueCount",
            label: "Count of Unique Unit Values",
            summaryResult: values.length > 0 ? new Set(values).size : "N/A"
        });

        result.push({
            key: "maxDifference",
            label: "Max Difference Between Units",
            summaryResult: values.length > 1
                ? values.reduce((maxDiff, value, idx, arr) => {
                      if (idx === 0) return maxDiff;
                      const diff = Math.abs(value - arr[idx - 1]);
                      return Math.max(maxDiff, diff);
                  }, 0)
                : "N/A"
        });

        return result;
    }
}

class DeliveredSummary {
    public operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "true",
            label: "True",
            summaryResult: allData.filter(item => item[fieldName] === true).length
        });

        result.push({
            key: "false",
            label: "False",
            summaryResult: allData.filter(item => item[fieldName] === false).length
        });

        return result;
    }
}

@Component({
    selector: "app-tree-grid-summary-sample",
    styleUrls: ["./tree-grid-disable-summaries.component.scss"],
    templateUrl: "./tree-grid-disable-summaries.component.html",
    imports: [
        NgFor,
        NgIf,
        IgxTreeGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxButtonDirective,
        IgxCheckboxComponent,
        IgxToggleDirective
    ]
})
export class TreeGridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("treeGrid1", { read: IgxTreeGridComponent, static: true }) public treeGrid1: IgxTreeGridComponent;
    @ViewChildren(IgxToggleDirective) public toggles: QueryList<IgxToggleDirective>;
    @ViewChildren('toggleButton') public buttons: QueryList<ElementRef>;

    public data: any[];
    public togglesArray: any[];
    public buttonsArray: any[];

    public columns = [
        {
            label: 'Order ID',
            field: 'ID',
            summaries: []
        },
        {
            label: 'Order Product',
            field: 'Name',
            summaries: []
        },
        {
            label: 'Units',
            field: 'Units',
            summaries: []
        },
        {
            label: 'Unit Price',
            field: 'UnitPrice',
            summaries: []
        },
        {
            label: 'Price',
            field: 'Price',
            summaries: []
        },
        {
            label: 'Delivered',
            field: 'Delivered',
            summaries: []
        },
        {
            label: 'Order Date',
            field: 'OrderDate',
            summaries: []
        }
    ];

    public unitsSummary = UnitsSummary;
    public deliveredSummary = DeliveredSummary;

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom,
        horizontalDirection: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom
    };

    private _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    constructor() {}

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit(): void {
        this.togglesArray = this.toggles.toArray();
        this.buttonsArray = this.buttons.toArray();

        this.columns.forEach((column, index) => {
            column.summaries = this.getSummaries(column.field)
        });
    }

    public getCheckedSummariesCount(summaries: any[]): number {
        return summaries.filter(summary => summary.checked).length;
    }

    public toggle(index: number): void {
        this._overlaySettings.target = this.buttonsArray[index].nativeElement;
        this.togglesArray[index].toggle(this._overlaySettings);
    }

    public toggleCheckbox(event: any, index: number, column: any): void {
        column.summaries[index].checked = event.checked;
        if (event.checked) {
            this.treeGrid1.getColumnByName(column.field).disabledSummaries = [
                ...this.treeGrid1.getColumnByName(column.field).disabledSummaries,
                column.summaries[index].summaryKey
            ];
        } else {
            this.treeGrid1.getColumnByName(column.field).disabledSummaries = this.treeGrid1.getColumnByName(column.field).disabledSummaries.filter(
                (key: string) => key !== column.summaries[index].summaryKey
            );
        }
    }

    public uncheckAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = false));
        this.treeGrid1.getColumnByName(column.field).disabledSummaries = [];
    }

    public checkAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = true));
        this.treeGrid1.getColumnByName(column.field).disabledSummaries = column.summaries.map(summary => summary.summaryKey);
    }

    private getSummaries(columnName: string): any[] {
        console.log(columnName)
        return this.treeGrid1
            .getColumnByName(columnName)
            .summaries.operate(
                this.treeGrid1.data.map((record) => record.ProductID)
            )
            .map((summary) => ({
                summaryKey: summary.key,
                summaryLabel: summary.label,
                checked: false
            }));
    }
}

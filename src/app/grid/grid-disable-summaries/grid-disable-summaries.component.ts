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
    IgxGridComponent,
    IgxNumberSummaryOperand,
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
import { DATA } from "../../data/nwindData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";


class UnitsInStockSummary {
    public operate(
        data: any[] = [],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];
        const values = allData
            .map((item) => item[fieldName] ?? 0)
            .filter((value) => value !== 0);
        const discontinuedItems = allData.filter(
            (item) => item["Discontinued"]
        );
        const discontinuedValues = discontinuedItems
            .map((item) => item[fieldName] ?? 0)
            .filter((value) => value !== 0);

        result.push({
            key: "count",
            label: "Count",
            summaryResult: values.length
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
            summaryResult: IgxNumberSummaryOperand.sum(values)
        });

        result.push({
            key: "average",
            label: "Average",
            summaryResult:
                values.length > 0
                    ? IgxNumberSummaryOperand.sum(values) / values.length
                    : "N/A"
        });

        result.push({
            key: "median",
            label: "Median",
            summaryResult:
                values.length > 0
                    ? (() => {
                          const sortedValues = values
                              .slice()
                              .sort((a, b) => a - b);
                          return sortedValues.length % 2 === 0
                              ? (sortedValues[sortedValues.length / 2 - 1] +
                                    sortedValues[sortedValues.length / 2]) /
                                    2
                              : sortedValues[
                                    Math.floor(sortedValues.length / 2)
                                ];
                      })()
                    : "N/A"
        });

        result.push({
            key: "range",
            label: "Range",
            summaryResult:
                values.length > 0
                    ? Math.max(...values) - Math.min(...values)
                    : "N/A"
        });

        result.push({
            key: "discontinued",
            label: "Discontinued Products",
            summaryResult: discontinuedItems.length
        });

        result.push({
            key: "totalDiscontinued",
            label: "Total Discontinued Items",
            summaryResult: IgxNumberSummaryOperand.sum(discontinuedValues)
        });

        return result;
    }
}

class DiscontinuedSummary {
    public operate(
        data: any[] = [],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "true",
            label: "True",
            summaryResult: allData.filter((item) => item[fieldName] === true)
                .length
        });

        result.push({
            key: "false",
            label: "False",
            summaryResult: allData.filter((item) => item[fieldName] === false)
                .length
        });

        return result;
    }
}

@Component({
    selector: "app-grid-summary-sample",
    styleUrls: ["./grid-disable-summaries.component.scss"],
    templateUrl: "grid-disable-summaries.component.html",
    imports: [
    IgxGridComponent,
    IgxPreventDocumentScrollDirective,
    IgxColumnComponent,
    IgxButtonDirective,
    IgxCheckboxComponent,
    IgxToggleDirective
]
})
export class GridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChildren(IgxToggleDirective) public toggles: QueryList<IgxToggleDirective>;
    @ViewChildren('toggleButton') public buttons: QueryList<ElementRef>;

    public data: any[];
    public togglesArray: any[];
    public buttonsArray: any[];

    public columns = [
        {
            label: 'Product ID',
            field: 'ProductID',
            summaries: []
        },
        {
            label: 'Product Name',
            field: 'ProductName',
            summaries: []
        },
        {
            label: 'Unit Price',
            field: 'UnitPrice',
            summaries: []
        },
        {
            label: 'Units In Stock',
            field: 'UnitsInStock',
            summaries: []
        },
        {
            label: 'Discontinued',
            field: 'Discontinued',
            summaries: []
        },
        {
            label: 'Order Date',
            field: 'OrderDate',
            summaries: []
        }
    ];

    public unitsInStockSummary = UnitsInStockSummary;
    public discontinuedSummary = DiscontinuedSummary;

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom,
        horizontalDirection: HorizontalAlignment.Right,
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
        this.data = DATA;
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
            this.grid1.getColumnByName(column.field).disabledSummaries = [
                ...this.grid1.getColumnByName(column.field).disabledSummaries,
                column.summaries[index].summaryKey
            ];
        } else {
            this.grid1.getColumnByName(column.field).disabledSummaries = this.grid1.getColumnByName(column.field).disabledSummaries.filter(
                (key: string) => key !== column.summaries[index].summaryKey
            );
        }
    }

    public uncheckAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = false));
        this.grid1.getColumnByName(column.field).disabledSummaries = [];
    }

    public checkAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = true));
        this.grid1.getColumnByName(column.field).disabledSummaries = column.summaries.map(summary => summary.summaryKey);
    }

    private getSummaries(columnName: string): any[] {
        return this.grid1
            .getColumnByName(columnName)
            .summaries.operate(
                this.grid1.data.map((record) => record.ProductID)
            )
            .map((summary) => ({
                summaryKey: summary.key,
                summaryLabel: summary.label,
                checked: false
            }));
    }
}

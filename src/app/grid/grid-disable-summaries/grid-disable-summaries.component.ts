import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit
} from "@angular/core";
import {
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult,
    IgxColumnComponent,
    IgxButtonGroupComponent
} from "igniteui-angular";
import { DATA } from "../../data/nwindData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

class DiscontinuedSummary {
    public operate(
        data?: any[],
        allData = [],
        fieldName = ""
    ): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "products",
            label: "Products",
            summaryResult: data.length
        });

        result.push({
            key: "total",
            label: "Total Items",
            summaryResult: IgxNumberSummaryOperand.sum(data)
        });

        result.push({
            key: "discontinued",
            label: "Discontinued Products",
            summaryResult: allData
                .map((r) => r["Discontinued"])
                .filter((rec) => rec).length
        });

        result.push({
            key: "totalDiscontinued",
            label: "Total Discontinued Items",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData
                    .filter((rec) => rec["Discontinued"])
                    .map((r) => r[fieldName])
            )
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
        IgxButtonGroupComponent
    ]
})
export class GridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    public data: any[];
    public defaultSummaries: any[];
    public customSummaries: any[];

    public discontinuedSummary = DiscontinuedSummary;

    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }

    public ngAfterViewInit(): void {
        this.defaultSummaries = [
            {
                label: 'Count',
                selected: this.grid1.getColumnByName('UnitPrice').disabledSummaries.includes('count'),
                togglable: true,
                value: 'count'
            },
            {
                label: 'Min',
                selected: this.grid1.getColumnByName('UnitPrice').disabledSummaries.includes('min'),
                togglable: true,
                value: 'min'
            },
            {
                label: 'Max',
                selected: this.grid1.getColumnByName('UnitPrice').disabledSummaries.includes('max'),
                togglable: true,
                value: 'max'
            },
            {
                label: 'Sum',
                selected: this.grid1.getColumnByName('UnitPrice').disabledSummaries.includes('sum'),
                togglable: true,
                value: 'sum'
            },
            {
                label: 'Average',
                selected: this.grid1.getColumnByName('UnitPrice').disabledSummaries.includes('average'),
                togglable: true,
                value: 'average'
            }
        ];

        this.customSummaries = [
            {
                label: 'Products',
                selected: this.grid1.getColumnByName('UnitsInStock').disabledSummaries.includes('products'),
                togglable: true,
                value: 'products'
            },
            {
                label: 'Total Items',
                selected: this.grid1.getColumnByName('UnitsInStock').disabledSummaries.includes('total'),
                togglable: true,
                value: 'total'
            },
            {
                label: 'Discontinued Products',
                selected: this.grid1.getColumnByName('UnitsInStock').disabledSummaries.includes('discontinued'),
                togglable: true,
                value: 'discontinued'
            },
            {
                label: 'Total Discontinued Items',
                selected: this.grid1.getColumnByName('UnitsInStock').disabledSummaries.includes('totalDiscontinued'),
                togglable: true,
                value: 'totalDiscontinued'
            }
        ];
    }

    public disableDefaultSummary(event) {
        const selectedValue = this.defaultSummaries[event.index].value;
        const column = this.grid1.getColumnByName('UnitPrice');

        if (!column.disabledSummaries.includes(selectedValue)) {
            column.disabledSummaries = [...column.disabledSummaries, selectedValue];
        }
    }

    public enableDefaultSummary(event) {
        const selectedValue = this.defaultSummaries[event.index].value;
        const column = this.grid1.getColumnByName('UnitPrice');

        column.disabledSummaries = column.disabledSummaries.filter(
            (summary) => summary !== selectedValue
        );
    }

    public disableCustomSummary(event) {
        const selectedValue = this.customSummaries[event.index].value;
        const column = this.grid1.getColumnByName('UnitsInStock');

        if (!column.disabledSummaries.includes(selectedValue)) {
            column.disabledSummaries = [...column.disabledSummaries, selectedValue];
        }
    }

    public enableCustomSummary(event) {
        const selectedValue = this.customSummaries[event.index].value;
        const column = this.grid1.getColumnByName('UnitsInStock');

        column.disabledSummaries = column.disabledSummaries.filter(
            (summary) => summary !== selectedValue
        );
    }
}

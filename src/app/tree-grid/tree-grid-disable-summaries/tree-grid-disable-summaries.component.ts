import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit
} from "@angular/core";
import {
    IgxTreeGridComponent,
    IgxColumnComponent,
    IgxSummaryResult,
    IgxButtonGroupComponent
} from "igniteui-angular";
import { ORDERS_DATA } from "../data/orders";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

class UnitsSummary {
    public operate(
        data?: any[],
        allData = [],
        fieldName = ""
    ): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "totalDelivered",
            label: "Total Units Delivered",
            summaryResult: allData
                .filter((rec) => rec["Delivered"])
                .reduce((sum, rec) => sum + rec[fieldName], 0)
        });

        result.push({
            key: "totalNotDelivered",
            label: "Total Units Not Delivered",
            summaryResult: allData
                .filter((rec) => !rec["Delivered"])
                .reduce((sum, rec) => sum + rec[fieldName], 0)
        });

        result.push({
            key: "averageUnits",
            label: "Average Units per Order",
            summaryResult: allData.length
                ? allData.reduce((sum, rec) => sum + rec[fieldName], 0) /
                  allData.length
                : 0
        });

        result.push({
            key: "maxUnits",
            label: "Highest Units",
            summaryResult: allData.reduce(
                (max, rec) => Math.max(max, rec[fieldName]),
                Number.MIN_VALUE
            )
        });

        return result;
    }
}

@Component({
    selector: "app-tree-grid-summary-sample",
    styleUrls: ["./tree-grid-disable-summaries.component.scss"],
    templateUrl: "./tree-grid-disable-summaries.component.html",
    imports: [
        IgxTreeGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxButtonGroupComponent
    ]
})
export class TreeGridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("treegrid1", { read: IgxTreeGridComponent, static: true })
    public treeGrid1: IgxTreeGridComponent;

    public data: any[];
    public defaultSummaries: any[];
    public customSummaries: any[];

    public unitsSummary = UnitsSummary;

    constructor() {}

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public ngAfterViewInit(): void {
        this.defaultSummaries = [
            {
                label: 'Count',
                selected: this.treeGrid1.getColumnByName('UnitPrice').disabledSummaries.includes('count'),
                togglable: true,
                value: 'count'
            },
            {
                label: 'Min',
                selected: this.treeGrid1.getColumnByName('UnitPrice').disabledSummaries.includes('min'),
                togglable: true,
                value: 'min'
            },
            {
                label: 'Max',
                selected: this.treeGrid1.getColumnByName('UnitPrice').disabledSummaries.includes('max'),
                togglable: true,
                value: 'max'
            },
            {
                label: 'Sum',
                selected: this.treeGrid1.getColumnByName('UnitPrice').disabledSummaries.includes('sum'),
                togglable: true,
                value: 'sum'
            },
            {
                label: 'Average',
                selected: this.treeGrid1.getColumnByName('UnitPrice').disabledSummaries.includes('average'),
                togglable: true,
                value: 'average'
            }
        ];

        this.customSummaries = [
            {
                label: 'Total Units Delivered',
                selected: this.treeGrid1.getColumnByName('Units').disabledSummaries.includes('totalDelivered'),
                togglable: true,
                value: 'totalDelivered'
            },
            {
                label: 'Total Units Not Delivered',
                selected: this.treeGrid1.getColumnByName('Units').disabledSummaries.includes('totalNotDelivered'),
                togglable: true,
                value: 'totalNotDelivered'
            },
            {
                label: 'Average Units per Order',
                selected: this.treeGrid1.getColumnByName('Units').disabledSummaries.includes('averageUnits'),
                togglable: true,
                value: 'averageUnits'
            },
            {
                label: 'Highest Units',
                selected: this.treeGrid1.getColumnByName('Units').disabledSummaries.includes('maxUnits'),
                togglable: true,
                value: 'maxUnits'
            }
        ];
    }

    public disableDefaultSummary(event) {
        const selectedValue = this.defaultSummaries[event.index].value;
        const column = this.treeGrid1.getColumnByName('UnitPrice');

        if (!column.disabledSummaries.includes(selectedValue)) {
            column.disabledSummaries = [...column.disabledSummaries, selectedValue];
        }
    }

    public enableDefaultSummary(event) {
        const selectedValue = this.defaultSummaries[event.index].value;
        const column = this.treeGrid1.getColumnByName('UnitPrice');

        column.disabledSummaries = column.disabledSummaries.filter(
            (summary) => summary !== selectedValue
        );
    }

    public disableCustomSummary(event) {
        const selectedValue = this.customSummaries[event.index].value;
        const column = this.treeGrid1.getColumnByName('Units');

        if (!column.disabledSummaries.includes(selectedValue)) {
            column.disabledSummaries = [...column.disabledSummaries, selectedValue];
        }
    }

    public enableCustomSummary(event) {
        const selectedValue = this.customSummaries[event.index].value;
        const column = this.treeGrid1.getColumnByName('Units');

        column.disabledSummaries = column.disabledSummaries.filter(
            (summary) => summary !== selectedValue
        );
    }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxTreeGridComponent,
    IgxColumnComponent,
    IgxButtonDirective,
    IgxSummaryResult
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
        IgxButtonDirective
    ]
})
export class TreeGridDisableSummariesComponent implements OnInit {
    @ViewChild("treegrid1", { read: IgxTreeGridComponent, static: true })
    public treeGrid1: IgxTreeGridComponent;

    public data;

    public unitsSummary = UnitsSummary;

    constructor() {}

    public ngOnInit(): void {
        this.data = ORDERS_DATA;
    }

    public disableDefaultSummaries() {
        this.treeGrid1.getColumnByName("UnitPrice").disabledSummaries = ["min", "max"];
    }

    public disableCustomSummaries() {
        this.treeGrid1.getColumnByName("Units").disabledSummaries = ["averageUnits", "maxUnits"];
    }
}

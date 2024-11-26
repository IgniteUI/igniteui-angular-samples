import {
    Component,
    ViewChild,
    OnInit
} from "@angular/core";
import {
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult,
    IgxColumnComponent,
    IgxButtonDirective
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
        IgxPreventDocumentScrollDirective,
        IgxGridComponent,
        IgxColumnComponent,
        IgxButtonDirective
    ]
})
export class GridDisableSummariesComponent implements OnInit{
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    public data: any[];

    public discontinuedSummary = DiscontinuedSummary;

    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }

    public disableDefaultSummaries() {
        this.grid1.getColumnByName('UnitPrice').disabledSummaries = ['min', 'max'];
    }

    public disableCustomSummaries() {
        this.grid1.getColumnByName('UnitsInStock').disabledSummaries = ['products', 'discontinued'];
    }
}

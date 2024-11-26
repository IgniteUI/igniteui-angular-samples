import { Component, ViewChild, OnInit } from "@angular/core";
import {
    IgxButtonDirective,
    IgxCellTemplateDirective,
    IgxColumnComponent,
    IgxHierarchicalGridComponent,
    IgxNumberSummaryOperand,
    IgxRowIslandComponent,
    IgxSummaryResult
} from "igniteui-angular";
import { SINGERS } from "../../data/singersData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

class GrammySummary {
    public operate(
        data?: any[],
        allData = [],
        fieldName = ""
    ): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: "nominatedSingers",
            label: "Nominated Singers",
            summaryResult: allData.filter((rec) => rec["GrammyNominations"] > 0)
                .length
        });
        result.push({
            key: "singersWithAwards",
            label: "Singers with Awards",
            summaryResult: allData.filter((rec) => rec["GrammyAwards"] > 0)
                .length
        });
        result.push({
            key: "nominations",
            label: "Total Nominations",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData.map((r) => r["GrammyNominations"])
            )
        });
        result.push({
            key: "awards",
            label: "Total Awards",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData.map((r) => r["GrammyAwards"])
            )
        });
        return result;
    }
}

@Component({
    selector: "app-hierarchical-grid-summary",
    styleUrls: ["./hierarchical-grid-disable-summaries.component.scss"],
    templateUrl: "hierarchical-grid-disable-summaries.component.html",
    imports: [
        IgxHierarchicalGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxRowIslandComponent,
        IgxButtonDirective
    ]
})
export class HierarchicalGridDisableSummariesComponent implements OnInit {
    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public data;

    public grammySummary = GrammySummary;

    constructor() {}

    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public disableDefaultSummaries() {
        this.hierarchicalGrid.getColumnByName("GrammyNominations").disabledSummaries = ["min", "max"];
    }

    public disableCustomSummaries() {
        this.hierarchicalGrid.getColumnByName("Photo").disabledSummaries = ["nominatedSingers", "nominations"];
    }

    public formatter = (a) => a;
}

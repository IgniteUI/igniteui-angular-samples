import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxNumberSummaryOperand,
    IgxSummaryResult } from "igniteui-angular";
import { SINGERS } from "../data";

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: "min",
            label: "Min",
            summaryResult: IgxNumberSummaryOperand.min(data)
        },
        {
            key: "max",
            label: "Max",
            summaryResult: IgxNumberSummaryOperand.max(data)
        },
        {
          key: "avg",
          label: "Avg",
          summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    }
}
class MyChildSummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: "count",
            label: "Count",
            summaryResult: IgxNumberSummaryOperand.count(data)
        });
        return result;
    }
}

@Component({
    selector: "hierarchical-grid-summary",
    styleUrls: ["./hierarchical-grid-summary.component.scss"],
    templateUrl: "hierarchical-grid-summary.component.html"
})

export class HGridSummarySampleComponent implements OnInit {
    public localdata;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public formatter = (a) => a;
}

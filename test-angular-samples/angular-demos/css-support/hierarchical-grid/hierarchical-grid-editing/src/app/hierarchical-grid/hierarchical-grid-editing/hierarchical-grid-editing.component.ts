import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxDialogComponent, IgxHierarchicalGridComponent,
    IgxNumberSummaryOperand, IgxSummaryResult
} from "igniteui-angular";
import { SINGERS } from "../data";
import { Singer } from "../models";

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
@Component({
    selector: "hierarchical-grid-editing",
    styleUrls: ["./hierarchical-grid-editing.component.css"],
    templateUrl: "hierarchical-grid-editing.component.html"
})

export class HGridEditingSampleComponent implements OnInit {
    public localdata;
    public singer: Singer;
    public mySummary = MySummary;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild("dialogAdd", { read: IgxDialogComponent, static: true })
    private dialog: IgxDialogComponent;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = {
            Artist: "Mock Jagger",
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public formatter = (a) => a;

    public addRow() {
        this.hierarchicalGrid.addRow(this.singer);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.singer = {
            Artist: "Mock Jagger",
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

}

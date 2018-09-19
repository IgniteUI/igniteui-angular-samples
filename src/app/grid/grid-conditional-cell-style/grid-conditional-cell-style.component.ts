import { Component, OnInit } from "@angular/core";
import { athletesData } from "../services/data";

@Component({
    selector: "app-grid-conditional-cell-style",
    styleUrls: ["./grid-conditional-cell-style.component.scss"],
    templateUrl: "./grid-conditional-cell-style.component.html"
})
export class GridConditionalCellStyleComponent implements OnInit {
    public data: any[];

    public upFontCondition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] > 95;
    }

    public downFontCondition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] <= 95;
    }

    public top100Condition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] <= 100;
    }

    public belowTop100Condition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] > 100;
    }

    public speedCondition = (rowData: any, columnKey: any): boolean => {
        return rowData[columnKey] < 5;
    }

    public beatsPerMinuteClasses = {
        "upFont": this.upFontCondition,
        "downFont": this.downFontCondition
    };

    public rankClasses = {
        "top100": this.top100Condition,
        "belowTop100": this.belowTop100Condition
    };

    public speedClasses = {
        "topSpeed topSpeedFont": this.speedCondition
    }

    public ngOnInit() {
        this.data = athletesData;
    }
}

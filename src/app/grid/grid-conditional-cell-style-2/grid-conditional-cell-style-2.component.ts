import { Component, OnInit } from "@angular/core";
import { athletesData } from "../services/data";

@Component({
    selector: "app-grid-conditional-cell-style-2",
    styleUrls: ["./grid-conditional-cell-style-2.component.scss"],
    templateUrl: "./grid-conditional-cell-style-2.component.html"
})
export class GridConditionalCellStyle2Component implements OnInit {
    public data: any[];
    public styles = {
        "background": "linear-gradient(180deg, #dd4c4c 0%, firebrick 100%)",
        "color": (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "red" : "green",
        "text-shadow": "1px 1px 2px rgba(25,25,25,.25)",
        "animation": "0.25s ease-in-out forwards alternate popin"
    };

    public ngOnInit() {
        this.data = athletesData;
    }

    private evenRow = (rowData: any, columnKey: any, cellValue: any, rowIndex: number): boolean => {
        return rowIndex % 2 === 0;
    }
}

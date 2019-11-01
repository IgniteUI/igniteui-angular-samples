import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
    selector: "app-grid-conditional-cell-style-2",
    styleUrls: ["./tree-grid-conditional-cell-style-2.component.scss"],
    templateUrl: "./tree-grid-conditional-cell-style-2.component.html"
})
export class TreeGridConditionalCellStyle2Component implements OnInit {
    public data: any[];
    public columns: any[];
    @ViewChild("grid1", { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;

    public oddColStyles = {
        background: "linear-gradient(to right, #b993d6, #8ca6db)",
        color: "white",
        // "color": (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "red" : "green",
        animation: "0.75s popin"
    };

    public evenColStyles = {
        background: "linear-gradient(to right, #8ca6db, #b993d6)",
        color: "white",
        // "color": (rowData, coljey, cellValue, rowIndex) => rowIndex % 2 === 0 ? "red" : "green",
        animation: "0.75s popin"
    };

    public ngOnInit() {
        this.data = FOODS_DATA();
        this.columns = [
            { field: "ID" },
            { field: "Name" },
            { field: "UnitPrice" },
            { field: "AddedDate" }
        ];

        this.applyCSS();
    }
    public applyCSS() {
        this.columns.forEach((column, index) => {
            column.cellStyles = (index % 2 === 0 ? this.oddColStyles : this.evenColStyles);
        });
    }

    public updateCSS(css: string) {
        this.oddColStyles = {...this.oddColStyles, ...JSON.parse(css)};
        this.evenColStyles = {...this.oddColStyles, ...JSON.parse(css)};
        this.applyCSS();
    }
}

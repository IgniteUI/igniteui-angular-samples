import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnDisplayOrder, IgxColumnHidingComponent } from "igniteui-angular/grid/column-hiding.component";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { DATA } from "./data";

@Component({
    selector: "grid-column-hiding-sample",
    styleUrls: ["./grid-column-hiding-sample.component.scss"],
    templateUrl: "./grid-column-hiding-sample.component.html"
})
export class GridColumnHidingSampleComponent implements OnInit {

    public data: any[];
    public columnsOrder = ColumnDisplayOrder;

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }

    public initColumns(column: IgxColumnComponent) {
        column.filterable = true;
        column.sortable = true;
    }
}

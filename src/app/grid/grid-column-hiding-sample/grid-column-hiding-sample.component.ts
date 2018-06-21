import { Component, OnInit } from "@angular/core";
import { ColumnDisplayOrder } from "igniteui-angular";
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
}

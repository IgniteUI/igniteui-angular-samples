import { Component, OnInit } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular";
import { DATA } from "./data";

@Component({
    selector: "app-grid-column-hiding-toolbar-sample",
    styleUrls: ["./grid-column-hiding-toolbar-sample.component.scss"],
    templateUrl: "./grid-column-hiding-toolbar-sample.component.html"
})
export class GridColumnHidingToolbarSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }

    public initColumns(column: IgxColumnComponent) {
        column.filterable = true;
        column.sortable = true;
    }
}

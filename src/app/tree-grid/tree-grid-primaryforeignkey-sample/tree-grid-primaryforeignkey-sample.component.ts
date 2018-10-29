import { Component, OnInit } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular";
import { Data } from "./data";

@Component({
    selector: "app-tree-grid-primaryforeignkey-sample",
    styleUrls: ["./tree-grid-primaryforeignkey-sample.component.scss"],
    templateUrl: "./tree-grid-primaryforeignkey-sample.component.html"
})
export class TreeGridPrimaryforeignkeySampleComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = Data.employeePrimaryForeignKeyTreeData();
    }

    public initColumns(column: IgxColumnComponent) {
        column.filterable = true;
        column.sortable = true;
        column.editable = true;
        column.movable = true;
        column.resizable = true;
    }

}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FLAT_DATA } from "./data";

@Component({
    providers: [],
    selector: "app-tree-grid-row-editing-sample.component",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid1") public treeGrid1: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;

        this.columns = [
            // tslint:disable:max-line-length
            { field: "EmployeID", label: "ID", resizable: true, movable: true, sortable: true, filterable: true, editable: false, dataType: "number" },
            { field: "FirstName", label: "First Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "LastName", label: "Last Name", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "string" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" }
        ];
    }

    public rowEditDone(evt) {
        console.log("Row edit done:\n", evt);
    }

    public rowEditCancel(evt) {
        console.log("Row edit cancel:\n", evt);
    }
}

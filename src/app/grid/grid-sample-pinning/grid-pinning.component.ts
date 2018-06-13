import { Component, Injectable, ViewChild, ViewEncapsulation } from "@angular/core";
import { Http } from "@angular/http";
import { DataType } from "igniteui-angular";
import { IgxButtonDirective } from "igniteui-angular";
import { IgxColumnComponent } from "igniteui-angular";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "./data";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: "grid-sample",
    styleUrls: ["grid-pinning.component.scss"],
    templateUrl: "grid-pinning.component.html"

})

export class PinningSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;

    public data: any[];
    public columns: any[];
    public ngOnInit(): void {
        this.columns = [
            { field: "ID", header: "ID", width: 100, hidden: true },
            { field: "CompanyName", header: "Company Name", width: 300 },
            { field: "ContactName", header: "Contact Name", width: 200, pinned: true },
            { field: "ContactTitle", header: "Contact Title", width: 200, pinned: true },
            { field: "Address", header: "Address", width: 300 },
            { field: "City", header: "City", width: 120 },
            { field: "Region", header: "Region", width: 120 },
            { field: "PostalCode", header: "Postal Code", width: 150 },
            { field: "Phone", header: "Phone", width: 150 },
            { field: "Fax", header: "Fax", width: 150 }
        ];
        this.data = DATA;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}

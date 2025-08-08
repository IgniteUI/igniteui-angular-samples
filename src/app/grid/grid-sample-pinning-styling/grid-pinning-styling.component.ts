import { Component, ViewChild, OnInit, inject } from "@angular/core";
import {
    IgxColumnComponent,
    IgxGridComponent,
    IgxCellHeaderTemplateDirective,
    IgxIconComponent,
    IgxIconService,
} from "igniteui-angular";
import { DATA } from "../../data/customers";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

@Component({
    selector: "app-grid-sample",
    styleUrls: ["grid-pinning-styling.component.scss"],
    templateUrl: "grid-pinning-styling.component.html",
    imports: [
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxCellHeaderTemplateDirective,
        IgxIconComponent,
    ],
})
export class PinningStylingComponent implements OnInit {
    private iconService = inject(IgxIconService);
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    constructor() {
        this.iconService.setFamily("fas", {
            className: "fas",
            type: "font",
            prefix: "fa-",
        });
    }

    public data: any[];
    public columns: any[];
    public ngOnInit(): void {
        this.columns = [
            { field: "ID", header: "ID", width: 100, hidden: true },
            { field: "CompanyName", header: "Company Name", width: 300 },
            {
                field: "ContactName",
                header: "Contact Name",
                width: 200,
                pinned: true,
            },
            {
                field: "ContactTitle",
                header: "Contact Title",
                width: 200,
                pinned: true,
            },
            { field: "Address", header: "Address", width: 300 },
            { field: "City", header: "City", width: 120 },
            { field: "Region", header: "Region", width: 120 },
            { field: "PostalCode", header: "Postal Code", width: 150 },
            { field: "Phone", header: "Phone", width: 150 },
            { field: "Fax", header: "Fax", width: 150 },
        ];
        this.data = DATA;
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}

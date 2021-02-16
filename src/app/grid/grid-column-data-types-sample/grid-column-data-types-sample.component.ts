import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-column-data-types-sample",
    styleUrls: ["./grid-column-data-types-sample.component.scss"],
    templateUrl: "grid-column-data-types-sample.component.html"
})
export class GridColumnDataTypesSampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatCurrency(val: string) {
        return "$" + parseInt(val, 10).toFixed(2);
    }
}
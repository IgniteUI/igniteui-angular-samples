import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-external-excel-style-filtering",
    templateUrl: "./grid-external-excel-style-filtering.component.html",
    styleUrls: ["./grid-external-excel-style-filtering.component.scss"]
})
export class GridExternalExcelStyleFilteringComponent {

    public data: any;

    constructor() {
        this.data = DATA;
    }
}

import { Component } from "@angular/core";
import { FOODS_DATA } from "../data/foods";

@Component({
    selector: "tree-grid-external-excel-style-filtering",
    templateUrl: "./tree-grid-external-excel-style-filtering.component.html",
    styleUrls: ["./tree-grid-external-excel-style-filtering.component.scss"]
})
export class TreeGridExternalExcelStyleFilteringComponent {

    public data: any;
    constructor() {
        this.data = FOODS_DATA();
    }
}

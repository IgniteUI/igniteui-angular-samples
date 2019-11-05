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
    
    public formatDate(val) {
        if (val !== "Select All") {
            return new Intl.DateTimeFormat("en-US").format(val);
        } else {
            return val;
        }
    }
}

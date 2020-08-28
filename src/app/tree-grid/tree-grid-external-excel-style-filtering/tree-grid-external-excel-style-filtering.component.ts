import { Component, ViewChild, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { FOODS_DATA } from "../data/foods";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "tree-grid-external-excel-style-filtering",
    templateUrl: "./tree-grid-external-excel-style-filtering.component.html",
    styleUrls: ["./tree-grid-external-excel-style-filtering.component.scss"]
})
export class TreeGridExternalExcelStyleFilteringComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = FOODS_DATA();
    }
}

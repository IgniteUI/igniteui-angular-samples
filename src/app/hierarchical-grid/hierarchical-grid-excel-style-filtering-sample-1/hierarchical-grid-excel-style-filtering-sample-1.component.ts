import { Component, OnInit } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-excel-style-filtering-sample-1",
    styleUrls: ["./hierarchical-grid-excel-style-filtering-sample-1.component.scss"],
    templateUrl: "hierarchical-grid-excel-style-filtering-sample-1.component.html"
})

export class HGridExcelStyleFilteringSample1Component implements OnInit {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}

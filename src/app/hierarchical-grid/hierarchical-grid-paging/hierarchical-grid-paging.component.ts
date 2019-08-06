import { Component } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-paging",
    styleUrls: ["./hierarchical-grid-paging.component.scss"],
    templateUrl: "hierarchical-grid-paging.component.html"
})

export class HGridPagingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

import { Component } from "@angular/core";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

@Component({
    selector: "app-tree-grid-resize-line-styling-sample",
    styleUrls: ["./tree-grid-resize-line-styling-sample.component.scss"],
    templateUrl: "./tree-grid-resize-line-styling-sample.component.html"
})
export class TreeGridResizeLineStylingSampleComponent {
    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_DATA_DETAILED();
    }
}

import { Component, OnInit } from "@angular/core";
import { FULL_EMPLOYEE_DATA } from "../data/employees";

@Component({
    selector: "app-tree-grid-employees-sample",
    styleUrls: ["./tree-grid-employees-sample.component.scss"],
    templateUrl: "./tree-grid-employees-sample.component.html"
})
export class TreeGridEmployeesSampleComponent implements OnInit {
    public localData: any[];

    constructor() { }

    public ngOnInit() {
        this.localData = FULL_EMPLOYEE_DATA();
    }
}

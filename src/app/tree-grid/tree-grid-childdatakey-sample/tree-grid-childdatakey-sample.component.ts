import { Component, OnInit } from "@angular/core";
import { EMPLOYEE_DATA } from "./data";

@Component({
    selector: "app-tree-grid-childdatakey-sample",
    styleUrls: ["./tree-grid-childdatakey-sample.component.scss"],
    templateUrl: "./tree-grid-childdatakey-sample.component.html"
})
export class TreeGridChilddatakeySampleComponent implements OnInit {
    public localData: any[];

    constructor() { }

    public ngOnInit() {
        this.localData = EMPLOYEE_DATA;
    }
}

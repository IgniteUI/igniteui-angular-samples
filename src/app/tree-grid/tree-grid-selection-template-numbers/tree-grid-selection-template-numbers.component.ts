import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
    selector: "tree-grid-selection-template-numbers",
    styleUrls: ["./tree-grid-selection-template-numbers.component.scss"],
    templateUrl: "./tree-grid-selection-template-numbers.component.html"
})
export class TreeGridSelectionTemplateNumbersSampleComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}

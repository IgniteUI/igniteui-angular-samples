import { Component, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeDetailedFlatData } from "../data/employees-flat-detailed";

@Component({
    providers: [],
    selector: "grid-sample",
    styleUrls: ["tree-grid-toolbar-pinning.component.scss"],
    templateUrl: "tree-grid-toolbar-pinning.component.html"

})

export class TreeGridPinningToolbarSampleComponent {
    public data: any[];
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }
}

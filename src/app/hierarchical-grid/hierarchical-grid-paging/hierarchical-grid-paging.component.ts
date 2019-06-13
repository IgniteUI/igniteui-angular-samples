import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-paging",
    styleUrls: ["./hierarchical-grid-paging.component.scss"],
    templateUrl: "hierarchical-grid-paging.component.html"
})

export class HGridPagingSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid", {static: true})
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}

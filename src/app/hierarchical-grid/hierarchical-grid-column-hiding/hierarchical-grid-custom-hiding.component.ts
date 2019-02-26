import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-custom-hiding",
    styleUrls: ["./hierarchical-grid-custom-hiding.component.scss"],
    templateUrl: "hierarchical-grid-custom-hiding.component.html"
})

export class HGridCostumHidingSampleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

}

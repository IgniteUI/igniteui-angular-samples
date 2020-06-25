import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-filtering",
    styleUrls: ["./hierarchical-grid-filtering.component.scss"],
    templateUrl: "hierarchical-grid-filtering.component.html"
})

export class HGridFilteringSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public formatter = (a) => a;
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-row-editing",
    styleUrls: ["./hierarchical-grid-row-editing.component.css"],
    templateUrl: "hierarchical-grid-row-editing.component.html"
})

export class HGridRowEditingSampleComponent implements OnInit {
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

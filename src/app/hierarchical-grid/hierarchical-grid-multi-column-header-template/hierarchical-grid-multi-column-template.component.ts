import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { CUSTOMERS } from "../data";

@Component({
    selector: "hierarchical-grid-multi-column-template",
    styleUrls: ["./hierarchical-grid-multi-column-template.component.scss"],
    templateUrl: "hierarchical-grid-multi-column-template.component.html"
})

export class HGridMultiHeaderTemplateSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid", { read: IgxHierarchicalGridComponent, static: true})
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
    }

    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}

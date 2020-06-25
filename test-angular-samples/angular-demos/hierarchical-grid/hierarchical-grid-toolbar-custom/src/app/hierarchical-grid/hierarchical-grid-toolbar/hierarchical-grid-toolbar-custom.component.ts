import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-toolbar-custom",
    styleUrls: ["./hierarchical-grid-toolbar-custom.component.scss"],
    templateUrl: "hierarchical-grid-toolbar-custom.component.html"
})

export class HGridToolbarCustomSampleComponent implements OnInit {
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

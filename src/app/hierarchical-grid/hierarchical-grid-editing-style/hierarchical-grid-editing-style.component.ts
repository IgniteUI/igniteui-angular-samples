import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";
import { Singer } from "../models";

@Component({
    selector: "hierarchical-grid-editing-style",
    styleUrls: ["./hierarchical-grid-editing-style.component.scss"],
    templateUrl: "hierarchical-grid-editing-style.component.html"
})

export class HGridEditingStyleComponent implements OnInit {
    public localdata: Singer[];
    public singer: Singer;

    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}

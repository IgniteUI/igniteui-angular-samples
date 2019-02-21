import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-resizing",
    styleUrls: ["./hierarchical-grid-resizing.component.scss"],
    templateUrl: "hierarchical-grid-resizing.component.html"
})

export class HGridColumnResizingSampleComponent implements OnInit {
    public localdata;
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    @ViewChild("layout1")
    private layout1: IgxRowIslandComponent;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }

    public ngOnInit(): void {

    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

}

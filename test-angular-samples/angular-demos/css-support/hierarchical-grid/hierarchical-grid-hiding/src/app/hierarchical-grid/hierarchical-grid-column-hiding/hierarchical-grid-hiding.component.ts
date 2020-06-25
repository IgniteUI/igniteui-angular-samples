import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-hiding",
    styleUrls: ["./hierarchical-grid-hiding.component.css"],
    templateUrl: "hierarchical-grid-hiding.component.html"
})

export class HGridColumnHidingSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public ngAfterViewInit() {
        this.hierarchicalGrid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
    }

    public formatter = (a) => a;

}

import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-custom-hiding",
    styleUrls: ["./hierarchical-grid-custom-hiding.component.scss"],
    templateUrl: "hierarchical-grid-custom-hiding.component.html"
})

export class HGridCostumHidingSampleComponent implements OnInit, AfterViewInit {
    public localdata;
    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.columnList.forEach(col => col.width = "20%")
    }

}

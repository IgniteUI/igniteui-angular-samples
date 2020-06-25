import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-custom-hiding",
    styleUrls: ["./hierarchical-grid-custom-hiding.component.css"],
    templateUrl: "hierarchical-grid-custom-hiding.component.html"
})

export class HGridCostumHidingSampleComponent implements OnInit, AfterViewInit {
    public localdata;
    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.columnList.forEach((col) => col.width = "20%");
    }

    public formatter = (a) => a;

}

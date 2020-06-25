import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { CUSTOMERS } from "../data";

@Component({
    selector: "hierarchical-grid-pinning",
    styleUrls: ["./hierarchical-grid-pinning.component.css"],
    templateUrl: "hierarchical-grid-pinning.component.html"
})

export class HGridPinningSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = CUSTOMERS;
    }
    public ngOnInit(): void {

    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}

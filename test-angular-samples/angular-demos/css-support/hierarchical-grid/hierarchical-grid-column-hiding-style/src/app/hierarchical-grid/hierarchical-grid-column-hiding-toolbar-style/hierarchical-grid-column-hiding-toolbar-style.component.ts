import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
  selector: "app-hierarchical-grid-column-hiding-toolbar-style",
  styleUrls: ["./hierarchical-grid-column-hiding-toolbar-style.component.css"],
  templateUrl: "./hierarchical-grid-column-hiding-toolbar-style.component.html"
})
export class HierarchicalGridColumnHidingToolbarStyleComponent implements OnInit, AfterViewInit {
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
}

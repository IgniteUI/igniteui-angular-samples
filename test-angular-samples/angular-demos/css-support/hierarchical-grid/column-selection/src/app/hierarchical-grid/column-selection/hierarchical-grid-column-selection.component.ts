import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "app-hierarchical-grid-column-selection",
    templateUrl: "./hierarchical-grid-column-selection.component.html",
    styleUrls: ["./hierarchical-grid-column-selection.component.css"]
})
export class HierarchicalGridColumnSelectionComponent implements OnInit, AfterViewInit {

    public data;
    public currentColumnSelection = "single";

    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(["Artist"]);
    }

}

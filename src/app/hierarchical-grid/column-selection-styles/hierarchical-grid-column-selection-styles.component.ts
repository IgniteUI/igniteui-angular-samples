import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
  selector: "app-hierarchical-grid-column-selection-styles",
  templateUrl: "./hierarchical-grid-column-selection-styles.component.html",
  styleUrls: ["./hierarchical-grid-column-selection-styles.component.scss"]
})
export class HGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(["Artist", "GrammyNominations"]);
    }

}

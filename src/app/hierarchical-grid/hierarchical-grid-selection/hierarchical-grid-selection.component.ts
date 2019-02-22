import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-selection",
    styleUrls: ["./hierarchical-grid-selection.component.scss"],
    templateUrl: "hierarchical-grid-selection.component.html"
})

export class HGridSelectionSampleComponent implements OnInit {
    public localdata;
    public selection = true;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.hierarchicalGrid.deselectAllRows();
            this.hierarchicalGrid.selectRows([targetCell.row.rowID]);
        }
    }

}

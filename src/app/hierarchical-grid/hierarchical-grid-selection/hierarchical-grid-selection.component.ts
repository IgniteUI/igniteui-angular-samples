import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from '../data';

@Component({
    selector: "hierarchical-grid-selection",
    styleUrls: ["./hierarchical-grid-selection.component.scss"],
    templateUrl: "hierarchical-grid-selection.component.html"
})

export class HGridSelectionSampleComponent implements OnInit {
    public localdata;
    public selection = true;
    
    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.hGrid.deselectAllRows();
            this.hGrid.selectRows([targetCell.row.rowID]);
        }
    }

}

import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { LOCAL_DATA, SINGERS } from './data';

@Component({
    selector: "hierarchical-grid-summary",
    styleUrls: ["./hierarchical-grid-summary.component.scss"],
    templateUrl: "hierarchical-grid-summary.component.html"
})

export class HGridSummarySampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}

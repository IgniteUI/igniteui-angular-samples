import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from '../data';

@Component({
    selector: "hierarchical-grid-toolbar-options",
    styleUrls: ["./hierarchical-grid-toolbar-options.component.scss"],
    templateUrl: "hierarchical-grid-toolbar-options.component.html"
})

export class HGridToolbarOptionsSampleComponent implements OnInit {
    public localdata;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}

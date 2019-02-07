import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { LOCAL_DATA } from './data';

@Component({
    selector: "hierarchical-grid-filtering",
    styleUrls: ["./hierarchical-grid-filtering.component.scss"],
    templateUrl: "hierarchical-grid-filtering.component.html"
})

export class HGridFilteringSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = LOCAL_DATA;
    }
    public ngOnInit(): void {

    }

}

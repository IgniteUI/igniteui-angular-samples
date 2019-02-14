import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from '../data';

@Component({
    selector: "hierarchical-grid-sorting",
    styleUrls: ["./hierarchical-grid-sorting.component.scss"],
    templateUrl: "hierarchical-grid-sorting.component.html"
})

export class HGridSortingSampleComponent implements OnInit, AfterViewInit {
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
    public ngAfterViewInit(): void {
        this.hGrid.cdr.detectChanges()
    }

}

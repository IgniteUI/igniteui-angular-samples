import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { CUSTOMERS } from '../data';

@Component({
    selector: "hierarchical-grid-multi-column",
    styleUrls: ["./hierarchical-grid-multi-column.component.scss"],
    templateUrl: "hierarchical-grid-multi-column.component.html"
})

export class HGridMultiHeadersSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        
    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
        
    }

    public pinGroup() {
        const firstColumnGroup = this.hGrid.columnList.filter((c) => c.header === "General Information")[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public hideGroup() {
        const firstColumnGroup = this.hGrid.columnList.filter((c) => c.header === "General Information")[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }

}

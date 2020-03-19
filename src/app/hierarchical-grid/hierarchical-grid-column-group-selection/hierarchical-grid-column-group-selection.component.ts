import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { CUSTOMERS } from "../data";

@Component({
    selector: "hierarchical-grid-column-group-selection",
    styleUrls: ["./hierarchical-grid-column-group-selection.component.scss"],
    templateUrl: "hierarchical-grid-column-group-selection.component.html"
})

export class HGridMultiHeadersSelectionComponent implements OnInit {
    public localdata;

    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}

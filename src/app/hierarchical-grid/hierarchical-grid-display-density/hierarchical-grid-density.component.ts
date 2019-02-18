import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { CUSTOMERS } from "../data";

@Component({
    selector: "hierarchical-grid-density",
    styleUrls: ["./hierarchical-grid-density.component.scss"],
    templateUrl: "hierarchical-grid-density.component.html"
})

export class HGridDisplayDensitySampleComponent implements OnInit {
    public localdata;
    public density = "compact";
    public displayDensities;

    @ViewChild("layout1")
    private layout1: IgxRowIslandComponent;

    @ViewChild("hGrid")
    private hGrid: IgxHierarchicalGridComponent;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
        this.displayDensities = [
            {
                label: "compact",
                selected: this.density === "compact",
                togglable: true
            },
            {
                label: "cosy",
                selected: this.density === "cosy",
                togglable: true
            },
            {
                label: "comfortable",
                selected: this.density === "comfortable",
                togglable: true
            }
        ];
    }

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
        this.hGrid.displayDensity = this.displayDensities[event.index].label;
        this.hGrid.reflow();
    }

}

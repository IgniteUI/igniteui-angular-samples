import { Component, OnInit } from "@angular/core";
import { SINGERS } from "../data";

@Component({
  selector: "app-hierarchical-grid-toolbar-style",
  styleUrls: ["./hierarchical-grid-toolbar-style.component.css"],
  templateUrl: "./hierarchical-grid-toolbar-style.component.html"
})
export class HierarchicalGridToolbarStyleComponent implements OnInit {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public ngOnInit(): void {
    }
}

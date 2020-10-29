import { Component, OnInit } from "@angular/core";
import { SINGERS } from "../data";
import { Singer } from "../models";

@Component({
    selector: "hierarchical-grid-add-row",
    styleUrls: ["./hierarchical-grid-add-row.component.scss"],
    templateUrl: "./hierarchical-grid-add-row.component.html"
})

export class HGridAddRowSampleComponent implements OnInit {
    public localdata;


    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}

import { Component, OnInit } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-row-edit-style",
    styleUrls: ["./hierarchical-grid-row-edit-style.component.scss"],
    templateUrl: "hierarchical-grid-row-edit-style.component.html"
})

export class HGridRowEditStyleComponent implements OnInit {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}

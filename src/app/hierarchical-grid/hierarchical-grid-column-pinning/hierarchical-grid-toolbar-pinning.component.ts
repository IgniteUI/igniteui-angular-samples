import { Component } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-toolbar-pinning",
    styleUrls: ["./hierarchical-grid-toolbar-pinning.component.scss"],
    templateUrl: "hierarchical-grid-toolbar-pinning.component.html"
})

export class HGridToolbarPinningComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
}

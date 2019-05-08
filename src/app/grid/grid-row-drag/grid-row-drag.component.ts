import { Component } from "@angular/core";
import { DATA } from "./data";

@Component({
    selector: "grid-row-drag-sample",
    styleUrls: ["./grid-row-drag.component.scss"],
    templateUrl: "grid-row-drag.component.html"
})

export class GridDragSampleComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

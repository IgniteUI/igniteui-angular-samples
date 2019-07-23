import { Component } from "@angular/core";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "app-grid-row-edit-style",
    styleUrls: [`grid-row-editing-style.component.scss`],
    templateUrl: "grid-row-editing-style.component.html"
})
export class GridRowEditStyleComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

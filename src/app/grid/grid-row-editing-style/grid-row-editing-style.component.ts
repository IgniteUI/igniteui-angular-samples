import { Component, ViewChild } from "@angular/core";
import { DATA } from "../../data/nwindData";

import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit-style",
    styleUrls: [`grid-row-editing-style.component.scss`],
    templateUrl: "grid-row-editing-style.component.html"
})
export class GridRowEditStyleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent, static: true }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

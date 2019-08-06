import { Component, ViewChild } from "@angular/core";
import { DATA } from "../../data/customers";

import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "grid-selection-template-numbers",
    styleUrls: ["./grid-sample-selection-template-numbers.component.scss"],
    templateUrl: "grid-sample-selection-template-numbers.component.html"
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

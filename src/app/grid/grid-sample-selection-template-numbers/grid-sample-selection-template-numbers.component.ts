import { Component, ViewChild } from "@angular/core";
import { DATA } from "../services/financialData";

import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "grid-selection-template-numbers",
    styleUrls: ["./grid-sample-selection-template-numbers.component.scss"],
    templateUrl: "grid-sample-selection-template-numbers.component.html"
})

export class GridSelectionTemplateNumbersComponent {
    @ViewChild("myGrid", { static: true }) public myGrid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}

import { Component, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-selection-template-numbers",
    styleUrls: ["./hierarchical-grid-selection-template-numbers.component.scss"],
    templateUrl: "hierarchical-grid-selection-template-numbers.component.html"
})

export class HGridSelectionTemplateNumbersSampleComponent {
    public localdata;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-external-advanced-filtering",
    templateUrl: "./hierarchical-grid-external-advanced-filtering.component.html",
    styleUrls: ["./hierarchical-grid-external-advanced-filtering.component.scss"]
})
export class HGridExternalAdvancedFilteringComponent {

    public localdata: any;
    constructor() {
        this.localdata = SINGERS;
    }
}

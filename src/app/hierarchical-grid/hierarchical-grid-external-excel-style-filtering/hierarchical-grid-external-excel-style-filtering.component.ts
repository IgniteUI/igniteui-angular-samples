import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "hierarchical-grid-external-excel-style-filtering",
    templateUrl: "./hierarchical-grid-external-excel-style-filtering.component.html",
    styleUrls: ["./hierarchical-grid-external-excel-style-filtering.component.scss"]
})
export class HGridExternalExcelStyleFilteringComponent {

    public localdata: any;
    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;

}

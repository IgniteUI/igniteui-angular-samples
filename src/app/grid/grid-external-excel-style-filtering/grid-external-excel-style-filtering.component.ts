import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "grid-external-excel-style-filtering",
    templateUrl: "./grid-external-excel-style-filtering.component.html",
    styleUrls: ["./grid-external-excel-style-filtering.component.scss"]
})
export class GridExternalExcelStyleFilteringComponent {

    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatDate(val) {
        if (val !== "Select All") {
            return new Intl.DateTimeFormat("en-US").format(val);
        } else {
            return val;
        }
    }
}

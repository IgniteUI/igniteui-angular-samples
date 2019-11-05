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
}

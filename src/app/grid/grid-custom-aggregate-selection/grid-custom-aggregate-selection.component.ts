import { Component, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    providers: [],
    selector: "grid-sample",
    styleUrls: ["./grid-custom-aggregate-selection.component.scss"],
    templateUrl: "grid-custom-aggregate-selection.component.html"
})

export class GridCustomAggregateSelection {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    public data: any[];
    public selection = true;
    public selectedCells: any[];

    public ngOnInit(): void {
      this.data = DATA;
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

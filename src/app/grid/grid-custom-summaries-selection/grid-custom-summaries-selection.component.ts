import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";
import { SummariesData } from "./summaries-data/summaries-data.component";

@Component({
    providers: [],
    selector: "grid-sample",
    styleUrls: ["./grid-custom-summaries-selection.component.scss"],
    templateUrl: "grid-custom-summaries-selection.component.html"
})

export class GridCustomSummariesSelection implements AfterViewInit {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChild(SummariesData, { static: true }) public summariesData: SummariesData;

    public data: any[];
    public selection = true;

    constructor() { }

    public ngOnInit(): void {
      this.data = DATA;
    }
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.grid1.selectRange({
                rowStart: 2,
                rowEnd: 4,
                columnStart: 1,
                columnEnd: 4
            });
            this.summariesData.updateData(this.grid1.selectedCells);
        });
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        if (!value) { return; }
        return "$" + value.toFixed(2);
    }
}

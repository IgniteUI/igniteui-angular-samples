import { AfterViewChecked, Component, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";
import { SummariesData } from "./summaries-data/summaries-data.component";

@Component({
    providers: [],
    selector: "grid-sample",
    styleUrls: ["./grid-custom-summaries-selection.component.scss"],
    templateUrl: "grid-custom-summaries-selection.component.html"
})

export class GridCustomSummariesSelection implements AfterViewChecked {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChild(SummariesData, { static: true }) public summariesData: SummariesData;

    public data: any[];
    public selection = true;
    public initialRender: boolean = true;

    constructor() { }

    public ngOnInit(): void {
      this.data = DATA;
    }
    public ngAfterViewChecked(): void {
        if (this.initialRender) {
            this.grid1.selectRange({
                rowStart: 2,
                rowEnd: 4,
                columnStart: 1,
                columnEnd: 4
            });
            this.summariesData.updateData(this.grid1.selectedCells);
            this.initialRender = false;
        }
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

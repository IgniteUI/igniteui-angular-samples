import { AfterViewChecked, Component, ViewChild } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";
import { AggregatedData } from './aggregated-data/aggregated-data.component';

@Component({
    providers: [],
    selector: "grid-sample",
    styleUrls: ["./grid-custom-aggregate-selection.component.scss"],
    templateUrl: "grid-custom-aggregate-selection.component.html"
})

export class GridCustomAggregateSelection implements AfterViewChecked {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChild(AggregatedData, { static: true }) private aggregatedData;

    public data: any[];
    public selection = true;
    public selectedCells: any[];

    public ngOnInit(): void {
      this.data = DATA;
    }
    public ngAfterViewChecked(): void {
      this.grid1.selectRange({ 
        rowStart: 2, 
        rowEnd: 4, 
        columnStart: 1, 
        columnEnd: 4 
      });
      this.aggregatedData.updateData(this.grid1.selectedCells);
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}

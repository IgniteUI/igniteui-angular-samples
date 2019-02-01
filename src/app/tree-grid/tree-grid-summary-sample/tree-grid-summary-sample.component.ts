import { Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {
    IgxColumnComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult,
    IgxTreeGridComponent } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

class MySummary extends IgxNumberSummaryOperand {

  constructor() {
    super();
  }

  public operate(data?: any[]): IgxSummaryResult[] {
    const result = super.operate(data);
    result.push({
      key: "test",
      label: "Test",
      summaryResult: data.filter((rec) => rec > 10 && rec < 30).length
    });

    return result;
  }
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-tree-grid-summary-sample",
  styleUrls: ["./tree-grid-summary-sample.component.scss"],
  templateUrl: "./tree-grid-summary-sample.component.html"
})
export class TreeGridSummarySampleComponent implements OnInit {

  @ViewChild("treegrid1", { read: IgxTreeGridComponent })
  public grid1: IgxTreeGridComponent;
  public mySummary = MySummary;
  public data;
  public productId = 0;

  constructor() {
    this.data = FOODS_DATA;
    this.productId = FOODS_DATA.length;
  }

  public ngOnInit() {
  }

  public toggleSummary(column: IgxColumnComponent) {
    column.hasSummary = !column.hasSummary;
  }
}

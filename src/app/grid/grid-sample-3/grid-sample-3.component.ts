import { Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {
    IgxColumnComponent,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult } from "igniteui-angular";
import { LOCAL_DATA } from "./data";

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
  selector: "app-grid-sample-3",
  styleUrls: ["./grid-sample-3.component.scss"],
  templateUrl: "./grid-sample-3.component.html"
})
export class GridSample3Component implements OnInit {

  @ViewChild("grid1", { read: IgxGridComponent })
  public grid1: IgxGridComponent;
  public mySummary = MySummary;
  public data;
  public productId = 0;

  constructor() {
    this.data = LOCAL_DATA;
    this.productId = LOCAL_DATA.length;
   }

  public ngOnInit() {
  }
  public toggleSummary(column: IgxColumnComponent) {
    column.hasSummary = !column.hasSummary;
  }
}

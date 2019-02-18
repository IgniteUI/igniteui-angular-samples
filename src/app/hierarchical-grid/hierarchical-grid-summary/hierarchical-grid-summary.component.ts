import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult } from "igniteui-angular";
import { SINGERS } from '../data';

class MySummary extends IgxNumberSummaryOperand {

    constructor() {
      super();
    }
  
    public operate(data?: any[]): IgxSummaryResult[] {
      const result = super.operate(data);
      result.push({
        key: "test",
        label: "More than 5",
        summaryResult: data.filter((rec) => rec > 5).length
      });
  
      return result;
    }
  }

@Component({
    selector: "hierarchical-grid-summary",
    styleUrls: ["./hierarchical-grid-summary.component.scss"],
    templateUrl: "hierarchical-grid-summary.component.html"
})

export class HGridSummarySampleComponent implements OnInit {
    public localdata;
    public mySummary = MySummary;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

}

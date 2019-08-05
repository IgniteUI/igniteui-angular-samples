import { AfterViewInit, Component, Input} from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";

@Component({
  selector: "aggregated-data",
  styleUrls: ["./aggregated-data.component.scss"],
  templateUrl: "aggregated-data.component.html"
})
export class AggregatedData implements AfterViewInit {

    @Input() public grid: IgxGridComponent;

    public data: any[] = [];
    public aggregatedData: any = {};
    public dataExists: boolean = false;
    public gridSelectedCells: any;
    public objectKeys = Object.keys;

    public ngAfterViewInit(): void {
      this.grid.onSelection.subscribe((res) => {
        this.updateData(res);
      });
      this.grid.onRangeSelection.subscribe((res) => {
        this.updateData(this.grid.selectedCells);
      });
    }

    protected updateData(res: any): void {
      for (const key in this.aggregatedData) {
        if (this.aggregatedData.hasOwnProperty(key)) {
            delete this.aggregatedData[key];
        }
      }
      this.data = [];
      this.dataExists = true;

      if (res.hasOwnProperty("cell")) {
        if (res.cell.column.dataType === "number") {
          this.data.push(res.cell.value);
        }
      } else {
        res.map((x) => {
          if (x.column.dataType === "number") {
            this.data.push(x.value);
          }
        });
      }
      const objectiveLength = this.grid.selectedCells.length;
      this.aggregateData(objectiveLength);
    }

    protected aggregateData(objectiveLength: number): void {
      this.aggregatedData.Count = (objectiveLength === 0) ? 1 : objectiveLength;
      if (this.data.length > 0) {
        this.aggregatedData.Sum = this.data.reduce((a, b) => a + b, 0);
        this.aggregatedData.Min = Math.min(...this.data);
        this.aggregatedData.Max = Math.max(...this.data);
        this.aggregatedData.Avg = this.data.reduce((a, b) => a + b, 0) / this.data.length;
      }
    }

}

import { AfterViewInit, Component, Input } from "@angular/core";

import { IgxGridComponent } from "igniteui-angular";

@Component({
  selector: "summaries-data",
  styleUrls: ["./summaries-data.component.scss"],
  templateUrl: "summaries-data.component.html"
})
export class SummariesData implements AfterViewInit {

    @Input() public grid: IgxGridComponent;

    public data: any[] = [];
    public dates: any[] = [];
    public summariesData: any = {};
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

    public updateData(res: any): void {
      for (const key in this.summariesData) {
        if (this.summariesData.hasOwnProperty(key)) {
            delete this.summariesData[key];
        }
      }
      this.data = [];
      this.dates = [];
      this.dataExists = true;

      if (res.hasOwnProperty("cell")) {
        if (res.cell.column.dataType === "number") {
          this.data.push(res.cell.value);
        }
        if (res.cell.column.dataType === "date") {
          this.dates.push(res.cell.value);
        }
      } else {
        res.map((x) => {
          if (x.column.dataType === "number") {
            this.data.push(x.value);
          }
          if (x.column.dataType === "date") {
              this.dates.push(x.value);
          }
        });
      }
      const objectiveLength = this.grid.selectedCells.length;
      this.summarizeData(objectiveLength);
    }

    protected summarizeData(objectiveLength: number): void {
      this.summariesData.Count = (objectiveLength === 0) ? 1 : objectiveLength;
      if (this.data.length > 0) {
        this.summariesData.Sum = this.data.reduce((a, b) => a + b, 0);
        this.summariesData.Min = Math.min(...this.data);
        this.summariesData.Max = Math.max(...this.data);
        this.summariesData.Avg = this.data.reduce((a, b) => a + b, 0) / this.data.length;
      }
      if (this.dates.length > 0) {
          let minDate = 0;
          let maxDate = 0;
          this.dates.forEach((date) => {
            const dMinDate = new Date(minDate);
            const dMaxDate = new Date(maxDate);
            const dDate = new Date(date);
            if (dDate > dMaxDate) {
                maxDate = date;
            }
            if (dDate < dMinDate || minDate === 0) {
                minDate = date;
            }
          });
          this.summariesData.MinDate = minDate;
          this.summariesData.MaxDate = maxDate;
        }
    }

}

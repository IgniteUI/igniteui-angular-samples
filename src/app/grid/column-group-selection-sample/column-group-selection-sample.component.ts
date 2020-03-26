import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "gird-column-group-selection",
  templateUrl: "./column-group-selection-sample.component.html",
  styleUrls: ["./column-group-selection-sample.component.scss"]
})
export class GridColumnGroupSelectionComponent implements AfterViewInit {
  public data: any[];

  @ViewChild(IgxGridComponent)
  public grid: IgxGridComponent;

  constructor() {
    this.data = DATA;
  }

  public ngAfterViewInit() {
    this.grid.getColumnByName("Region").selected = true;
    this.grid.getColumnByName("PostalCode").selected = true;
  }
}

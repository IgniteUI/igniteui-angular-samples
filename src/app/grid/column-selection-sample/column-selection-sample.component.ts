import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "gird-column-selection",
  templateUrl: "./column-selection-sample.component.html",
  styleUrls: ["./column-selection-sample.component.scss"]
})
export class GridColumnSelectionComponent {
  public data: any[];

  @ViewChild(IgxGridComponent)
  public grid: IgxGridComponent;

  constructor() {
    this.data = DATA;
  }

  public ngAfterViewInit() {
    this.grid.getColumnByName("PostalCode").selected = true;
    this.grid.getColumnByName("CompanyName").selected = true;
  }
}

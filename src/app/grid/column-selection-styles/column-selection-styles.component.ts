import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "gird-column-selection-styles",
  templateUrl: "./column-selection-styles.component.html",
  styleUrls: ["./column-selection-styles.component.scss"]
})
export class GridColumnSelectionStylesComponent {
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

import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "gird-column-selection-styles",
  templateUrl: "./column-selection-styles.component.html",
  styleUrls: ["./column-selection-styles.component.scss"]
})
export class GridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
  public data: any[];

  @ViewChild(IgxGridComponent)
  public grid: IgxGridComponent;

  public ngOnInit() {
      this.data = DATA;
  }

  public ngAfterViewInit() {
   this.grid.selectColumns(["CompanyName", "PostalCode"]);
  }
}

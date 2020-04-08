import { AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {IgxGridComponent, IgxSelectComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "grid-column-selection",
  templateUrl: "./column-selection-sample.component.html",
  styleUrls: ["./column-selection-sample.component.scss"]
})
export class GridColumnSelectionComponent implements OnInit, AfterViewInit {
  public data: any[];
  public columnSelectionType = "single";

  @ViewChild(IgxGridComponent)
  public grid: IgxGridComponent;

  public ngOnInit() {
      this.data = DATA;
  }

  public ngAfterViewInit() {
    this.grid.getColumnByName("CompanyName").selected = true;
  }
}

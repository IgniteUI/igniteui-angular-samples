import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
  selector: "app-tree-grid-column-selection",
  templateUrl: "./tree-grid-column-selection.component.html",
  styleUrls: ["./tree-grid-column-selection.component.css"]
})
export class TreeGridColumnSelectionComponent implements OnInit, AfterViewInit {
  public data;
  public currentColumnSelection = "single";
  public columnConfig = [
    { field: "ID",  selectable: true },
    { field: "Name", selectable: true },
    { field: "UnitPrice",  selectable: false },
    { field: "AddedDate",  selectable: true, formatter: this.formatDate },
    { field: "Discontinued", selectable: false}
    ];

  @ViewChild(IgxTreeGridComponent)
  public tGrid: IgxTreeGridComponent;

  public ngOnInit(): void {
      this.data = FOODS_DATA();
  }

  public ngAfterViewInit(): void {
    this.tGrid.getColumnByName("ID").selected = true;
  }

  public formatDate(val: Date) {
    return new Intl.DateTimeFormat("en-US").format(val);
  }

}

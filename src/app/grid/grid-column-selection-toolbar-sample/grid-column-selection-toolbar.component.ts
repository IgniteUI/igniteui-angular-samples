import { Component, OnInit, Pipe, PipeTransform, ViewChild } from "@angular/core";
import {
  AbsoluteScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxButtonDirective,
  IgxDropDownComponent,
  OverlaySettings,
  PositionSettings,
  VerticalAlignment,
  IgxGridComponent
} from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "grid-column-selection",
  styleUrls: ["./grid-column-selection-toolbar.component.scss"],
  templateUrl: "./grid-column-selection-toolbar.component.html"
})
export class GridColumnSelectionToolbarComponent implements OnInit {
  private _positionSettings: PositionSettings = {
    horizontalDirection: HorizontalAlignment.Left,
    horizontalStartPoint: HorizontalAlignment.Right,
    verticalDirection: VerticalAlignment.Bottom,
    verticalStartPoint: VerticalAlignment.Bottom
  };

  private _overlaySettings: OverlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
    scrollStrategy: new AbsoluteScrollStrategy(),
    modal: false,
    closeOnOutsideClick: true,
    excludePositionTarget: true
  };

  @ViewChild("grid", { static: true }) public grid: IgxGridComponent;

  @ViewChild("columnSelectionButton", { read: IgxButtonDirective })
  public columnSelectionButton: IgxButtonDirective;

  @ViewChild("columnSelectionDropdown", { read: IgxDropDownComponent })
  public columnSelectionDropdown: IgxDropDownComponent;

  public searchSelectedColumn;
  public columns: any[];
  public data: any[];

  public toggleColumnSelection() {
    this._overlaySettings.positionStrategy.settings.target = this.columnSelectionButton.nativeElement;
    this._overlaySettings.outlet = this.grid.outletDirective;
    this.columnSelectionDropdown.toggle(this._overlaySettings);
  }

  public ngOnInit() {
    this.data = DATA;
    this.columns = [
      { field: "ID", width: 150, groupable: true, summary: true, selectable: true,  type: "string" },
      { field: "CompanyName", width: 150, groupable: true, summary: true, selectable: true, type: "string",  },
      { field: "ContactName", width: 150, resizable: true, movable: true,
        selectable: false, summary: true, type: "string" },
      { field: "ContactTitle", width: 150, movable: true,
        sortable: true, selectable: true, summary: true, type: "string" },
      { field: "Address", width: 150, resizable: true, movable: true,
        sortable: true, selectable: true, type: "string" },
      { field: "City", width: 150, movable: true, sortable: false, selectable: true,   type: "string" },
      { field: "Region", width: 150, movable: true, sortable: true, selectable: true, type: "string" },
      { field: "PostalCode", width: 150, movable: true, selectable: true, type: "string" },
      { field: "Phone", width: 150, resizable: true, movable: true, sortable: true,  type: "string" },
      { field: "Fax", width: 150, resizable: true, movable: true, selectable: true, type: "string" },
      { field: "Employees", width: 150, resizable: true, summary: false, selectable: true, type: "number" },
      { field: "DateCreated", width: 150, resizable: true, selectable: true, type: "date" },
      { field: "Contract", width: 150, resizable: true, selectable: true, type: "boolean" }
    ];
  }
}

@Pipe({
  name: "filterColumns"
})
export class GridColumnSelectionFilterPipe implements PipeTransform {
public transform(items: any[], searchText: string): any[] {
      if (!items || !items.length) {
          return [];
      }

      if (!searchText) {
          return items;
      }

      searchText = searchText.toLowerCase();
      const result = items.filter((it) =>
          it.field.toLowerCase().indexOf(searchText) > -1);

      return  result;
  }
}

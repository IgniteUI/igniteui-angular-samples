import { Component, OnInit, Pipe, PipeTransform, ViewChild } from "@angular/core";
import {
  AbsoluteScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxButtonDirective,
  IgxDropDownComponent,
  IgxGridComponent,
  OverlaySettings,
  PositionSettings,
  VerticalAlignment
} from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
  selector: "hierarchical-grid-column-selection-toolbar",
  styleUrls: ["./hierarchical-grid-column-selection-toolbar.component.scss"],
  templateUrl: "./hierarchical-grid-column-selection-toolbar.component.html"
})
export class HierarchicalGridColumnSelectionToolbarComponent implements OnInit {
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
  public data: any[];

  public toggleColumnSelection() {
    this._overlaySettings.positionStrategy.settings.target = this.columnSelectionButton.nativeElement;
    this._overlaySettings.outlet = this.grid.outletDirective;
    this.columnSelectionDropdown.toggle(this._overlaySettings);
  }

  public ngOnInit() {
    this.data = SINGERS;
  }
}

@Pipe({
  name: "filterColumns"
})
export class HierarchicalGridColumnSelectionFilterPipe implements PipeTransform {
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


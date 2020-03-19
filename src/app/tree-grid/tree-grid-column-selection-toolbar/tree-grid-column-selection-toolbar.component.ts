import { Component, OnInit, Pipe, PipeTransform, ViewChild } from "@angular/core";
import {
  AbsoluteScrollStrategy,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  IgxButtonDirective,
  IgxDropDownComponent,
  IgxTreeGridComponent,
  OverlaySettings,
  PositionSettings,
  VerticalAlignment } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
    selector: "app-tree-grid-column-selection-toolbar",
    styleUrls: ["./tree-grid-column-selection-toolbar.component.scss"],
    templateUrl: "./tree-grid-column-selection-toolbar.component.html"
})
export class TreeGridColumnSelectionToolbarComponent implements OnInit {
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

  @ViewChild("columnSelectionButton", { read: IgxButtonDirective })
  public columnSelectionButton: IgxButtonDirective;

  @ViewChild("columnSelectionDropdown", { read: IgxDropDownComponent })
  public columnSelectionDropdown: IgxDropDownComponent;

  public searchSelectedColumn;
  public data: any[];

  @ViewChild(IgxTreeGridComponent, { static: true })
  public treeGrid: IgxTreeGridComponent;

  public toggleColumnSelection() {
    this._overlaySettings.positionStrategy.settings.target = this.columnSelectionButton.nativeElement;
    this._overlaySettings.outlet = this.treeGrid.outletDirective;
    this.columnSelectionDropdown.toggle(this._overlaySettings);
  }

  public ngOnInit(): void {
      this.data = generateEmployeeFlatData();
  }
}

@Pipe({
  name: "filterColumns"
})
export class TreeGridColumnSelectionFilterPipe implements PipeTransform {
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



import { Component, ViewChild } from "@angular/core";
import {
    CloseScrollStrategy ,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    VerticalAlignment
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-3",
    styleUrls: ["./dropdown-sample-3.component.scss"],
    templateUrl: "./dropdown-sample-3.component.html"
})
export class DropDownSample3Component {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
        { field: "Bulgaria", selected: true },
        { field: "UK", disabled: true },
        { field: "NA", header: true },
        { field: "Canada" },
        { field: "USA" },
        { field: "Mexico" }];

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }
}

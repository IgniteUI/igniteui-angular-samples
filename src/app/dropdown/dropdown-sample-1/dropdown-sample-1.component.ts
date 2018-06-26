import { Component, OnInit, ViewChild } from "@angular/core";
import {
    CloseScrollStrategy ,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    IgxToggleDirective,
    VerticalAlignment
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-1",
    styleUrls: ["./dropdown-sample-1.component.scss"],
    templateUrl: "./dropdown-sample-1.component.html"
})
export class DropDownSample1Component implements OnInit {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

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

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }
}

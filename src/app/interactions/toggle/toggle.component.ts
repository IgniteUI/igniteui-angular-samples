import { Component, ElementRef, ViewChild } from "@angular/core";

import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxToggleDirective,
    VerticalAlignment
} from "igniteui-angular";

@Component({
  selector: "app-toggle",
  styleUrls: ["./toggle.component.scss"],
  templateUrl: "./toggle.component.html"
})
export class ToggleComponent {
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild("button") public igxButton: ElementRef;
    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    public _overlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };
    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
}

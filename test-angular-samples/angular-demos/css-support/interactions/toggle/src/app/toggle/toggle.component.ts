import { Component, ElementRef, ViewChild } from "@angular/core";

import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxToggleDirective,
    VerticalAlignment
} from "igniteui-angular";

@Component({
  selector: "app-toggle",
  styleUrls: ["./toggle-samples.scss"],
  templateUrl: "./toggle.component.html"
})
export class ToggleComponent {
    @ViewChild(IgxToggleDirective, { static: true }) public igxToggle: IgxToggleDirective;
    @ViewChild("button", { static: true }) public igxButton: ElementRef;

    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
}

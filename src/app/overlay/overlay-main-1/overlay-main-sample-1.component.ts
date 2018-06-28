import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, AutoPositionStrategy, BlockScrollStrategy,
    CloseScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxButtonDirective, IgxIconModule, IgxOverlayService,
    IgxSwitchModule, IScrollStrategy, NoOpScrollStrategy, OverlaySettings, PositionSettings,
    VerticalAlignment
} from "igniteui-angular";
import { CardSample1Component } from "../../card/card-sample-1/card-sample-1.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    template: `<div style="width: 100%;">
        <button igxButton (click)='showOverlay($event)'>
            Show Card
        </button>
    </div>`
})
export class OverlaySampleMain1Component {

    private _defaultPositionSettings: PositionSettings = {
        target: null,
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    };

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {
    }

    public showOverlay(event) {
        this.overlayService.show(CardSample1Component, this._overlaySettings);
    }
}

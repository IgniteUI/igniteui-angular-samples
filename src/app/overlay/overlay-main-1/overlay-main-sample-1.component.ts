import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, AutoPositionStrategy, BlockScrollStrategy,
    CloseScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxIconModule, IgxOverlayService, IgxSwitchModule,
    IScrollStrategy, NoOpScrollStrategy, OverlaySettings, PositionSettings, VerticalAlignment
} from "igniteui-angular";
import { DetachedComponent } from "./detached-component/detached-component.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    template: `<div>
        <button (click)='showOverlay($event)'>
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
        @Inject(IgxOverlayService) private overlayService
    ) {
    }

    public showOverlay(event) {
    }
}

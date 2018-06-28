import { CommonModule } from "@angular/common";
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
        <button #buttonElement igxButton (click)='showOverlay($event)'>
            Show Card
        </button>
    </div>`
})
export class OverlaySampleMain2Component {

    private _cardHidden = true;
    private _componentString: string;
    @ViewChild("buttonElement")
    private buttonElement: ElementRef;

    private _defaultPositionSettings: PositionSettings = {
        target: this.buttonElement ? this.buttonElement.nativeElement : null,
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(this._defaultPositionSettings),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: false,
        closeOnOutsideClick: false
    };

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {
    }

    public showOverlay(event) {
        if (this._cardHidden) {
            const positionStrategy = new ConnectedPositioningStrategy({
                target: this.buttonElement.nativeElement
            });
            const overlaySettings = Object.assign(this._overlaySettings, { positionStrategy });
            this._componentString = this.overlayService.show(CardSample1Component, overlaySettings);
        } else {
            this.overlayService.hide(this._componentString);
        }
        this._cardHidden = !this._cardHidden;
    }
}

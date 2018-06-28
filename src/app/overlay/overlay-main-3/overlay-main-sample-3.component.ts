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
    template: `<div class="container-div">
        <button #buttonElement igxButton (click)='showOverlay($event)'>
            Show Card
        </button>
        <div class='width-50' #cardDiv>
            <app-igx-card-simple></app-igx-card-simple>
        </div>
    </div>`,
    styles: [`.width-50 {
        width: 50%;
        display: inline-block;
    }
    button {
        float: left
    }`]
})
export class OverlaySampleMain3Component {
    @ViewChild("cardDiv")
    private cardSample: ElementRef;

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
        modal: true,
        closeOnOutsideClick: true
    };

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {
    }

    public showOverlay(event) {
        this.overlayService.show(this.cardSample, Object.assign(this._overlaySettings, {
            positionStrategy: new ConnectedPositioningStrategy(Object.assign(this._defaultPositionSettings, {
                target: this.buttonElement.nativeElement
            })
            )
        })
        );
    }
}

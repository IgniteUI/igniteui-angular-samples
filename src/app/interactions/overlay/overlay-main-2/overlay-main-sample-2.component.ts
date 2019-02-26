
import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy, IgxButtonDirective, IgxIconModule, IgxOverlayService
} from "igniteui-angular";
import { CardSample1Component } from "../../../layouts/card/card-sample-1/card-sample-1.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    templateUrl: `./overlay-main-sample-2.component.html`,
    styleUrls: [`./overlay-main-sample-2.component.scss`]
})
export class OverlaySampleMain2Component {
    private _overlayId: string;
    private _cardHidden = true;

    @ViewChild("buttonElement")
    private buttonElement: ElementRef;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlay.onClosed.subscribe((e: OverlayEventArgs) => delete this._overlayId);
    }

    public toggleOverlay() {
        if (this._cardHidden) {
            if (!this._overlayId) {
                const positionStrategy = new ConnectedPositioningStrategy({
                    target: this.buttonElement.nativeElement
                });
                this._overlayId = this.overlayService.attach(CardSample1Component, {
                    positionStrategy,
                    modal: false,
                    closeOnOutsideClick: false
                });
            }
            this.overlayService.show(this._overlayId);
        } else {
            this.overlayService.hide(this._overlayId);
        }
        this._cardHidden = !this._cardHidden;
    }
}


import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy, IgxButtonDirective, IgxIconModule, IgxOverlayService } from "igniteui-angular";
import { CardSample1Component } from "../../card/card-sample-1/card-sample-1.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    templateUrl: `./overlay-main-sample-2.component.html`,
    styleUrls: [`./overlay-main-sample-2.component.scss`]
})
export class OverlaySampleMain2Component {

    private _cardHidden = true;
    private _componentString: string;
    @ViewChild("buttonElement")
    private buttonElement: ElementRef;

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {
    }

    public toggleOverlay() {
        if (this._cardHidden) {
            const positionStrategy = new ConnectedPositioningStrategy({
                target: this.buttonElement.nativeElement
            });
            this._componentString = this.overlayService.show(CardSample1Component, {
                positionStrategy,
                modal: false,
                closeOnOutsideClick: false });
        } else {
            this.overlayService.hide(this._componentString);
        }
        this._cardHidden = !this._cardHidden;
    }
}

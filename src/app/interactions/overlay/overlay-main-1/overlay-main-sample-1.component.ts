import { Component, Inject } from "@angular/core";
import { IgxOverlayService } from "igniteui-angular";
import { CardSample1Component } from "../../../layouts/card/card-sample-1/card-sample-1.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`]
})
export class OverlaySampleMain1Component {
    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) public overlayService: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlayService.onClosed.subscribe(() => delete this._overlayId);
    }

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(CardSample1Component);
        }

        this.overlayService.show(this._overlayId);
    }
}

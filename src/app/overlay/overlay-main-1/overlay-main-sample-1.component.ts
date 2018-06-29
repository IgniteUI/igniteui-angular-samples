import { Component, Inject } from "@angular/core";
import {
    IgxButtonDirective,
    IgxIconModule, IgxOverlayService, OverlaySettings } from "igniteui-angular";
import { CardSample1Component } from "../../card/card-sample-1/card-sample-1.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    template: `<div class="content">
        <button igxButton class="igx-button--raised" (click)='showOverlay()'>
            Show Card
        </button>
    </div>`,
    styles: [`.content {
        width: 100%;
        height: 100%;
    } button {
        margin-top: 10%;
        margin-left: 45%;
        width: 10%;
    }`]
})
export class OverlaySampleMain1Component {

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {
    }

    public showOverlay() {
        this.overlayService.show(CardSample1Component);
    }
}

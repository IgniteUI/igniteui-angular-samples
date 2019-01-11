import { Component, Inject } from "@angular/core";
import {
    IgxButtonDirective,
    IgxIconModule, IgxOverlayService } from "igniteui-angular";
import { CardSample1Component } from "../../../card/card-sample-1/card-sample-1.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`]
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

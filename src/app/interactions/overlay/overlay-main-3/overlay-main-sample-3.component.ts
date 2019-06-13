import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import { ConnectedPositioningStrategy, IgxOverlayService } from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    templateUrl: `overlay-main-sample-3.component.html`,
    styleUrls: ["overlay-main-sample-3.component.scss"]
})
export class OverlaySampleMain3Component {
    @ViewChild("cardDiv", {static: true})
    private cardSample: ElementRef;

    @ViewChild("buttonElement", {static: true})
    private buttonElement: ElementRef;

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService
    ) {
    }

    public showOverlay() {
        const overlayId = this.overlayService.attach(this.cardSample, {
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.buttonElement.nativeElement
            })
        });
        this.overlayService.show(overlayId);
    }
}

import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy, HorizontalAlignment, IgxCardModule, IgxIconModule,
    IgxOverlayService, OverlayEventArgs, VerticalAlignment } from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-2.component.scss"],
    templateUrl: "./overlay-position-sample-2.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample2Component {

    public modalValue = true;

    @ViewChild("positionDemo")
    public positionDemo: ElementRef;

    @ViewChild("overlayDemo")
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer")
    public mainContainer: ElementRef;

    private _overlayId: string;
    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlay.onClosed.subscribe((e: OverlayEventArgs) => delete this._overlayId);
    }

    public onClickPosition(horizontalStartPoint: HorizontalAlignment, verticalStartPoint: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.positionDemo.nativeElement,
                horizontalStartPoint,
                verticalStartPoint
            })
        });
    }

    private get overlayId(): string {
        if (!this._overlayId) {
            this._overlayId = this.overlay.attach(this.overlayDemo);
        }
        return this._overlayId;
    }
}

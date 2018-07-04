import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy, HorizontalAlignment, IgxCardModule, IgxIconModule,
    IgxOverlayService, VerticalAlignment } from "igniteui-angular";
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

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public onClickPosition(horizontalStartPoint: HorizontalAlignment, verticalStartPoint: VerticalAlignment) {
        this.overlay.show(this.overlayDemo, {
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.positionDemo.nativeElement,
                horizontalStartPoint,
                verticalStartPoint
            })
        });
    }
}

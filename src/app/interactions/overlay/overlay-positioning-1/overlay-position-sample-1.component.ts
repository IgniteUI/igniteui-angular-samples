import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AutoPositionStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxCardModule, IgxIconModule, IgxOverlayService, VerticalAlignment } from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-1.component.scss"],
    templateUrl: "./overlay-position-sample-1.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample1Component {

    @ViewChild("directionDemo")
    public directionDemo: ElementRef;

    @ViewChild("autoDemo")
    public autoDemo: ElementRef;

    @ViewChild("overlayDemo")
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer")
    public mainContainer: ElementRef;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public onClickDirection(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayDemo, {
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.directionDemo.nativeElement,
                horizontalDirection, verticalDirection
            })
        });
    }

    public onClickDirectionGlobal(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayDemo, {
            positionStrategy: new GlobalPositionStrategy({
                target: this.directionDemo.nativeElement,
                horizontalDirection, verticalDirection
            })
        });
    }

    public onClickDirectionAuto(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayDemo, {
            positionStrategy: new AutoPositionStrategy({
                target: this.autoDemo.nativeElement,
                horizontalDirection, verticalDirection
            })
        });
    }
}

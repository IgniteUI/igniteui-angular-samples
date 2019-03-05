import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
    AutoPositionStrategy, ConnectedPositioningStrategy, ElasticPositionStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxOverlayService, VerticalAlignment } from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-1.component.scss"],
    templateUrl: "./overlay-position-sample-1.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample1Component implements OnInit, OnDestroy {

    @ViewChild("directionDemo")
    public directionDemo: ElementRef;

    @ViewChild("autoDemo")
    public autoDemo: ElementRef;

    @ViewChild("elasticDemo")
    public elasticDemo: ElementRef;

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

    public onClickDirectionElastic(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayDemo, {
            positionStrategy: new ElasticPositionStrategy({
                target: this.elasticDemo.nativeElement,
                horizontalDirection, verticalDirection,
                minSize: { width: 80, height: 20 }
            })
        });
    }

    public ngOnInit() {
        const applyStyle = (overflow) => { this.overlayDemo.nativeElement.style.overflow = overflow; };
        this.overlay.onOpening.subscribe(() => {applyStyle("auto"); });
        this.overlay.onClosed.subscribe(() => {applyStyle(""); });
    }

    public ngOnDestroy() {
        this.overlay.onOpening.unsubscribe();
        this.overlay.onClosed.unsubscribe();
    }
}

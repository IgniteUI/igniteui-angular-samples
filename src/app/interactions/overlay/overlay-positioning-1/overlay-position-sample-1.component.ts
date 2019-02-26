import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    GlobalPositionStrategy,
    HorizontalAlignment,
    IgxCardModule,
    IgxIconModule,
    IgxOverlayService,
    OverlayEventArgs,
    VerticalAlignment
} from "igniteui-angular";
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

    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlay.onClosed.subscribe((e: OverlayEventArgs) => delete this._overlayId);
    }

    public onClickDirection(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.directionDemo.nativeElement,
                horizontalDirection, verticalDirection
            })
        });
    }

    public onClickDirectionGlobal(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new GlobalPositionStrategy({
                target: this.directionDemo.nativeElement,
                horizontalDirection, verticalDirection
            })
        });
    }

    public onClickDirectionAuto(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new AutoPositionStrategy({
                target: this.autoDemo.nativeElement,
                horizontalDirection, verticalDirection
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

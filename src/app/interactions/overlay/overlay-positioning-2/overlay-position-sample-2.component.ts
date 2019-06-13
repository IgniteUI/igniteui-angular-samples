import { Component, ElementRef, Inject, OnDestroy, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxOverlayService,
    VerticalAlignment
} from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-2.component.scss"],
    templateUrl: "./overlay-position-sample-2.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample2Component implements OnDestroy {

    public modalValue = true;

    @ViewChild("positionDemo", {static: true})
    public positionDemo: ElementRef;

    @ViewChild("overlayDemo", {static: true})
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer", {static: true})
    public mainContainer: ElementRef;

    private destroy$ = new Subject<boolean>();
    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlay
            .onClosed
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => delete this._overlayId);
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

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}

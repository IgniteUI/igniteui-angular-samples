import { Component, ElementRef, Inject, OnDestroy, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxOverlayService,
    OverlaySettings,
    PositionSettings,
    VerticalAlignment
} from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { MyDynamicCardComponent } from "../overlay-dynamic-card/overlay-dynamic-card.component";
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-2.component.scss"],
    templateUrl: "./overlay-position-sample-2.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample2Component implements OnDestroy {
    private destroy$ = new Subject<boolean>();
    private _overlayId: string;

    @ViewChild("buttonElement", { static: true })
    private buttonElement: ElementRef;

    constructor(
        @Inject(IgxOverlayService) public overlayService: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlayService
            .onClosed
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => delete this._overlayId);
    }

    public showOverlay() {
        if (!this._overlayId) {
            const positionSettings: PositionSettings = {
                target: this.buttonElement.nativeElement,
                horizontalDirection: HorizontalAlignment.Left,
                verticalDirection: VerticalAlignment.Top,
                horizontalStartPoint: HorizontalAlignment.Right,
                verticalStartPoint: VerticalAlignment.Top
            };
            const strategy = new ConnectedPositioningStrategy(positionSettings);

            // Initialize and use overlay settings
            const overlaySettings: OverlaySettings = {
                // Pass in the positioning strategy
                positionStrategy: strategy
            };
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, overlaySettings);
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}

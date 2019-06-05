// tslint:disable: object-literal-sort-keys
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy,
    HorizontalAlignment,
    IgxOverlayService,
    VerticalAlignment
} from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-1.component.scss"],
    templateUrl: "./overlay-position-sample-1.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample1Component implements OnInit, OnDestroy {

    @ViewChild("directionDemo", { static: true })
    public directionDemo: ElementRef;

    @ViewChild("autoDemo", { static: true })
    public autoDemo: ElementRef;

    @ViewChild("elasticDemo", { static: true })
    public elasticDemo: ElementRef;

    @ViewChild("overlayDemo", { static: true })
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer", { static: true })
    public mainContainer: ElementRef;

    private destroy$ = new Subject<boolean>();
    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public onClickDirection(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new ConnectedPositioningStrategy({
                target: this.directionDemo.nativeElement,
                horizontalDirection,
                verticalDirection
            })
        });
    }

    public onClickDirectionGlobal(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new GlobalPositionStrategy({
                target: this.directionDemo.nativeElement,
                horizontalDirection,
                verticalDirection
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

    public onClickDirectionElastic(horizontalDirection: HorizontalAlignment, verticalDirection: VerticalAlignment) {
        this.overlay.show(this.overlayId, {
            positionStrategy: new ElasticPositionStrategy({
                target: this.elasticDemo.nativeElement,
                horizontalDirection,
                verticalDirection,
                minSize: { width: 80, height: 20 }
            })
        });
    }

    public ngOnInit() {
        const applyStyle = (overflow) => { this.overlayDemo.nativeElement.style.overflow = overflow; };
        this.overlay
            .onOpening
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => { applyStyle("auto"); });

        this.overlay
            .onClosed
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => {
                delete this._overlayId;
                applyStyle("");
            });
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}

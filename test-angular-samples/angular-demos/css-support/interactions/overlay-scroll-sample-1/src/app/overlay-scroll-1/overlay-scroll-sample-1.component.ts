import { Component, ElementRef, Inject, OnDestroy, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy,
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy,
    HorizontalAlignment,
    IgxOverlayService,
    OverlaySettings,
    PositionSettings,
    VerticalAlignment
} from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-scroll-sample-1.component.css"],
    templateUrl: "./overlay-scroll-sample-1.component.html",
    providers: [IgxOverlayService]
})
export class OverlayScrollSample1Component implements OnDestroy {

    public modalValue = true;

    @ViewChild("modalDemo", { static: true })
    public modalDemo: ElementRef;

    @ViewChild("overlayDemo", { static: true })
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer", { static: true })
    public mainContainer: ElementRef;

    private _defaultPositionSettings: PositionSettings = {
        target: null,
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    };

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

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

    public onClickModal(event: Event, strategy: string) {
        event.stopPropagation();
        const positionSettings = Object.assign(Object.assign({}, this._defaultPositionSettings), {
            target: this.modalDemo.nativeElement,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        });
        let positionStrategy;
        switch (strategy) {
            case ("auto"):
                positionStrategy = new AutoPositionStrategy(positionSettings);
                break;
            case ("elastic"):
                positionStrategy = new ElasticPositionStrategy(positionSettings);
                break;
            case ("connected"):
                positionStrategy = new ConnectedPositioningStrategy(positionSettings);
                break;
            default:
                positionStrategy = new GlobalPositionStrategy(Object.assign(positionSettings, {
                    horizontalDirection: HorizontalAlignment.Center,
                    verticalDirection: VerticalAlignment.Middle
                }));
        }
        const showSettings = Object.assign(Object.assign({}, this._overlaySettings), {
            modal: this.modalValue,
            positionStrategy
        });
        this.overlay.show(this.overlayId, showSettings);
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

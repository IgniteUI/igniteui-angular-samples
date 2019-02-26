import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy,
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    GlobalPositionStrategy,
    HorizontalAlignment,
    IgxOverlayService,
    OverlaySettings,
    PositionSettings,
    VerticalAlignment
} from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-scroll-sample-1.component.scss"],
    templateUrl: "./overlay-scroll-sample-1.component.html",
    providers: [IgxOverlayService]
})
export class OverlayScrollSample1Component {

    public modalValue = true;

    @ViewChild("modalDemo")
    public modalDemo: ElementRef;

    @ViewChild("overlayDemo")
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer")
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

    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlay.onClosed.subscribe(() => delete this._overlayId);
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
}

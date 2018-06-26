import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, AutoPositionStrategy, BlockScrollStrategy,
    CloseScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxIconModule, IgxOverlayService, IgxSwitchModule,
    IScrollStrategy, NoOpScrollStrategy, OverlaySettings, PositionSettings, VerticalAlignment
} from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-sample.component.scss"],
    templateUrl: "./overlay-sample.component.html",
    providers: [IgxOverlayService]
})
export class OverlaySampleComponent {

    public modalValue = true;

    @ViewChild("directionDemo")
    public directionDemo: ElementRef;

    @ViewChild("positionDemo")
    public positionDemo: ElementRef;

    @ViewChild("scrollDemo")
    public scrollDemo: ElementRef;

    @ViewChild("modalDemo")
    public modalDemo: ElementRef;

    @ViewChild("overlayDemo")
    public overlayDemo: ElementRef;

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
    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public onClickDirection(horAlign: HorizontalAlignment, vertAlign: VerticalAlignment) {
        const positionSettings =
            Object.assign(Object.assign({}, this._defaultPositionSettings), {
                target: this.directionDemo.nativeElement,
                horizontalDirection: horAlign, verticalDirection: vertAlign
            });
        const showSettings =
            Object.assign(Object.assign({}, this._overlaySettings), {
                positionStrategy: new ConnectedPositioningStrategy(positionSettings)
            });
        this.overlay.show(this.overlayDemo, showSettings);
    }

    public onClickPosition(horAlign, vertAlign) {
        const positionSettings =
            Object.assign(Object.assign({}, this._defaultPositionSettings), {
                target: this.positionDemo.nativeElement,
                horizontalStartPoint: horAlign, verticalStartPoint: vertAlign,
                horizontalDirection: HorizontalAlignment.Right, verticalDirection: VerticalAlignment.Bottom
            });
        const showSettings =
            Object.assign(Object.assign({}, this._overlaySettings), {
                positionStrategy: new ConnectedPositioningStrategy(positionSettings)
            });
        this.overlay.show(this.overlayDemo, showSettings);
    }

    public onClickScrollStrategy(event: Event, strat: string) {
        event.stopPropagation();
        let scrollStrategy;
        switch (strat) {
            case ("absolute"):
                scrollStrategy = new AbsoluteScrollStrategy();
                break;
            case ("block"):
                scrollStrategy = new BlockScrollStrategy();
                break;
            case ("close"):
                scrollStrategy = new CloseScrollStrategy();
                break;
            default:
                scrollStrategy = new NoOpScrollStrategy();
        }
        const showSettings = Object.assign(Object.assign({}, this._overlaySettings), {
            scrollStrategy,
            modal: false
        });
        this.overlay.show(this.overlayDemo, showSettings);
    }

    public onClickModal(event: Event, strat: string) {
        event.stopPropagation();
        const positionSettings = Object.assign(Object.assign({}, this._defaultPositionSettings), {
            target: this.modalDemo.nativeElement,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        });
        let positionStrategy;
        switch (strat) {
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
        this.overlay.show(this.overlayDemo, showSettings);
    }
}

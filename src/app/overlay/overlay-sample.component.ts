import { Component, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, AutoPositionStrategy, BlockScrollStrategy,
    CloseScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxOverlayService, NoOpScrollStrategy,
    OverlaySettings, PositionSettings, VerticalAlignment
} from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-sample.component.scss"],
    templateUrl: "./overlay-sample.component.html",
    providers: [IgxOverlayService]
})
export class OverlaySampleComponent {
    @ViewChild("directionDemo")
    public directionDemo;

    @ViewChild("positionDemo")
    public positionDemo;

    @ViewChild("scrollDemo")
    public scrollDemo;

    @ViewChild("modalDemo")
    public modalDemo;

    @ViewChild("overlayDemo")
    public overlayDemo;
    // tslint:disable:object-literal-sort-keys
    private _defaultPositionSettings: PositionSettings = {
        target: this.positionDemo,
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    };

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

    private _currentSettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };
    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public onClickPosition(horAlign, vertAlign) {
        const positionSettings =
            Object.assign(this._defaultPositionSettings, {
                horizontalDirection: horAlign, verticalDirection: vertAlign
            });
        const showSettings =
            Object.assign(this._currentSettings, {
                target: this.positionDemo,
                positionStrategy: new ConnectedPositioningStrategy(positionSettings)
            });
        this.overlay.show(this.overlayDemo, showSettings);
    }
    public onClick(object) {
        this._overlaySettings = Object.assign(this._overlaySettings, object);
        this.overlay.show(this.overlayDemo, this._overlaySettings);
    }
}

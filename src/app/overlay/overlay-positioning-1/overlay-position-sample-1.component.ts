import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxCardModule, IgxIconModule, IgxOverlayService,
    IgxSwitchModule, OverlaySettings, PositionSettings, VerticalAlignment
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

    public onClickDirectionGlobal(horAlign: HorizontalAlignment, vertAlign: VerticalAlignment) {
        const positionSettings =
            Object.assign(Object.assign({}, this._defaultPositionSettings), {
                target: this.directionDemo.nativeElement,
                horizontalDirection: horAlign, verticalDirection: vertAlign
            });
        const showSettings =
            Object.assign(Object.assign({}, this._overlaySettings), {
                positionStrategy: new GlobalPositionStrategy(positionSettings)
            });
        this.overlay.show(this.overlayDemo, showSettings);
    }
}

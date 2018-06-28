import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxCardModule, IgxIconModule, IgxOverlayService,
    IgxSwitchModule, OverlaySettings, PositionSettings, VerticalAlignment
} from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-position-sample-2.component.scss"],
    templateUrl: "./overlay-position-sample-2.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPositionSample2Component {

    public modalValue = true;

    @ViewChild("positionDemo")
    public positionDemo: ElementRef;

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
}

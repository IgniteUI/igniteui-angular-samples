import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, AutoPositionStrategy, BlockScrollStrategy,
    CloseScrollStrategy, ConnectedPositioningStrategy, GlobalPositionStrategy,
    HorizontalAlignment, IgxCardModule, IgxIconModule, IgxOverlayService,
    IgxSwitchModule, IScrollStrategy, NoOpScrollStrategy, OverlaySettings, PositionSettings, VerticalAlignment
} from "igniteui-angular";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-scroll-sample-2.component.scss"],
    templateUrl: "./overlay-scroll-sample-2.component.html",
    providers: [IgxOverlayService]
})
export class OverlayScrollSample2Component {

    @ViewChild("scrollDemo")
    public scrollDemo: ElementRef;

    @ViewChild("overlayDemo")
    public overlayDemo: ElementRef;

    @ViewChild("mainContainer")
    public mainContainer: ElementRef;

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };
    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

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
                scrollStrategy = new CloseScrollStrategy(this.mainContainer.nativeElement);
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
}

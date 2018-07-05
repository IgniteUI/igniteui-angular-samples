import { Component, ElementRef, Inject, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, BlockScrollStrategy, CloseScrollStrategy, ConnectedPositioningStrategy,
    IgxCardModule, IgxIconModule, IgxOverlayService, IgxSwitchModule, NoOpScrollStrategy
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

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public onClickScrollStrategy(event: Event, strat: string) {
        event.stopPropagation();
        let scrollStrategy;
        const positionStrategy = new ConnectedPositioningStrategy({ target: this.scrollDemo.nativeElement });
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
        this.overlay.show(this.overlayDemo, {
            positionStrategy,
            scrollStrategy,
            modal: false,
            closeOnOutsideClick: true
        });
    }
}

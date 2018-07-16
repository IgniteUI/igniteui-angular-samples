import { Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, BlockScrollStrategy, CloseScrollStrategy, ConnectedPositioningStrategy,
    IgxCardModule, IgxIconModule, IgxOverlayService, IgxSwitchModule, NoOpScrollStrategy
} from "igniteui-angular";
import { MyDynamicCardComponent } from "../overlay-dynamic-card/overlay-dynamic-card.component";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-scroll-sample-2.component.scss"],
    templateUrl: "./overlay-scroll-sample-2.component.html",
    providers: [IgxOverlayService]
})
export class OverlayScrollSample2Component implements OnInit {
    public previewHidden = false;
    @ViewChild("scrollDemo")
    public scrollDemo: ElementRef;

    @ViewChild(MyDynamicCardComponent)
    public overlayDemo: MyDynamicCardComponent;

    @ViewChild("mainContainer")
    public mainContainer: ElementRef;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) { }

    public ngOnInit(): void {
        (this.mainContainer.nativeElement as HTMLElement).style.height = "450px";
        this.overlay.onOpening.subscribe(() => {
            this.previewHidden = true;
        });
        this.overlay.onClosing.subscribe(() => {
            this.previewHidden = false;
        });
    }

    public onClickScrollStrategy(event: Event, strat: string) {
        let scrollStrategy;
        const positionStrategy = new ConnectedPositioningStrategy();
        switch (strat) {
            case ("absolute"):
                scrollStrategy = new AbsoluteScrollStrategy();
                positionStrategy.settings.target = this.scrollDemo.nativeElement.children[0];
                break;
            case ("block"):
                scrollStrategy = new BlockScrollStrategy();
                positionStrategy.settings.target = this.scrollDemo.nativeElement.children[1];
                break;
            case ("close"):
                scrollStrategy = new CloseScrollStrategy(this.mainContainer.nativeElement);
                positionStrategy.settings.target = this.scrollDemo.nativeElement.children[2];
                break;
            default:
                scrollStrategy = new NoOpScrollStrategy();
                positionStrategy.settings.target = this.scrollDemo.nativeElement.children[3];
        }
        this.overlay.show(MyDynamicCardComponent, {
            positionStrategy,
            scrollStrategy,
            modal: false,
            closeOnOutsideClick: true
        });
    }
}

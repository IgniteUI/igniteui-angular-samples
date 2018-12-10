import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxToastComponent, slideInLeft, slideOutRight } from "igniteui-angular";

@Component({
    selector: "banner-sample-3",
    styleUrls: ["banner-sample-3.component.scss"],
    templateUrl: "banner-sample-3.component.html"
})

export class BannerSample3Component implements OnInit {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent) public eventToast: IgxToastComponent;
    public contentWidth = "384px";
    public imageUrls = ["https://www.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg",
        "https://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg"];
    public wifiState = false;
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };

    public wifi(state: boolean) {
        this.eventToast.hide();
        this.banner.close();
        this.wifiState = state;
        this.eventToast.message = `Wifi is now ${state ? "on" : "off"}`;
        this.eventToast.show();
    }

    public ngOnInit() {
        this.banner.open();
    }

    public refreshBanner() {
        this.banner.open();
        this.wifiState = false;
    }
}

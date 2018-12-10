import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxToastComponent, slideInLeft, slideOutRight } from "igniteui-angular";
import { Subject } from "rxjs";

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
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };
    public onNetworkStateChange = new Subject();
    private _wifiState = false;

    public get wifiState(): boolean {
        return this._wifiState;
    }
    public set wifiState(v: boolean) {
        this._wifiState = v;
        this.onNetworkStateChange.next();
    }

    public showToast() {
        this.eventToast.hide();
        this.eventToast.message = `Wifi is now ${this.wifiState ? "on" : "off"}`;
        this.eventToast.show();
    }

    public ngOnInit() {
        this.banner.open();
        this.onNetworkStateChange.subscribe(() => this.refreshBanner());
    }

    public ngOnDestroy(): void {
        this.onNetworkStateChange.complete();
    }

    public refreshBanner() {
        if (!this.wifiState) {
            this.banner.open();
        } else {
            this.banner.close();
        }
        this.showToast();
    }
}

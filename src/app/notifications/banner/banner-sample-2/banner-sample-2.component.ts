import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxToastComponent } from "igniteui-angular";
import { Subject } from "rxjs";

@Component({
    selector: "banner-sample-2",
    styleUrls: ["banner-sample-2.component.scss"],
    templateUrl: "banner-sample-2.component.html"
})

export class BannerSample2Component implements OnInit, OnDestroy {

    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent, { static: true }) public eventToast: IgxToastComponent;
    public contentWidth = "384px";
    public imageUrls = ["assets/images/card/media/the_red_ice_forest.jpg",
        "assets/images/card/media/yosemite.jpg"];
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
            if (!this.banner.collapsed) {
                this.banner.close();
            }
        }
        this.showToast();
    }
}

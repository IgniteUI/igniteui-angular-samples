import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxToastComponent, IgxToastPosition  } from "igniteui-angular";
import { Subject } from "rxjs";

@Component({
    selector: "banner-advanced-sample",
    styleUrls: ["../banner-samples.scss"],
    templateUrl: "banner-advanced-sample.component.html"
})

export class BannerAdvancedSampleComponent implements OnInit, OnDestroy {

    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent, { static: true }) public eventToast: IgxToastComponent;
    public contentWidth = "384px";
    public imageUrls = ["https://www.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg",
        "https://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg"];
    public onNetworkStateChange = new Subject();
    public toastPosition: IgxToastPosition.Middle;

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
        this.toastPosition = IgxToastPosition.Middle;
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

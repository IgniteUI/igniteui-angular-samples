import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent, slideInLeft, slideOutRight } from "igniteui-angular";

@Component({
    selector: "banner-sample-3",
    styleUrls: ["banner-sample-3.component.scss"],
    templateUrl: "banner-sample-3.component.html"
})

export class BannerSample3Component implements OnInit {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    public contentWidth = "384px";
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };
    private rateUrl = `https://infragistics.com/products`;
    public rateApp() {
        window.open(this.rateUrl);
        this.banner.close();
    }

    public ngOnInit() {
        this.banner.open();
    }
}

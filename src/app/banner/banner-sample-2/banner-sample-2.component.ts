import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent } from "igniteui-angular";

@Component({
    selector: "banner-sample-2",
    styleUrls: ["banner-sample-2.component.scss"],
    templateUrl: "banner-sample-2.component.html"
})

export class BannerSample2Component implements OnInit {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    public contentWidth = "384px";
    private rateUrl = `https://infragistics.com/products`;
    public rateApp() {
        window.open(this.rateUrl);
        this.banner.close();
    }

    public ngOnInit() {
        this.banner.open();
    }
}

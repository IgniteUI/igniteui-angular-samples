import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxBannerComponent } from "igniteui-angular";

@Component({
    selector: "banner-sample-1",
    styleUrls: ["banner-sample-1.component.scss"],
    templateUrl: "banner-sample-1.component.html"
})

export class BannerSample1Component implements OnInit {
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    public contentWidth = "384px";
    public imageUrls = ["https://www.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg",
"https://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg"];
    public ngOnInit() {
        this.banner.open();
    }
}

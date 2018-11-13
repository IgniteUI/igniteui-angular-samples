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
    public toggle() {
        if (this.banner.collapsed) {
            this.banner.open();
        } else {
            this.banner.close();
        }
    }
    public onOpen(ev) {
        console.log("Open", ev);
    }

    public onClose(ev) {
        console.log("Close", ev);
    }

    public onButtonClick(ev) {
        console.log("Button click", ev);
    }

    public ngOnInit() {
        this.banner.open();
    }
}

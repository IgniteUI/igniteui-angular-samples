import { Component, ViewChild } from "@angular/core";
import { IgxBannerComponent, IgxListItemComponent, IListItemClickEventArgs } from "igniteui-angular";
import { emails, IMPORTANCE } from "./sample.data";

interface IEmail {
    title: string;
    subtitle: string;
    content: string;
    importance: IMPORTANCE;
    received: string;
    from: string;
    to: string;
}
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "banner-sample-4",
    templateUrl: "banner-sample-4.component.html",
    styleUrls: ["banner-sample-4.component.scss"]
})
export class BannerSample4Component {
    public activeItem: IEmail = null;
    public automaticReplies = true;
    public items: IEmail[] =  [];
    public priorityMap = {
        "-1": "priority_low",
        "0": "",
        "1": "priority_high"
    };
    @ViewChild(IgxBannerComponent) public banner: IgxBannerComponent;
    public contentWidth = "384px";
    public ngOnInit() {
        this.banner.open();
        this.items = emails;
        this.activeItem = emails[0];
    }

    public setActiveItem(event: IListItemClickEventArgs) {
        this.activeItem = this.items[event.item.index];
    }

    public itemClass(item) {
        return `mailbox-item${item === this.activeItem ? " mailbox-item--active" : ""}`;
    }

    public toggleBanner(event) {
        if (!event) {
            this.banner.close();
        } else {
            this.banner.open();
        }
    }

    public automaticRepliesSwitch(state: boolean) {
        this.automaticReplies = state;
        this.banner.close();
    }

    public get bannerDisplay() {
        return this.banner.collapsed ? "" : "block";
    }
}

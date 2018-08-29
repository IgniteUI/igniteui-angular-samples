import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { IgxTabsComponent, IgxTabsGroupComponent } from "igniteui-angular";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-tabs-sample-4",
    styleUrls: ["./tabs-sample-4.component.scss"],
    templateUrl: "./tabs-sample-4.component.html"
})
export class TabsSample4Component implements OnInit {
    @ViewChild("tabs1")
    public tabs: IgxTabsComponent;
    public routerLinks: any[];

    private _navigationEndSubscription: Subscription;

    constructor(private router: Router) {
        this.routerLinks = [
            {
                index: 0,
                label: "View 1",
                link: "/view1"
            },
            {
                index: 1,
                label: "View 2",
                link: "/view2"
            },
            {
                index: 2,
                label: "View 3",
                link: "/view3"
            }
        ];
    }

    public ngOnInit() {
        // Initial view loaded
        this.router.navigate(["view1"]);

        // Handle the back/forward browser buttons
        this._navigationEndSubscription = this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd)).subscribe((args) => {
                const index = this.routerLinks.indexOf(this.routerLinks.find((tab) => tab.link === this.router.url));
                (this.tabs.groups.filter((item) => item.index === index)[0] as IgxTabsGroupComponent).select();
            });
    }

    public ngOnDestroy(): void {
        if (this._navigationEndSubscription) {
            this._navigationEndSubscription.unsubscribe();
        }
    }
}

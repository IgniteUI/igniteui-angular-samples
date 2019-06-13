import { Component, OnDestroy, ViewChild } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { IgxTabsComponent, IgxTabsGroupComponent } from "igniteui-angular";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-tabs-sample-5",
    styleUrls: ["./tabs-sample-5.component.scss"],
    templateUrl: "./tabs-sample-5.component.html"
})
export class TabsSample5Component implements OnDestroy {
    @ViewChild("tabs1", { static: true })
    public tabs: IgxTabsComponent;
    private _navigationStartSubscription: Subscription;
    private _navigationEndSubscription: Subscription;
    private _navigationTrigger: string;

    constructor(private _router: Router) {
        // Handle back/forward browser button
        this._navigationStartSubscription = this._router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe((args) => {
                this._navigationTrigger = (args as NavigationStart).navigationTrigger.toString();
            });

        this._navigationEndSubscription = this._router.events.pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((args) => {
                const eventArgs = (args as NavigationEnd);
                if (this._navigationTrigger === "popstate") {
                    const url = eventArgs.url;
                    const startIdx = url.indexOf("(");
                    if (startIdx !== -1) {
                        const urlSliced = url.slice(startIdx);
                        let endIdx = urlSliced.indexOf("/");
                        if (endIdx === -1) {
                            endIdx = urlSliced.indexOf(")");
                        }
                        const outletInfo = urlSliced.slice(1, endIdx).split(":");
                        (this.tabs.groups.toArray()
                            .filter((group) => group.label.toLowerCase() === outletInfo[0])[0] as IgxTabsGroupComponent)
                            .select();
                    }
                }
            });
    }

    public navigate(eventArgs) {
        const selectedIndex = eventArgs.group.index;
        switch (selectedIndex) {
            case 0: {
                this._router.navigate(["/productDetails",
                    {
                        outlets:
                        {
                            product1: ["product1"]
                        }
                    }
                ]);
                break;
            }
            case 1: {
                this._router.navigate(["/productDetails",
                    {
                        outlets:
                        {
                            product2: ["product2"]
                        }
                    }
                ]);
                break;
            }
            case 2: {
                this._router.navigate(["/productDetails",
                    {
                        outlets:
                        {
                            product3: ["product3"]
                        }
                    }
                ]);
                break;
            }
        }
    }

    public ngOnDestroy(): void {
        if (this._navigationStartSubscription) {
            this._navigationStartSubscription.unsubscribe();
        }
        if (this._navigationEndSubscription) {
            this._navigationEndSubscription.unsubscribe();
        }
    }
}

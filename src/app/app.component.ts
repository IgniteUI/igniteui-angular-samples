import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import { filter } from "rxjs/operators";
import { appRoutes } from "./app-routing.module";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    @ViewChild("navdrawer", { read: IgxNavigationDrawerComponent })
    public navdrawer: IgxNavigationDrawerComponent;

    public homeRouteItem: IRouteItem;

    public currentNavItems: INavigationItem[] = [];

    public selectedDisplayName: string = "Home";

    public searchValue: string = "";

    public drawerState = {
        enableGestures: true,
        miniWidth: "80px",
        open: true,
        pin: false,
        pinThreshold: 768,
        position: "left",
        width: "300px"
    };

    private allNavItems: INavigationItem[] = [];

    constructor(private router: Router) {
    }

    public ngOnInit() {
        this.router.events.pipe(
            filter((x) => x instanceof NavigationStart)
        )
            .subscribe((event: NavigationStart) => {
                const routeItem = appRoutes.filter((route) => "/" + route.path === event.url)[0];
                if (routeItem.data && routeItem.data.displayName) {
                    this.selectedDisplayName = routeItem.data.displayName;
                }

                if (event.url !== "/" && !this.navdrawer.pin) {
                    // Close drawer when selecting a view on mobile (unpinned)
                    this.navdrawer.close();
                }
            });

        this.createAllNavItems();
    }

    public searchValueChanged() {
        this.currentNavItems = this.filter(this.allNavItems);
    }

    public clearSearchValue() {
        this.searchValue = "";
        this.searchValueChanged();
    }

    // toggle a header element from the navigation
    public toggleParent(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            if (theSpan.style.display === "inline") {
                theSpan.style.display = "none";
            } else if (theSpan.style.display === "none") {
                theSpan.style.display = "inline";
            }
        }
    }

    // convert a header element's visibility to a material icon name
    public convertNodeStateToIcon(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            const theSpanDisplay = theSpan.style.display;
            if (theSpanDisplay === "inline") {
                return "remove";
            } else if (theSpanDisplay === "none") {
                return "add";
            }
        }
        return "add";
    }

    private createAllNavItems() {
        // Create home route item
        this.homeRouteItem = { path: "/home", displayName: "Home" };

        // Create all navigation items (headers)
        for (const appRoute of appRoutes) {
            if (appRoute.data && appRoute.data.displayName && appRoute.data.parentName) {
                const controlName = appRoute.data.parentName;

                if (this.allNavItems.filter((item) => item.name === controlName).length <= 0) {
                    this.allNavItems.push({ name: controlName, children: [] });
                }
            }
        }

        // Sort navItems
        this.allNavItems = this.sort(this.allNavItems);

        // Create children route items for each navigation item
        for (const appRoute of appRoutes) {
            if (appRoute.data && appRoute.data.displayName && appRoute.data.parentName) {
                const controlName = appRoute.data.parentName;
                const navItem = this.allNavItems.filter((item) => item.name === controlName)[0];
                navItem.children.push({ path: "/" + appRoute.path, displayName: appRoute.data.displayName });
            }
        }

        this.currentNavItems = this.allNavItems;
    }

    private sort(navItems: INavigationItem[]) {
        return navItems.sort((current, next) => {
            return current.name.toLowerCase().localeCompare(next.name.toLowerCase());
        });
    }

    private filter(navItems: INavigationItem[]) {
        const filteredNavItems: INavigationItem[] = [];

        for (const navItem of navItems) {
            const filteredChildren: IRouteItem[] = [];
            for (const routeItem of navItem.children) {
                if (routeItem.displayName.toLowerCase().indexOf(this.searchValue) !== -1) {
                    filteredChildren.push(routeItem);
                }
            }
            if (filteredChildren.length > 0) {
                filteredNavItems.push({ name: navItem.name, children: filteredChildren });
            }
        }

        return filteredNavItems;
    }
}

export interface INavigationItem {
    name: string;
    children: IRouteItem[];
}

export interface IRouteItem {
    path: string;
    displayName: string;
}

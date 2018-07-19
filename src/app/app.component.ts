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

    public navItems: INavigationItem[] = [];

    public selectedDisplayName: string = "Home";

    public drawerState = {
        enableGestures: true,
        miniWidth: "80px",
        open: true,
        pin: false,
        pinThreshold: 768,
        position: "left",
        width: "300px"
    };

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

        // Create home route item
        this.homeRouteItem = { path: "/home", displayName: "Home" };

        // Create navigation items (headers)
        for (const appRoute of appRoutes) {
            if (appRoute.data && appRoute.data.displayName && appRoute.data.parentName) {
                const controlName = appRoute.data.parentName;

                if (this.navItems.filter((item) => item.name === controlName).length <= 0) {
                    this.navItems.push({ name: controlName, children: [] });
                }
            }
        }

        // Create children route items for each navigation item
        for (const appRoute of appRoutes) {
            if (appRoute.data && appRoute.data.displayName && appRoute.data.parentName) {
                const controlName = appRoute.data.parentName;
                const navItem = this.navItems.filter((item) => item.name === controlName)[0];
                navItem.children.push({ path: "/" + appRoute.path, displayName: appRoute.data.displayName });
            }
        }
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

import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { IgxNavigationDrawerComponent, IgxTreeComponent } from 'igniteui-angular';
import { fromEvent, Subscription } from 'rxjs';
import { filter, map, debounceTime } from 'rxjs/operators';
import { dataDisplayRoutesData } from '../data-display/data-display-routes-data';
import { dataEntriesRoutesData } from '../data-entries/data-entries-routes-data';
import { gridsRoutesData } from '../grid/grid-routes-data';
import { hierarchicalGridRoutesData } from '../hierarchical-grid/hierarchical-grid-routes-data';
import { interactionsRoutesData } from '../interactions/interactions-routes-data';
import { layoutsRoutesData } from '../layouts/layouts-routes-data';
import { listsRoutesData } from '../lists/lists-routes-data';
import { menusRoutesData } from '../menus/menus-routes-data';
import { notificationsRoutesData } from '../notifications/notifications-routes-data';
import { paginationRoutesData } from '../pagination/pagination-routes-data';
import { pivotGridsRoutesData } from '../pivot-grid/pivot-grid-routes-data';
import { schedulingRoutesData } from '../scheduling/scheduling-routes-data';
import { servicesRoutesData } from '../services/services-routes-data';
import { themingRoutesData } from '../theming/theming-routes-data';
import { treeGridRoutesData } from '../tree-grid/tree-grid-routes-data';

@Component({
    selector: 'app-index',
    styleUrls: ['./index.component.scss'],
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, AfterViewInit {

    @ViewChild('navdrawer', { read: IgxNavigationDrawerComponent, static: true })
    public navdrawer: IgxNavigationDrawerComponent;

    @ViewChild('tree', { read: IgxTreeComponent, static: false })
    public tree: IgxTreeComponent;

    public homeRouteItem: IRouteItem;

    public currentNavItems: INavigationItem[] = [];

    public selectedDisplayName: string;

    public searchValue = '';

    public drawerState = {
        enableGestures: true,
        miniWidth: '80px',
        open: true,
        pin: false,
        pinThreshold: 768,
        position: 'left',
        width: '300px'
    };

    private appRoutes: any[];

    private modulesRoutes = [
        {
            path: 'data-display',
            routesData: dataDisplayRoutesData
        },
        {
            path: 'data-entries',
            routesData: dataEntriesRoutesData
        },
        {
            path: 'notifications',
            routesData: notificationsRoutesData
        },
        {
            path: 'theming',
            routesData: themingRoutesData
        },
        {
            path: 'menus',
            routesData: menusRoutesData
        },
        {
            path: 'lists',
            routesData: listsRoutesData
        },
        {
            path: 'interactions',
            routesData: interactionsRoutesData
        },
        {
            path: 'scheduling',
            routesData: schedulingRoutesData
        },
        {
            path: 'layouts',
            routesData: layoutsRoutesData
        },
        {
            path: 'services',
            routesData: servicesRoutesData
        },
        {
            path: 'grid',
            routesData: gridsRoutesData
        },
        {
            path: 'hierarchical-grid',
            routesData: hierarchicalGridRoutesData
        },
        {
            path: 'tree-grid',
            routesData: treeGridRoutesData
        },
        {
            path: 'pivot-grid',
            routesData: pivotGridsRoutesData
        },
        {
            path: 'pagination',
            routesData: paginationRoutesData
        }
    ];

    private allNavItems: INavigationItem[] = [];

    private searchSub: Subscription;

    constructor(private router: Router, private cdr: ChangeDetectorRef) {
        this.appRoutes = this.getAllSampleRoutes('/samples',
            router.config.filter((c) => c.path === 'samples')[0].children, this.modulesRoutes);
    }

    public ngOnInit() {
        const loadedRouteItem = this.appRoutes.filter(
            (route: any) => route.path === this.router.url)[0];
        if (loadedRouteItem) {
            this.selectedDisplayName = loadedRouteItem.displayName;
        }

        this.router.events.pipe(
            filter((x) => x instanceof NavigationStart)
        ).subscribe((event: NavigationStart) => {
            const routeItem = this.appRoutes.filter(
                (route: any) => route.path === event.url)[0];
            if (routeItem) {
                this.selectedDisplayName = routeItem.displayName;
                const chilren = this.tree.findNodes(this.selectedDisplayName);
                this.tree.deselectAll();
                if (chilren?.length) {
                    chilren[0].selected = true;
                }
            }

            if (event.url !== '/' && !this.navdrawer.pin) {
                // Close drawer when selecting a view on mobile (unpinned)
                this.navdrawer.close();
            }
        });

        this.createAllNavItems();
    }

    public ngAfterViewInit() {
        const loadedRouteItem = this.appRoutes.filter(
            (route: any) => route.path === this.router.url)[0];

        if (loadedRouteItem) {
            // Get parent (INavItem)
            const loadedParentItem = this.currentNavItems.filter(
                (navItem) => navItem.name === loadedRouteItem.parentName)[0];
            // Get loaded child (IRouteItem)
            const loadedChildItem = loadedParentItem.children.filter(
                (routeItem) => routeItem.displayName === loadedRouteItem.displayName)[0];

            const parents = this.tree.findNodes(loadedParentItem.name);
            if (parents?.length) {
                parents[0].expanded = true;
                parents[0].nativeElement.scrollIntoView();
            }
            const chilren = this.tree.findNodes(loadedChildItem.displayName);
            if (chilren?.length) {
                chilren[0].selected = true;
            }
            this.cdr.detectChanges();
        }
    }

    public createSearchSub(searchInput: Element) {
        if (!this.searchSub) {
            const input = fromEvent(searchInput, 'keyup')
                        .pipe(map<Event, string>(e => (e.currentTarget as HTMLInputElement).value));
            const debouncedInput = input.pipe(debounceTime(150));
            this.searchSub = debouncedInput.subscribe(() => {
                this.currentNavItems = this.filter(this.allNavItems);
                this.cdr.detectChanges();

                if (this.searchValue !== '') {
                    this.tree.expandAll();
                } else {
                    this.tree.collapseAll();
                }
            });
        }
    }

    public clearSearchValue() {
        this.searchValue = '';
        this.currentNavItems = this.filter(this.allNavItems);
        this.tree.collapseAll();
    }

    // toggle a header element from the navigation
    public toggleParent(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            if (theSpan.style.display === 'inline') {
                theSpan.style.display = 'none';
            } else if (theSpan.style.display === 'none') {
                theSpan.style.display = 'inline';
            }
        }
    }

    // convert a header element's visibility to a material icon name
    public convertNodeStateToIcon(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            const theSpanDisplay = theSpan.style.display;
            if (theSpanDisplay === 'inline') {
                return 'remove';
            } else if (theSpanDisplay === 'none') {
                return 'add';
            }
        }
        return 'add';
    }

    public refresh() {
        window.dispatchEvent(new Event('resize'));
    }

    private getAllSampleRoutes(basePath: string, appModuleRoutes: Route[], modulesRoutes: any[]): any[] {
        const routes = [];
        const pushRoute = (route: Route, baseRoutePath: string) => {
            if (route.data && route.data.displayName && route.data.parentName) {
                routes.push({
                    displayName: route.data.displayName,
                    parentName: route.data.parentName,
                    path: baseRoutePath + '/' + route.path
                });
            }
        };

        appModuleRoutes.forEach((route: Route) => {
            pushRoute(route, basePath);
        });

        modulesRoutes.forEach((moduleRoutes: any) => {
            // tslint:disable-next-line:forin
            // eslint-disable-next-line guard-for-in
            for (const key in moduleRoutes.routesData) {
                const route: Route = {
                    data: moduleRoutes.routesData[key],
                    path: key === 'empty-path' ? '' : key
                };

                pushRoute(route, basePath + '/' + moduleRoutes.path);
            }
        });

        return routes;
    }

    private createAllNavItems() {
        // Create home route item
        this.homeRouteItem = { path: '/samples/home', displayName: 'Home' };

        // Create all navigation items (headers)
        for (const appRoute of this.appRoutes) {
            const controlName = appRoute.parentName;

            if (this.allNavItems.filter((item) => item.name === controlName).length <= 0) {
                this.allNavItems.push({ name: controlName, children: [] });
            }
        }

        // Sort navItems
        this.allNavItems = this.sort(this.allNavItems);

        // Create children route items for each navigation item
        for (const appRoute of this.appRoutes) {
            const controlName = appRoute.parentName;
            const navItem = this.allNavItems.filter((item) => item.name === controlName)[0];
            navItem.children.push({ path: appRoute.path, displayName: appRoute.displayName });
        }

        this.currentNavItems = this.allNavItems;
    }

    private sort(navItems: INavigationItem[]) {
        return navItems.sort((current, next) => current.name.toLowerCase().localeCompare(next.name.toLowerCase()));
    }

    private filter(navItems: INavigationItem[]) {
        const filteredNavItems: INavigationItem[] = [];

        for (const navItem of navItems) {
            const filteredChildren: IRouteItem[] = [];
            for (const routeItem of navItem.children) {
                if (routeItem.displayName.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1) {
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

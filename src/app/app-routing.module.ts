// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import "rxjs/add/operator/filter";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";

export const samplesRoutes: Routes = [
    {
        component: HomeComponent,
        data: { displayName: "Home" },
        path: "home"
    },
    {
        data: ["DataDisplayModule"],
        loadChildren: () => import("./data-display/data-display.module").then(m => m.DataDisplayModule),
        path: "data-display"
    },
    {
        data: ["DataEntriesModule"],
        loadChildren: () => import("./data-entries/data-entries.module").then(m => m.DataEntriesModule),
        path: "data-entries"
    },
    {
        data: ["InteractionsModule"],
        loadChildren: () => import("./interactions/interactions.module").then(m => m.InteractionsModule),
        path: "interactions"
    },
    {
        data: ["NotificationsModule"],
        loadChildren: () => import("./notifications/notifications.module").then(m => m.NotificationsModule),
        path: "notifications"
    },
    {
        data: ["ChartsModule"],
        loadChildren: () => import("./charts/charts.module").then(m => m.ChartsModule),
        path: "charts"
    },
    {
        data: ["ListsModule"],
        loadChildren: () => import("./lists/lists.module").then(m => m.ListsModule),
        path: "lists"
    },
    {
        data: ["ThemingModule"],
        loadChildren: () => import("./theming/theming.module").then(m => m.ThemingModule),
        path: "theming"
    },
    {
        data: ["SchedulingModule"],
        loadChildren: () => import("./scheduling/scheduling.module").then(m => m.SchedulingModule),
        path: "scheduling"
    },
    {
        data: ["ExcelLibraryModule"],
        loadChildren: () => import("./excel-library/excel-library.module").then(m => m.ExcelLibraryModule),
        path: "excel-library"
    },
    {
        data: ["GaugesModule"],
        loadChildren: () => import("./gauges/gauges.module").then(m => m.GaugesModule),
        path: "gauges"
    },
    {
        data: ["GeoMapsModule"],
        loadChildren: () => import("./maps/geo-map.module").then(m => m.GeoMapModule),
        path: "maps"
    },
    {
        data: ["MenusModule"],
        loadChildren: () => import("./menus/menus.module").then(m => m.MenusModule),
        path: "menus"
    },
    {
        data: ["LayoutsModule"],
        loadChildren: () => import("./layouts/layouts.module").then(m => m.LayoutsModule),
        path: "layouts"
    },
    {
        data: ["ServicesModule"],
        loadChildren: () => import("./services/services.module").then(m => m.ServicesModule),
        path: "services"
    },
    {
        data: ["SpreadsheetModule"],
        loadChildren: () => import("./spreadsheet/spreadsheet.module").then(m => m.SpreadsheetModule),
        path: "spreadsheet"
    },
    {
        data: ["TreeGridModule"],
        loadChildren: () => import("./tree-grid/tree-grid.module").then(m => m.TreeGridModule),
        path: "tree-grid"
    },
    {
        data: ["GridsModule"],
        loadChildren: () => import("./grid/grids.module").then(m => m.GridsModule),
        path: "grid"
    },
    {
        data: ["HierarchicalGridModule"],
        loadChildren: () => import("./hierarchical-grid/hierarchical-grid.module").then(m => m.HierarchicalGridModule),
        path: "hierarchical-grid"
    },
    {
        data: ["GridCRMModule"],
        loadChildren: () => import("./grid-crm/grid-crm.module").then(m => m.GridCRMModule),
        path: "grid-crm"
    },
    {
        data: ["GridFinjsModule"],
        loadChildren: () => import("./grid-finjs/grid-finjs.module").then(m => m.GridFinjsModule),
        path: "finjs-sample"
    },
    {
        data: ["TreeGridFinjsModule"],
        loadChildren: () => import("./treegrid-finjs/treegrid-finjs.module").then(m => m.TreeGridFinjsModule),
        path: "treegrid-finjs-sample"
    }
];
export const appRoutes: Routes = [
    {
        path: "", pathMatch: "full", redirectTo: "/samples/home"
    },
    {
        children: samplesRoutes,
        component: DocsLayoutComponent,
        path: ""
    },
    {
        children: samplesRoutes,
        component: IndexComponent,
        path: "samples"
    }
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {

    constructor(private router: Router) {
        router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.setOverflow(event.url);
            });
    }

    public setOverflow(url: string) {
        if (url.endsWith("finjs-sample")) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }
}
